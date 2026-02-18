import { i as isInsertV2, a as isRemoveV2, b as isSetAttributesV2, c as isSetTextContentV2, d as isComplexV2 } from './edit-fdcf9a3f.js';
import './plugin-state-api-fe1fb55f.js';

function handleSetTextContent({ element, textContent, }) {
    const { childNodes } = element;
    const restoreChildNodes = Array.from(childNodes).map((node) => ({
        parent: element,
        node,
        reference: null,
    }));
    element.textContent = textContent;
    const undoTextContent = { element, textContent: '' };
    return [undoTextContent, ...restoreChildNodes];
}
function uniqueNSPrefix(element, ns) {
    let i = 1;
    const attributes = Array.from(element.attributes);
    const hasSamePrefix = (attribute) => attribute.prefix === `ens${i}` && attribute.namespaceURI !== ns;
    const nsOrNull = new Set([null, ns]);
    const differentNamespace = (prefix) => !nsOrNull.has(element.lookupNamespaceURI(prefix));
    while (differentNamespace(`ens${i}`) || attributes.find(hasSamePrefix))
        i += 1;
    return `ens${i}`;
}
const xmlAttributeName = /^(?!xml|Xml|xMl|xmL|XMl|xML|XmL|XML)[A-Za-z_][A-Za-z0-9-_.]*(:[A-Za-z_][A-Za-z0-9-_.]*)?$/;
function validName(name) {
    return xmlAttributeName.test(name);
}
function handleSetAttributes({ element, attributes, attributesNS, }) {
    const oldAttributes = { ...attributes };
    const oldAttributesNS = { ...attributesNS };
    // save element's non-prefixed attributes for undo
    Object.keys(attributes)
        .reverse()
        .forEach((name) => {
        oldAttributes[name] = element.getAttribute(name);
    });
    // change element's non-prefixed attributes
    for (const entry of Object.entries(attributes)) {
        try {
            const [name, value] = entry;
            if (value === null)
                element.removeAttribute(name);
            else
                element.setAttribute(name, value);
        }
        catch (_e) {
            // undo nothing if update didn't work on this attribute
            delete oldAttributes[entry[0]];
        }
    }
    // save element's namespaced attributes for undo
    Object.entries(attributesNS).forEach(([ns, attrs]) => {
        Object.keys(attrs)
            .filter(validName)
            .reverse()
            .forEach((name) => {
            oldAttributesNS[ns] = {
                ...oldAttributesNS[ns],
                [name]: element.getAttributeNS(ns, name.split(':').pop()),
            };
        });
        Object.keys(attrs)
            .filter((name) => !validName(name))
            .forEach((name) => {
            delete oldAttributesNS[ns][name];
        });
    });
    // change element's namespaced attributes
    for (const nsEntry of Object.entries(attributesNS)) {
        const [ns, attrs] = nsEntry;
        for (const entry of Object.entries(attrs).filter(([name]) => validName(name))) {
            try {
                const [name, value] = entry;
                if (value === null) {
                    element.removeAttributeNS(ns, name.split(':').pop());
                }
                else {
                    let qualifiedName = name;
                    if (!qualifiedName.includes(':')) {
                        let prefix = element.lookupPrefix(ns);
                        if (!prefix)
                            prefix = uniqueNSPrefix(element, ns);
                        qualifiedName = `${prefix}:${name}`;
                    }
                    element.setAttributeNS(ns, qualifiedName, value);
                }
            }
            catch (_e) {
                delete oldAttributesNS[ns][entry[0]];
            }
        }
    }
    return {
        element,
        attributes: oldAttributes,
        attributesNS: oldAttributesNS,
    };
}
function handleRemove({ node }) {
    var _a;
    const { parentNode: parent, nextSibling: reference } = node;
    (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(node);
    if (parent)
        return {
            node,
            parent,
            reference,
        };
    return [];
}
function handleInsert({ parent, node, reference, }) {
    try {
        const { parentNode, nextSibling } = node;
        /**
         * This is a workaround for converted edit api v1 events,
         * because if multiple edits are converted, they are converted before the changes from the previous edits are applied to the document
         * so if you first remove an element and then add a clone with changed attributes, the reference will be the element to remove since it hasnt been removed yet
         */
        if (!parent.contains(reference)) {
            reference = null;
        }
        parent.insertBefore(node, reference);
        if (parentNode) {
            // undo: move child node back to original place
            return {
                node,
                parent: parentNode,
                reference: nextSibling,
            };
        }
        // undo: remove orphaned node
        return { node };
    }
    catch (_e) {
        // undo nothing if insert doesn't work on these nodes
        return [];
    }
}
/** Applies an Edit, returning the corresponding 'undo' Edit. */
function handleEditV2(edit) {
    if (isInsertV2(edit))
        return handleInsert(edit);
    if (isRemoveV2(edit))
        return handleRemove(edit);
    if (isSetAttributesV2(edit))
        return handleSetAttributes(edit);
    if (isSetTextContentV2(edit))
        return handleSetTextContent(edit);
    if (isComplexV2(edit))
        return edit.map((edit) => handleEditV2(edit)).reverse();
    return [];
}

class Subject {
    constructor() {
        this.subscribers = [];
    }
    next(value) {
        this.subscribers.forEach(s => s(value));
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        return () => {
            this.unsubscribe(subscriber);
            return subscriber;
        };
    }
    unsubscribe(subscriber) {
        const indexToRemove = this.subscribers.findIndex(s => s === subscriber);
        if (indexToRemove > -1) {
            this.subscribers.splice(indexToRemove, 1);
        }
    }
}

class XMLEditor {
    constructor() {
        this.past = [];
        this.future = [];
        this.commitSubject = new Subject();
        this.undoSubject = new Subject();
        this.redoSubject = new Subject();
    }
    get canUndo() {
        return this.past.length > 0;
    }
    get canRedo() {
        return this.future.length > 0;
    }
    reset() {
        this.past = [];
        this.future = [];
    }
    commit(change, { title, squash } = {}) {
        const commit = squash && this.past.length
            ? this.past[this.past.length - 1]
            : { undo: [], redo: [], time: Date.now() };
        // TODO: Fix type once issue is fixed https://github.com/openscd/oscd-api/issues/57
        const undo = handleEditV2(change);
        // typed as per https://github.com/microsoft/TypeScript/issues/49280#issuecomment-1144181818 recommendation:
        commit.undo.unshift(...[undo].flat(Infinity));
        commit.redo.push(...[change].flat(Infinity));
        if (title)
            commit.title = title;
        if (squash && this.past.length)
            this.past.pop();
        this.past.push(commit);
        this.future = [];
        this.commitSubject.next(commit);
        return commit;
    }
    ;
    undo() {
        const commit = this.past.pop();
        if (!commit)
            return;
        // TODO: Fix type once issue is fixed https://github.com/openscd/oscd-api/issues/57
        handleEditV2(commit.undo);
        this.future.unshift(commit);
        this.undoSubject.next(commit);
        return commit;
    }
    ;
    redo() {
        const commit = this.future.shift();
        if (!commit)
            return;
        // TODO: Fix type once issue is fixed https://github.com/openscd/oscd-api/issues/57
        handleEditV2(commit.redo);
        this.past.push(commit);
        this.redoSubject.next(commit);
        return commit;
    }
    ;
    subscribe(txCallback) {
        return this.commitSubject.subscribe(txCallback);
    }
    ;
    subscribeUndo(txCallback) {
        return this.undoSubject.subscribe(txCallback);
    }
    subscribeRedo(txCallback) {
        return this.redoSubject.subscribe(txCallback);
    }
    subscribeUndoRedo(txCallback) {
        const unsubscribeUndo = this.subscribeUndo(txCallback);
        const unsubscribeRedo = this.subscribeRedo(txCallback);
        return () => {
            unsubscribeUndo();
            unsubscribeRedo();
            return txCallback;
        };
    }
}

function newOpenDocEvent(doc, docName, eventInitDict) {
    return new CustomEvent('open-doc', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { doc, docName, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

/**
 * @deprecated
 */
function newPendingStateEvent(promise, eventInitDict) {
    return new CustomEvent('pending-state', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { promise, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

function isCreate(action) {
    var _a, _b;
    return (action.old === undefined &&
        ((_a = action.new) === null || _a === void 0 ? void 0 : _a.parent) !== undefined &&
        ((_b = action.new) === null || _b === void 0 ? void 0 : _b.element) !== undefined);
}
function isDelete(action) {
    var _a, _b;
    return (((_a = action.old) === null || _a === void 0 ? void 0 : _a.parent) !== undefined &&
        ((_b = action.old) === null || _b === void 0 ? void 0 : _b.element) !== undefined &&
        action.new === undefined);
}
function isMove(action) {
    var _a, _b, _c, _d;
    return (((_a = action.old) === null || _a === void 0 ? void 0 : _a.parent) !== undefined &&
        ((_b = action.old) === null || _b === void 0 ? void 0 : _b.element) !== undefined &&
        ((_c = action.new) === null || _c === void 0 ? void 0 : _c.parent) !== undefined &&
        ((_d = action.new) === null || _d === void 0 ? void 0 : _d.element) == undefined);
}
function isReplace(action) {
    var _a, _b, _c, _d;
    return (((_a = action.old) === null || _a === void 0 ? void 0 : _a.parent) === undefined &&
        ((_b = action.old) === null || _b === void 0 ? void 0 : _b.element) !== undefined &&
        ((_c = action.new) === null || _c === void 0 ? void 0 : _c.parent) === undefined &&
        ((_d = action.new) === null || _d === void 0 ? void 0 : _d.element) !== undefined);
}
function isUpdate(action) {
    return (action.old === undefined &&
        action.new === undefined &&
        action.element !== undefined &&
        action.newAttributes !== undefined &&
        action.oldAttributes !== undefined);
}
function isSimple(action) {
    return !(action.actions instanceof Array);
}
function newActionEvent(action, initiator = 'user', eventInitDict) {
    return new CustomEvent('editor-action', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { action, initiator, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

export { XMLEditor as X, newPendingStateEvent as a, newActionEvent as b, isCreate as c, isDelete as d, isUpdate as e, isMove as f, isReplace as g, isSimple as i, newOpenDocEvent as n };
