import { __decorate } from "../../_snowpack/pkg/tslib.js";
import { css, html, nothing, LitElement, svg } from '../../_snowpack/pkg/lit.js';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { customElement, property, query, state } from '../../_snowpack/pkg/lit/decorators.js';
import { classMap } from '../../_snowpack/pkg/lit/directives/class-map.js';
import { createRef, ref } from '../../_snowpack/pkg/lit/directives/ref.js';
import { newEditEvent } from '@openscd/open-scd-core';
import '../../_snowpack/pkg/@material/mwc-dialog.js';
import '../../_snowpack/pkg/@material/mwc-list.js';
import '../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js';
import '../../_snowpack/pkg/@material/mwc-snackbar.js';
import '../../_snowpack/pkg/@material/mwc-textfield.js';
import { getReference, identity } from '@openscd/oscd-scl';
import { bayGraphic, eqRingPath, equipmentGraphic, movePath, ptrIcon, resizeBRPath, resizePath, resizeTLPath, symbols, voltageLevelGraphic, zigZag2WTransform, zigZagPath, } from './icons.js';
import { attributes, connectionStartPoints, elementPath, hasIedCoordinates, isBusBar, isEqType, newConnectEvent, newPlaceEvent, newPlaceLabelEvent, newResizeEvent, newResizeTLEvent, newRotateEvent, newStartConnectEvent, newStartPlaceEvent, newStartPlaceLabelEvent, newStartResizeBREvent, newStartResizeTLEvent, prettyPrint, privType, removeNode, removeTerminal, ringedEqTypes, robotoDataURL, singleTerminal, sldNs, svgNs, uniqueName, uuid, xlinkNs, xmlBoolean, } from './util.js';
const parentTags = {
    ConductingEquipment: ['Bay'],
    Bay: ['VoltageLevel'],
    VoltageLevel: ['Substation'],
    PowerTransformer: ['Bay', 'VoltageLevel', 'Substation'],
    IED: ['Bay', 'VoltageLevel', 'Substation'],
};
function newEditWizardEvent(element) {
    return new CustomEvent('oscd-edit-wizard-request', {
        bubbles: true,
        composed: true,
        detail: { element },
    });
}
function contains([x1, y1, w1, h1], [x2, y2, w2, h2]) {
    return x1 <= x2 && y1 <= y2 && x1 + w1 >= x2 + w2 && y1 + h1 >= y2 + h2;
}
function overlaps([x1, y1, w1, h1], [x2, y2, w2, h2]) {
    if (x1 >= x2 + w2 || x2 >= x1 + w1)
        return false;
    if (y1 >= y2 + h2 || y2 >= y1 + h1)
        return false;
    return true;
}
function containsRect(element, x0, y0, w0, h0) {
    const { pos: [x, y], dim: [w, h], } = attributes(element);
    return contains([x, y, w, h], [x0, y0, w0, h0]);
}
function overlapsRect(element, x0, y0, w0, h0) {
    const { pos: [x, y], dim: [w, h], } = attributes(element);
    return overlaps([x, y, w, h], [x0, y0, w0, h0]);
}
function cleanXML(element) {
    var _a;
    const cl = element.classList;
    if (cl.contains('handle') ||
        cl.contains('preview') ||
        cl.contains('port') ||
        (cl.contains('label') && cl.contains('container'))) {
        element.remove();
        return;
    }
    if (cl.contains('voltagelevel') || cl.contains('bay'))
        (_a = element.querySelector('rect')) === null || _a === void 0 ? void 0 : _a.remove();
    Array.from(element.childNodes).forEach(child => {
        if (child.nodeType === 8)
            element.removeChild(child);
        if (child.nodeType === 1)
            cleanXML(child);
    });
}
function between(a, x, b) {
    return (a <= x && x <= b) || (b <= x && x <= a);
}
function liesOn([x, y], [x1, y1], [x2, y2]) {
    return ((x === x1 && x === x2 && between(y1, y, y2)) ||
        (y === y1 && y === y2 && between(x1, x, x2)));
}
function pointsOnLine(p1, p2) {
    const points = [];
    const coord = p1[0] === p2[0] ? 1 : 0;
    let p = p1[coord] < p2[coord] ? p1 : p2;
    const q = p === p1 ? p2 : p1;
    p = p.slice();
    p[coord] = Math.floor(p[coord] * 2) / 2;
    while (p[coord] <= q[coord]) {
        points.push(p);
        p = p.slice();
        p[coord] += 0.5;
    }
    return points;
}
function distance([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
function closestPointOnLine(p, p1, p2) {
    let point = p1;
    const points = pointsOnLine(p1, p2);
    points.forEach(candidate => {
        if (distance(candidate, p) < distance(point, p))
            point = candidate;
    });
    return point;
}
function findIntersection(p1, p2, lp1, lp2) {
    if (liesOn(p1, lp1, lp2))
        return p1;
    if (liesOn(lp1, p1, p2))
        return lp1;
    if (liesOn(lp2, p1, p2))
        return lp2;
    return closestPointOnLine(p2, lp1, lp2);
}
function cleanPath(path) {
    let i = path.length - 2;
    while (i > 0) {
        const [x, y] = path[i];
        const [nx, ny] = path[i + 1];
        const [px, py] = path[i - 1];
        if ((x === nx && y === ny) ||
            (x === nx && x === px) ||
            (y === ny && y === py))
            path.splice(i, 1);
        i -= 1;
    }
}
function isBay(element) {
    return element.tagName === 'Bay' && !isBusBar(element);
}
function preventDefault(e) {
    if (e.button === 1)
        e.preventDefault();
}
function copy(element, nsp) {
    const clone = element.cloneNode(true);
    const terminals = new Set(Array.from(element.querySelectorAll('Terminal, NeutralPoint')));
    const cNodes = new Set(Array.from(element.querySelectorAll('ConnectivityNode')));
    terminals.forEach(terminal => {
        const cNode = element.ownerDocument.querySelector(`ConnectivityNode[pathName="${terminal.getAttribute('connectivityNode')}"]`);
        if (cNode)
            cNodes.add(cNode);
    });
    const foreignCNodes = new Set();
    cNodes.forEach(cNode => {
        const foreignTerminal = Array.from(element.ownerDocument.querySelectorAll(`[connectivityNode="${cNode.getAttribute('pathName')}"]`)).find(terminal => !terminals.has(terminal));
        if (foreignTerminal ||
            (isBusBar(cNode.closest('Bay')) &&
                cNode.closest(element.tagName) !== element))
            foreignCNodes.add(cNode);
    });
    foreignCNodes.forEach(cNode => {
        var _a, _b, _c;
        if (cNode.closest(element.tagName) === element) {
            if (isBusBar(cNode.closest('Bay')))
                (_b = (_a = clone
                    .querySelector(`ConnectivityNode[pathName="${cNode.getAttribute('pathName')}"]`)) === null || _a === void 0 ? void 0 : _a.closest('Bay')) === null || _b === void 0 ? void 0 : _b.remove();
            else
                (_c = clone
                    .querySelector(`ConnectivityNode[pathName="${cNode.getAttribute('pathName')}"]`)) === null || _c === void 0 ? void 0 : _c.remove();
        }
        terminals.forEach(terminal => {
            var _a;
            if (terminal.getAttribute('connectivityNode') ===
                cNode.getAttribute('pathName'))
                (_a = clone
                    .querySelector(`[*|uuid="${terminal.getAttributeNS(sldNs, 'uuid')}"]`)) === null || _a === void 0 ? void 0 : _a.remove();
        });
    });
    Array.from(clone.querySelectorAll('Terminal, NeutralPoint')).forEach(terminal => {
        const oldUUID = terminal.getAttributeNS(sldNs, 'uuid');
        if (!oldUUID)
            return;
        const newUUID = uuid();
        Array.from(clone.querySelectorAll(`Vertex[*|uuid="${oldUUID}"`)).forEach(vertex => vertex.setAttributeNS(sldNs, `${nsp}:uuid`, newUUID));
        terminal.setAttributeNS(sldNs, `${nsp}:uuid`, newUUID);
    });
    return clone;
}
function renderMenuHeader(element) {
    const name = element.getAttribute('name') || element.tagName;
    let detail = element.getAttribute('desc');
    const type = element.getAttribute('type');
    if (type) {
        if (detail)
            detail = html `${type} &mdash; ${detail}`;
        else
            detail = type;
    }
    let footerGraphic = equipmentGraphic(null);
    if (element.tagName === 'PowerTransformer') {
        const windings = element.querySelectorAll('TransformerWinding').length;
        const { kind } = attributes(element);
        if (windings === 3) {
            footerGraphic = ptrIcon(3, { slot: 'graphic' });
        }
        else if (windings === 2) {
            footerGraphic = ptrIcon(2, { slot: 'graphic', kind });
        }
        else {
            footerGraphic = ptrIcon(1, { slot: 'graphic', kind });
        }
    }
    else if (element.tagName === 'TransformerWinding')
        footerGraphic = ptrIcon(1, { slot: 'graphic' });
    else if (element.tagName === 'ConductingEquipment')
        footerGraphic = equipmentGraphic(type);
    else if (element.tagName === 'Bay' && isBusBar(element))
        footerGraphic = html `<mwc-icon slot="graphic">horizontal_rule</mwc-icon>`;
    else if (element.tagName === 'Bay')
        footerGraphic = bayGraphic;
    else if (element.tagName === 'VoltageLevel')
        footerGraphic = voltageLevelGraphic;
    else if (element.tagName === 'Text') {
        footerGraphic = html `<mwc-icon slot="graphic">title</mwc-icon>`;
        detail = element.textContent;
    }
    return html `<mwc-list-item ?twoline=${detail} graphic="avatar" noninteractive>
    <span>${name}</span>
    ${detail
        ? html `<span
          slot="secondary"
          style="display: inline-block; max-width: 15em; overflow: hidden; text-overflow: ellipsis;"
        >
          ${detail}
        </span>`
        : nothing}
    ${footerGraphic}
  </mwc-list-item>`;
}
let SLDEditor = class SLDEditor extends LitElement {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.gridSize = 32;
        this.nsp = 'esld';
        this.placingOffset = [0, 0];
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseX2 = 0;
        this.mouseY2 = 0;
        this.mouseX2f = 0;
        this.mouseY2f = 0;
        this.coordinatesRef = createRef();
        this.handleKeydown = ({ key }) => {
            if (key === 'Escape')
                this.menu = undefined;
        };
        this.handleClick = (e) => {
            if (this.menu &&
                !e
                    .composedPath()
                    .find(elm => 'id' in elm && elm.id === 'sld-context-menu')) {
                e.stopImmediatePropagation();
                this.menu = undefined;
            }
        };
    }
    get idle() {
        return !(this.placing ||
            this.resizingBR ||
            this.resizingTL ||
            this.placingLabel ||
            this.connecting);
    }
    positionCoordinates(e) {
        var _a;
        const coordinatesDiv = (_a = this.coordinatesRef) === null || _a === void 0 ? void 0 : _a.value;
        if (coordinatesDiv) {
            coordinatesDiv.style.top = `${e.clientY}px`;
            coordinatesDiv.style.left = `${e.clientX + 16}px`;
        }
    }
    openMenu(element, e) {
        if (this.idle)
            this.menu = { element, left: e.clientX, top: e.clientY };
        e.preventDefault();
    }
    svgCoordinates(clientX, clientY) {
        const p = new DOMPoint(clientX, clientY);
        const { x, y } = p.matrixTransform(this.sld.getScreenCTM().inverse());
        return [x, y].map(coord => Math.max(0, coord));
    }
    canPlaceAt(element, x, y, w, h) {
        if (element.tagName === 'Substation' || element.tagName === 'IED')
            return true;
        const overlappingSibling = Array.from(this.substation.querySelectorAll(`${element.tagName}, PowerTransformer`)).find(sibling => sibling.closest(element.tagName) !== element &&
            overlapsRect(sibling, x, y, w, h) &&
            !isBusBar(sibling));
        if (overlappingSibling && !isBusBar(element)) {
            return false;
        }
        const containingParent = element.tagName === 'VoltageLevel' ||
            element.tagName === 'PowerTransformer'
            ? containsRect(this.substation, x, y, w, h)
            : Array.from(this.substation.querySelectorAll(parentTags[element.tagName].join(','))).find(parent => !isBusBar(parent) && containsRect(parent, x, y, w, h));
        if (containingParent)
            return true;
        return false;
    }
    canResizeTo(element, w, h) {
        const { pos: [x, y], dim: [oldW, oldH], } = attributes(element);
        if (!this.canPlaceAt(element, x, y, w, h) &&
            this.canPlaceAt(element, x, y, oldW, oldH))
            return false;
        const lostChild = Array.from(element.children).find(child => {
            var _a;
            if (!((_a = parentTags[child.tagName]) === null || _a === void 0 ? void 0 : _a.includes(element.tagName)))
                return false;
            const { pos: [cx, cy], dim: [cw, ch], } = attributes(child);
            return !contains([x, y, w, h], [cx, cy, cw, ch]);
        });
        if (lostChild)
            return false;
        return true;
    }
    canResizeToTL(element, x, y, w, h) {
        if (!this.canPlaceAt(element, x, y, w, h))
            return false;
        const lostChild = Array.from(element.children).find(child => {
            var _a;
            if (!((_a = parentTags[child.tagName]) === null || _a === void 0 ? void 0 : _a.includes(element.tagName)))
                return false;
            const { pos: [cx, cy], dim: [cw, ch], } = attributes(child);
            return !contains([x, y, w, h], [cx, cy, cw, ch]);
        });
        if (lostChild)
            return false;
        return true;
    }
    renderedLabelPosition(element) {
        let { label: [x, y], } = attributes(element);
        const [offsetX, offsetY] = this.placingOffset;
        if (this.placing &&
            element.closest(this.placing.tagName) === this.placing) {
            const { pos: [parentX, parentY], } = attributes(this.placing);
            x += this.mouseX - parentX - offsetX;
            y += this.mouseY - parentY - offsetY;
        }
        if (this.placingLabel === element) {
            x = this.mouseX2 - 0.5 - offsetX;
            y = this.mouseY2 + 0.5 - offsetY;
        }
        if (this.resizingTL === element) {
            const { pos: [resX, resY], dim: [resW, resH], } = attributes(element);
            if (resX === x && resY === y) {
                x += Math.min(this.mouseX, resX + resW - 1) - resX;
                y += Math.min(this.mouseY, resY + resH - 1) - resY;
            }
        }
        return [x, y];
    }
    renderedPosition(element) {
        let { pos: [x, y], } = attributes(element);
        if (this.placing &&
            element.closest(this.placing.tagName) === this.placing) {
            const { pos: [parentX, parentY], } = attributes(this.placing);
            const [offsetX, offsetY] = this.placingOffset;
            x += this.mouseX - parentX - offsetX;
            y += this.mouseY - parentY - offsetY;
        }
        return [x, y];
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('keydown', this.handleKeydown);
        window.addEventListener('click', this.handleClick, true);
        window.addEventListener('click', this.positionCoordinates);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('click', this.positionCoordinates);
    }
    saveSVG() {
        const sld = this.sld.cloneNode(true);
        cleanXML(sld);
        const blob = new Blob([prettyPrint(sld)], {
            type: 'application/xml',
        });
        const a = document.createElement('a');
        a.download = `${this.substation.getAttribute('name')}.svg`;
        a.href = URL.createObjectURL(blob);
        a.dataset.downloadurl = ['application/xml', a.download, a.href].join(':');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => {
            URL.revokeObjectURL(a.href);
        }, 5000);
    }
    nearestOpenTerminal(equipment) {
        if (!equipment)
            return undefined;
        const topTerminal = equipment.querySelector('Terminal[name="T1"]');
        const bottomTerminal = equipment.querySelector('Terminal:not([name="T1"])');
        const oneSided = singleTerminal.has(equipment.getAttribute('type'));
        if (topTerminal && bottomTerminal)
            return undefined;
        if (oneSided && (topTerminal || bottomTerminal))
            return undefined;
        if (oneSided)
            return 'T1';
        if (topTerminal)
            return 'T2';
        if (bottomTerminal)
            return 'T1';
        const [mx, my] = [this.mouseX2f, this.mouseY2f];
        const { rot, pos: [x, y], } = attributes(equipment);
        if (rot === 0 && my >= y + 0.5)
            return 'T2';
        if (rot === 1 && mx < x + 0.5)
            return 'T2';
        if (rot === 2 && my < y + 0.5)
            return 'T2';
        if (rot === 3 && mx >= x + 0.5)
            return 'T2';
        return 'T1';
    }
    groundTerminal(equipment, name) {
        const neutralPoint = name.startsWith('N');
        const bay = equipment.closest('Bay');
        if (!bay) {
            this.groundHint.show();
            return;
        }
        const edits = [];
        let grounded = bay.querySelector(':scope > ConnectivityNode[name="grounded"]');
        let pathName = grounded === null || grounded === void 0 ? void 0 : grounded.getAttribute('pathName');
        if (!pathName) {
            pathName = elementPath(bay, 'grounded');
            grounded = this.doc.createElementNS(this.doc.documentElement.namespaceURI, 'ConnectivityNode');
            grounded.setAttribute('name', 'grounded');
            grounded.setAttribute('pathName', pathName);
            edits.push({
                parent: bay,
                node: grounded,
                reference: getReference(bay, 'ConnectivityNode'),
            });
        }
        const tagName = neutralPoint ? 'NeutralPoint' : 'Terminal';
        const terminal = this.doc.createElementNS(this.doc.documentElement.namespaceURI, tagName);
        terminal.setAttribute('name', name);
        terminal.setAttribute('cNodeName', 'grounded');
        const sName = bay.closest('Substation').getAttribute('name');
        if (sName)
            terminal.setAttribute('substationName', sName);
        const vlName = bay.closest('VoltageLevel').getAttribute('name');
        if (vlName)
            terminal.setAttribute('voltageLevelName', vlName);
        const bName = bay.getAttribute('name');
        if (bName)
            terminal.setAttribute('bayName', bName);
        terminal.setAttribute('connectivityNode', pathName);
        edits.push({
            parent: equipment,
            node: terminal,
            reference: getReference(equipment, tagName),
        });
        this.dispatchEvent(newEditEvent(edits));
    }
    flipElement(element) {
        const { flip, kind } = attributes(element);
        const edits = [
            {
                element,
                attributes: {
                    [`${this.nsp}:flip`]: {
                        namespaceURI: sldNs,
                        value: flip ? null : 'true',
                    },
                },
            },
        ];
        if (element.tagName === 'PowerTransformer') {
            const winding = element.querySelector('TransformerWinding');
            Array.from(winding.querySelectorAll('Terminal')).forEach(terminal => edits.push(...removeTerminal(terminal)));
            if (kind === 'earthing') {
                Array.from(winding.querySelectorAll('NeutralPoint')).forEach(np => edits.push(...removeTerminal(np)));
            }
        }
        this.dispatchEvent(newEditEvent(edits));
    }
    addTextTo(element) {
        const { pos: [x, y], } = attributes(element);
        const text = this.doc.createElementNS(this.doc.documentElement.namespaceURI, 'Text');
        text.setAttributeNS(sldNs, `${this.nsp}:lx`, x.toString());
        text.setAttributeNS(sldNs, `${this.nsp}:ly`, (y < 2 ? y + 1 : y - 1).toString());
        this.dispatchEvent(newEditEvent({
            node: text,
            parent: element,
            reference: getReference(element, 'Text'),
        }));
    }
    transformerWindingMenuItems(winding) {
        const tapChanger = winding.querySelector('TapChanger');
        const items = [
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Edit${tapChanger ? ' Winding' : nothing}</span>
          <mwc-icon slot="graphic">edit</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newEditWizardEvent(winding)),
            },
        ];
        if (tapChanger)
            items.unshift({
                handler: () => this.dispatchEvent(newEditEvent({ node: tapChanger })),
                content: html `<mwc-list-item graphic="icon">
            <span>Remove Tap Changer</span>
            <mwc-icon slot="graphic">remove</mwc-icon>
          </mwc-list-item>`,
            }, {
                content: html `<mwc-list-item graphic="icon">
            <span>Edit Tap Changer</span>
            <mwc-icon slot="graphic">edit</mwc-icon>
          </mwc-list-item>`,
                handler: () => this.dispatchEvent(newEditWizardEvent(tapChanger)),
            });
        else
            items.unshift({
                handler: () => {
                    const node = this.doc.createElementNS(this.doc.documentElement.namespaceURI, 'TapChanger');
                    node.setAttribute('name', 'LTC');
                    node.setAttribute('type', 'LTC');
                    node.setAttribute('name', uniqueName(node, winding));
                    this.dispatchEvent(newEditEvent({
                        parent: winding,
                        node,
                        reference: getReference(winding, 'TapChanger'),
                    }));
                },
                content: html `<mwc-list-item graphic="icon">
          <span>Add Tap Changer</span>
          <mwc-icon slot="graphic">north_east</mwc-icon>
        </mwc-list-item>`,
            });
        const neutralPoints = Array.from(winding.querySelectorAll('NeutralPoint'));
        if (neutralPoints.length)
            items.unshift({
                handler: () => this.dispatchEvent(newEditEvent(neutralPoints.map(neutralPoint => removeTerminal(neutralPoint)))),
                content: html `<mwc-list-item graphic="icon">
          <span>Detach Neutral Point</span>
          <mwc-icon slot="graphic">remove_circle_outline</mwc-icon>
        </mwc-list-item>`,
            });
        const terminals = Array.from(winding.querySelectorAll('Terminal'));
        if (terminals.length)
            items.unshift({
                handler: () => this.dispatchEvent(newEditEvent(terminals.map(terminal => removeTerminal(terminal)))),
                content: html `<mwc-list-item graphic="icon">
          <span>Detach Terminal${terminals.length > 1 ? 's' : nothing}</span>
          <mwc-icon slot="graphic">cancel</mwc-icon>
        </mwc-list-item>`,
            });
        return items;
    }
    transformerMenuItems(transformer) {
        const text = transformer.querySelector(':scope > Text');
        const { pos: [x, y], } = attributes(transformer);
        const offset = [this.mouseX - x, this.mouseY - y];
        const items = [
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Rotate</span>
          <mwc-icon slot="graphic">rotate_90_degrees_cw</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newRotateEvent(transformer));
                },
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Copy</span>
          <mwc-icon slot="graphic">copy_all</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceEvent(copy(transformer, this.nsp), offset)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move</span>
          <svg
            xmlns="${svgNs}"
            height="24"
            width="24"
            slot="graphic"
            viewBox="0 96 960 960"
          >
            ${movePath}
          </svg>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceEvent(transformer, offset)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move Label</span>
          <mwc-icon slot="graphic">text_rotation_none</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceLabelEvent(transformer)),
            },
            text
                ? {
                    content: html `<mwc-list-item graphic="icon">
              <span>Delete Text</span>
              <mwc-icon slot="graphic">format_strikethrough</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.dispatchEvent(newEditEvent({ node: text })),
                }
                : {
                    content: html `<mwc-list-item graphic="icon">
              <span>Add Text</span>
              <mwc-icon slot="graphic">title</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.addTextTo(transformer),
                },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Edit</span>
          <mwc-icon slot="graphic">edit</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newEditWizardEvent(transformer)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Delete</span>
          <mwc-icon slot="graphic">delete</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    const edits = [];
                    Array.from(transformer.querySelectorAll('Terminal, NeutralPoint')).forEach(terminal => edits.push(...removeTerminal(terminal)));
                    edits.push({ node: transformer });
                    this.dispatchEvent(newEditEvent(edits));
                },
            },
        ];
        const kind = transformer.getAttributeNS(sldNs, 'kind');
        const windingCount = transformer.querySelectorAll('TransformerWinding').length;
        if (kind === 'auto' || (kind === 'earthing' && windingCount === 2))
            items.unshift({
                content: html `<mwc-list-item graphic="icon">
          <span>Mirror</span>
          <mwc-icon slot="graphic">flip</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.flipElement(transformer),
            });
        return items;
    }
    equipmentMenuItems(equipment) {
        const textElement = equipment.querySelector(':scope > Text');
        const items = [
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Mirror</span>
          <mwc-icon slot="graphic">flip</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.flipElement(equipment),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Rotate</span>
          <mwc-icon slot="graphic">rotate_90_degrees_cw</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newRotateEvent(equipment));
                },
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Copy</span>
          <mwc-icon slot="graphic">copy_all</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceEvent(copy(equipment, this.nsp))),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move</span>
          <svg
            xmlns="${svgNs}"
            height="24"
            width="24"
            slot="graphic"
            viewBox="0 96 960 960"
          >
            ${movePath}
          </svg>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceEvent(equipment)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move Label</span>
          <mwc-icon slot="graphic">text_rotation_none</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceLabelEvent(equipment)),
            },
            textElement
                ? {
                    content: html `<mwc-list-item graphic="icon">
              <span>Remove Text</span>
              <mwc-icon slot="graphic">format_strikethrough</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.dispatchEvent(newEditEvent({ node: textElement })),
                }
                : {
                    content: html `<mwc-list-item graphic="icon">
              <span>Add Text</span>
              <mwc-icon slot="graphic">title</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.addTextTo(equipment),
                },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Edit</span>
          <mwc-icon slot="graphic">edit</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newEditWizardEvent(equipment)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Delete</span>
          <mwc-icon slot="graphic">delete</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    const edits = [];
                    Array.from(equipment.querySelectorAll('Terminal')).forEach(terminal => edits.push(...removeTerminal(terminal)));
                    edits.push({ node: equipment });
                    this.dispatchEvent(newEditEvent(edits));
                },
            },
        ];
        const { rot } = attributes(equipment);
        const icons = {
            connect: ['north', 'east', 'south', 'west'],
            ground: ['expand_less', 'chevron_right', 'expand_more', 'chevron_left'],
            disconnect: [
                'arrow_drop_up',
                'arrow_right',
                'arrow_drop_down',
                'arrow_left',
            ],
        };
        const texts = {
            connect: [
                'Connect top',
                'Connect right',
                'Connect bottom',
                'Connect left',
            ],
            ground: ['Ground top', 'Ground right', 'Ground bottom', 'Ground left'],
            disconnect: [
                'Detach top',
                'Detach right',
                'Detach bottom',
                'Detach left',
            ],
        };
        const icon = (kind, top) => icons[kind][top ? rot % 4 : (rot + 2) % 4];
        const text = (kind, top) => texts[kind][top ? rot % 4 : (rot + 2) % 4];
        const item = (kind, top) => html `<mwc-list-item graphic="icon">
        <span>${text(kind, top)}</span>
        <mwc-icon slot="graphic">${icon(kind, top)}</mwc-icon>
      </mwc-list-item>`;
        const topTerminal = equipment.querySelector('Terminal[name="T1"]');
        const bottomTerminal = equipment.querySelector('Terminal:not([name="T1"])');
        if (bottomTerminal)
            items.unshift({
                handler: () => this.dispatchEvent(newEditEvent(removeTerminal(bottomTerminal))),
                content: item('disconnect', false),
            });
        else if (!singleTerminal.has(equipment.getAttribute('type'))) {
            items.unshift({
                handler: () => this.dispatchEvent(newStartConnectEvent({
                    from: equipment,
                    fromTerminal: 'T2',
                    path: connectionStartPoints(equipment).T2,
                })),
                content: item('connect', false),
            }, {
                handler: () => this.groundTerminal(equipment, 'T2'),
                content: item('ground', false),
            });
        }
        if (topTerminal)
            items.unshift({
                handler: () => this.dispatchEvent(newEditEvent(removeTerminal(topTerminal))),
                content: item('disconnect', true),
            });
        else
            items.unshift({
                handler: () => this.dispatchEvent(newStartConnectEvent({
                    from: equipment,
                    fromTerminal: 'T1',
                    path: connectionStartPoints(equipment).T1,
                })),
                content: item('connect', true),
            }, {
                handler: () => this.groundTerminal(equipment, 'T1'),
                content: item('ground', true),
            });
        return items;
    }
    busBarMenuItems(busBar) {
        const text = busBar.querySelector(':scope > Text');
        const { pos: [x, y], } = attributes(busBar);
        const offset = [this.mouseX - x, this.mouseY - y];
        const items = [
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Resize</span>
          <svg
            xmlns="${svgNs}"
            slot="graphic"
            width="24"
            height="24"
            viewBox="0 96 960 960"
          >
            ${resizeBRPath}
          </svg>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartResizeBREvent(busBar)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move</span>
          <svg
            xmlns="${svgNs}"
            height="24"
            width="24"
            slot="graphic"
            viewBox="0 96 960 960"
          >
            ${movePath}
          </svg>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceEvent(busBar, offset)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move Label</span>
          <mwc-icon slot="graphic">text_rotation_none</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceLabelEvent(busBar)),
            },
            text
                ? {
                    content: html `<mwc-list-item graphic="icon">
              <span>Remove Text</span>
              <mwc-icon slot="graphic">format_strikethrough</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.dispatchEvent(newEditEvent({ node: text })),
                }
                : {
                    content: html `<mwc-list-item graphic="icon">
              <span>Add Text</span>
              <mwc-icon slot="graphic">title</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.addTextTo(busBar),
                },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Edit</span>
          <mwc-icon slot="graphic">edit</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newEditWizardEvent(busBar)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Delete</span>
          <mwc-icon slot="graphic">delete</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    const node = busBar.querySelector('ConnectivityNode');
                    this.dispatchEvent(newEditEvent([...removeNode(node), { node: busBar }]));
                },
            },
        ];
        return items;
    }
    containerMenuItems(bayOrVL) {
        const text = bayOrVL.querySelector(':scope > Text');
        const { pos: [x, y], } = attributes(bayOrVL);
        const offset = [this.mouseX - x, this.mouseY - y];
        const items = [
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Resize</span>
          <svg
            xmlns="${svgNs}"
            slot="graphic"
            width="24"
            height="24"
            viewBox="0 96 960 960"
          >
            ${resizeBRPath}
          </svg>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartResizeBREvent(bayOrVL)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Copy</span>
          <mwc-icon slot="graphic">copy_all</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceEvent(copy(bayOrVL, this.nsp), offset)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move</span>
          <svg
            xmlns="${svgNs}"
            height="24"
            width="24"
            slot="graphic"
            viewBox="0 96 960 960"
          >
            ${movePath}
          </svg>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceEvent(bayOrVL, offset)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move Label</span>
          <mwc-icon slot="graphic">text_rotation_none</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceLabelEvent(bayOrVL)),
            },
            text
                ? {
                    content: html `<mwc-list-item graphic="icon">
              <span>Remove Text</span>
              <mwc-icon slot="graphic">format_strikethrough</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.dispatchEvent(newEditEvent({ node: text })),
                }
                : {
                    content: html `<mwc-list-item graphic="icon">
              <span>Add Text</span>
              <mwc-icon slot="graphic">title</mwc-icon>
            </mwc-list-item>`,
                    handler: () => this.addTextTo(bayOrVL),
                },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Edit</span>
          <mwc-icon slot="graphic">edit</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newEditWizardEvent(bayOrVL)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Delete</span>
          <mwc-icon slot="graphic">delete</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    const edits = [];
                    Array.from(bayOrVL.getElementsByTagName('ConnectivityNode')).forEach(cNode => {
                        if (Array.from(this.doc.querySelectorAll(`[connectivityNode="${cNode.getAttribute('pathName')}"]`)).find(terminal => terminal.closest(bayOrVL.tagName) !== bayOrVL))
                            edits.push(...removeNode(cNode));
                    });
                    Array.from(bayOrVL.querySelectorAll('Terminal, NeutralPoint')).forEach(terminal => {
                        const cNode = this.doc.querySelector(`ConnectivityNode[pathName="${terminal.getAttribute('connectivityNode')}"]`);
                        if (cNode && cNode.closest(bayOrVL.tagName) !== bayOrVL)
                            edits.push(...removeNode(cNode));
                    });
                    edits.push({ node: bayOrVL });
                    this.dispatchEvent(newEditEvent(edits));
                },
            },
        ];
        return items;
    }
    textMenuItems(text) {
        const { weight, color } = attributes(text);
        const items = [
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Rotate</span>
          <mwc-icon slot="graphic">rotate_90_degrees_cw</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newRotateEvent(text));
                },
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Move</span>
          <svg
            xmlns="${svgNs}"
            height="24"
            width="24"
            slot="graphic"
            viewBox="0 96 960 960"
          >
            ${movePath}
          </svg>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newStartPlaceLabelEvent(text)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Edit</span>
          <mwc-icon slot="graphic">edit</mwc-icon>
        </mwc-list-item>`,
                handler: () => this.dispatchEvent(newEditWizardEvent(text)),
            },
            {
                content: html `<mwc-list-item graphic="icon">
          <span>Delete</span>
          <mwc-icon slot="graphic">delete</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newEditEvent({ node: text }));
                },
            },
        ];
        if (weight !== 500)
            items.unshift({
                content: html `<mwc-list-item graphic="icon">
          <span>Bold</span>
          <mwc-icon slot="graphic">format_bold</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newEditEvent({
                        element: text,
                        attributes: {
                            [`${this.nsp}:weight`]: { namespaceURI: sldNs, value: '500' },
                        },
                    }));
                },
            });
        if (weight !== 300)
            items.unshift({
                content: html `<mwc-list-item graphic="icon">
          <span>Remove Formatting</span>
          <mwc-icon slot="graphic">format_clear</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newEditEvent({
                        element: text,
                        attributes: {
                            [`${this.nsp}:weight`]: { namespaceURI: sldNs, value: null },
                        },
                    }));
                },
            });
        if (color.toUpperCase() !== '#BB1326')
            items.unshift({
                content: html `<mwc-list-item
          graphic="icon"
          style="--mdc-theme-text-primary-on-background: #BB1326; --mdc-theme-text-icon-on-background: #BB1326;"
        >
          <span>Red</span>
          <mwc-icon slot="graphic">format_color_text</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newEditEvent({
                        element: text,
                        attributes: {
                            [`${this.nsp}:color`]: {
                                namespaceURI: sldNs,
                                value: '#BB1326',
                            },
                        },
                    }));
                },
            });
        if (color.toUpperCase() !== '#12579B')
            items.unshift({
                content: html `<mwc-list-item
          graphic="icon"
          style="--mdc-theme-text-primary-on-background: #12579B; --mdc-theme-text-icon-on-background: #12579B;"
        >
          <span>Blue</span>
          <mwc-icon slot="graphic">format_color_text</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newEditEvent({
                        element: text,
                        attributes: {
                            [`${this.nsp}:color`]: {
                                namespaceURI: sldNs,
                                value: '#12579B',
                            },
                        },
                    }));
                },
            });
        if (color !== '#000')
            items.unshift({
                content: html `<mwc-list-item graphic="icon">
          <span>Reset Color</span>
          <mwc-icon slot="graphic">format_color_reset</mwc-icon>
        </mwc-list-item>`,
                handler: () => {
                    this.dispatchEvent(newEditEvent({
                        element: text,
                        attributes: {
                            [`${this.nsp}:color`]: {
                                namespaceURI: sldNs,
                                value: null,
                            },
                        },
                    }));
                },
            });
        return items;
    }
    renderMenu() {
        if (!this.menu)
            return html ``;
        const { element } = this.menu;
        const items = [
            { content: renderMenuHeader(element) },
            { content: html `<li divider role="separator"></li>` },
        ];
        if (element.tagName === 'ConductingEquipment')
            items.push(...this.equipmentMenuItems(element));
        else if (element.tagName === 'PowerTransformer')
            items.push(...this.transformerMenuItems(element));
        else if (element.tagName === 'Bay' && isBusBar(element))
            items.push(...this.busBarMenuItems(element));
        else if (element.tagName === 'Bay' || element.tagName === 'VoltageLevel')
            items.push(...this.containerMenuItems(element));
        else if (element.tagName === 'TransformerWinding') {
            items.push(...this.transformerWindingMenuItems(element));
            const transformer = element.parentElement;
            items.push({ content: html `<li divider role="separator"></li>` });
            items.push({ content: renderMenuHeader(transformer) });
            items.push({ content: html `<li divider role="separator"></li>` });
            items.push(...this.transformerMenuItems(transformer));
        }
        else if (element.tagName === 'Text') {
            items.push(...this.textMenuItems(element));
            items.push({ content: html `<li divider role="separator"></li>` });
            items.push({
                content: renderMenuHeader(element.parentElement),
            });
        }
        const headerHeight = element.hasAttribute('desc') ||
            element.hasAttribute('type') ||
            (element.tagName === 'Text' && element.textContent)
            ? 73
            : 57;
        return html `
      <menu
        id="sld-context-menu"
        style="top: ${this.menu.top - headerHeight}px; left: ${this.menu
            .left}px;"
        ${ref(async (menu) => {
            if (!(menu instanceof HTMLElement))
                return;
            await this.updateComplete;
            const { bottom, right } = menu.getBoundingClientRect();
            if (bottom > window.innerHeight) {
                menu.style.removeProperty('top');
                // eslint-disable-next-line no-param-reassign
                menu.style.bottom = `0px`;
                // eslint-disable-next-line no-param-reassign
                menu.style.maxHeight = `calc(100vh - 68px)`;
            }
            if (right > window.innerWidth) {
                menu.style.removeProperty('left');
                // eslint-disable-next-line no-param-reassign
                menu.style.right = '0px';
            }
        })}
      >
        <mwc-list
          @selected=${({ detail: { index } }) => {
            var _a, _b;
            (_b = (_a = items.filter(item => item.handler)[index]) === null || _a === void 0 ? void 0 : _a.handler) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.menu = undefined;
        }}
        >
          ${items.map(i => i.content)}
        </mwc-list>
      </menu>
    `;
    }
    render() {
        var _a, _b, _c, _d, _e;
        const { dim: [w, h], } = attributes(this.substation);
        const placingTarget = ((_a = this.placing) === null || _a === void 0 ? void 0 : _a.tagName) === 'VoltageLevel'
            ? svg `<rect width="100%" height="100%" fill="url(#grid)" />`
            : nothing;
        const transformerPlacingTarget = ((_b = this.placing) === null || _b === void 0 ? void 0 : _b.tagName) === 'PowerTransformer'
            ? svg `<rect width="100%" height="100%" fill="url(#grid)" />`
            : nothing;
        const iedPlacingTarget = ((_c = this.placing) === null || _c === void 0 ? void 0 : _c.tagName) === 'IED'
            ? svg `<rect width="100%" height="100%" fill="url(#grid)" />`
            : nothing;
        const placingLabelTarget = this.placingLabel
            ? svg `<rect width="100%" height="100%" fill="url(#halfgrid)"
      @click=${() => {
                const element = this.placingLabel;
                const [x, y] = this.renderedLabelPosition(element);
                this.dispatchEvent(newPlaceLabelEvent({ element, x, y }));
            }}
      />`
            : nothing;
        let placingElement = svg ``;
        if (this.placing) {
            if (this.placing.tagName === 'VoltageLevel' || isBay(this.placing))
                placingElement = this.renderContainer(this.placing, true);
            else if (this.placing.tagName === 'ConductingEquipment')
                placingElement = this.renderEquipment(this.placing, { preview: true });
            else if (this.placing.tagName === 'IED')
                placingElement = this.renderIed(this.placing, { preview: true });
            else if (this.placing.tagName === 'PowerTransformer')
                placingElement = this.renderPowerTransformer(this.placing, true);
            else if (isBusBar(this.placing))
                placingElement = this.renderBusBar(this.placing);
        }
        let coordinates = html ``;
        let invalid = false;
        let hidden = true;
        if (this.placing) {
            const { dim: [w0, h0], } = attributes(this.placing);
            hidden = false;
            const [offsetX, offsetY] = this.placingOffset;
            const x = this.mouseX - offsetX;
            const y = this.mouseY - offsetY;
            invalid = !this.canPlaceAt(this.placing, x, y, w0, h0);
            coordinates = html `${x},${y}`;
        }
        if (this.resizingBR && !isBusBar(this.resizingBR)) {
            const { pos: [x, y], } = attributes(this.resizingBR);
            const newW = Math.max(1, this.mouseX - x + 1);
            const newH = Math.max(1, this.mouseY - y + 1);
            hidden = false;
            invalid = !this.canResizeTo(this.resizingBR, newW, newH);
            coordinates = html `${newW}&times;${newH}`;
        }
        if (this.resizingTL) {
            const { pos: [x, y], dim: [resW, resH], } = attributes(this.resizingTL);
            const newW = Math.max(1, x + resW - this.mouseX);
            const newH = Math.max(1, y + resH - this.mouseY);
            const newX = Math.min(this.mouseX, x + resH - 1);
            const newY = Math.min(this.mouseY, y + resW - 1);
            hidden = false;
            invalid = !this.canResizeToTL(this.resizingTL, newX, newY, newW, newH);
            coordinates = html `${newW}&times;${newH}`;
        }
        const coordinateTooltip = html `<div
      ${ref(this.coordinatesRef)}
      class="${classMap({ coordinates: true, invalid, hidden })}"
    >
      (${coordinates})
    </div>`;
        const connectionPreview = [];
        if (((_d = this.connecting) === null || _d === void 0 ? void 0 : _d.from.closest('Substation')) === this.substation) {
            const { from, path, fromTerminal } = this.connecting;
            let i = 0;
            while (i < path.length - 2) {
                const [x1, y1] = path[i];
                const [x2, y2] = path[i + 1];
                connectionPreview.push(svg `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                stroke-linecap="square" stroke="black" />`);
                i += 1;
            }
            const [[x1, y1], [oldX2, oldY2]] = path.slice(-2);
            const vertical = x1 === oldX2;
            let x3 = this.mouseX2;
            let y3 = this.mouseY2;
            let [x4, y4] = [x3, y3];
            const targetEq = Array.from(this.substation.querySelectorAll('ConductingEquipment'))
                .filter(eq => eq !== from)
                .find(eq => {
                const { pos: [x, y], } = attributes(eq);
                return x === this.mouseX && y === this.mouseY;
            });
            const toTerminal = this.nearestOpenTerminal(targetEq);
            if (targetEq && toTerminal) {
                const [close, far] = connectionStartPoints(targetEq)[toTerminal];
                [x3, y3] = far;
                [x4, y4] = close;
            }
            const x2 = vertical ? oldX2 : x3;
            const y2 = vertical ? y3 : oldY2;
            connectionPreview.push(svg `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                stroke-linecap="square" stroke="black" />`, svg `<line x1="${x2}" y1="${y2}" x2="${x3}" y2="${y3}"
                stroke-linecap="square" stroke="black" />`, svg `<line x1="${x3}" y1="${y3}" x2="${x4}" y2="${y4}"
                stroke-linecap="square" stroke="black" />`);
            connectionPreview.push(svg `<rect width="100%" height="100%" fill="url(#grid)"
      @click=${() => {
                path[path.length - 1] = [x2, y2];
                path.push([x3, y3]);
                path.push([x4, y4]);
                cleanPath(path);
                this.requestUpdate();
                if (targetEq && toTerminal)
                    this.dispatchEvent(newConnectEvent({
                        from,
                        fromTerminal,
                        path,
                        to: targetEq,
                        toTerminal,
                    }));
            }} />`);
        }
        const menu = this.renderMenu();
        return html `<section>
      <h2>
        ${this.substation.getAttribute('name')}
        <mwc-icon-button
          label="Edit Substation"
          title="Edit Substation"
          @click=${() => this.dispatchEvent(newEditWizardEvent(this.substation))}
          icon="edit"
        >
        </mwc-icon-button>
        <mwc-icon-button
          label="Resize Substation"
          title="Resize Substation"
          @click=${() => this.resizeSubstationUI.show()}
        >
          <svg
            xmlns="${svgNs}"
            width="24"
            height="24"
            viewBox="0 96 960 960"
            opacity="0.83"
          >
            ${resizePath}
          </svg>
        </mwc-icon-button>
        <mwc-icon-button
          label="Delete Substation"
          title="Delete Substation"
          @click=${() => this.dispatchEvent(newEditEvent({ node: this.substation }))}
          icon="delete"
        >
        </mwc-icon-button>
        <mwc-icon-button
          label="Export Single Line Diagram SVG"
          title="Export Single Line Diagram SVG"
          @click=${() => this.saveSVG()}
          icon="file_download"
        >
        </mwc-icon-button>
      </h2>
      <svg
        xmlns="${svgNs}"
        xmlns:xlink="${xlinkNs}"
        id="sld"
        viewBox="0 0 ${w} ${h}"
        width="${w * this.gridSize}"
        height="${h * this.gridSize}"
        stroke-width="0.06"
        fill="none"
        @mousemove=${(e) => {
            const [x, y] = this.svgCoordinates(e.clientX, e.clientY);
            this.mouseX = Math.floor(x);
            this.mouseY = Math.floor(y);
            this.mouseX2 = Math.round(x * 2) / 2;
            this.mouseY2 = Math.round(y * 2) / 2;
            this.mouseX2f = Math.floor(x * 2) / 2;
            this.mouseY2f = Math.floor(y * 2) / 2;
            this.positionCoordinates(e);
        }}
      >
        <style>
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url(${robotoDataURL}) format('woff');
          }
          .handle {
            visibility: hidden;
          }
          :focus {
            outline: none;
          }
          g:hover > .handle {
            opacity: 0.2;
            visibility: visible;
          }
          g:hover > .handle:hover {
            visibility: visible;
            opacity: 0.83;
          }
          g.voltagelevel > rect,
          g.bay > rect {
            shape-rendering: crispEdges;
          }
          svg:not(:hover) .preview {
            visibility: hidden;
          }
          .preview {
            opacity: 0.75;
          }
        </style>
        ${symbols}
        <rect width="100%" height="100%" fill="white" />
        ${placingTarget}
        ${Array.from(this.substation.children)
            .filter(child => child.tagName === 'VoltageLevel')
            .map(vl => svg `${this.renderContainer(vl)}`)}
        ${connectionPreview}
        ${((_e = this.connecting) === null || _e === void 0 ? void 0 : _e.from.closest('Substation')) === this.substation
            ? Array.from(this.substation.querySelectorAll('ConductingEquipment')).map(eq => this.renderEquipment(eq, { connect: true }))
            : nothing}
        ${Array.from(this.substation.querySelectorAll('ConnectivityNode'))
            .filter(node => node.getAttribute('name') !== 'grounded' &&
            !(this.placing &&
                node.closest(this.placing.tagName) === this.placing) &&
            !isBusBar(node.parentElement))
            .map(cNode => this.renderConnectivityNode(cNode))}
        ${Array.from(this.substation.querySelectorAll('ConnectivityNode'))
            .filter(node => node.getAttribute('name') !== 'grounded' &&
            !(this.placing &&
                node.closest(this.placing.tagName) === this.placing) &&
            isBusBar(node.parentElement))
            .map(cNode => this.renderConnectivityNode(cNode))}
        ${Array.from(this.substation.querySelectorAll(':scope > PowerTransformer')).map(transformer => this.renderPowerTransformer(transformer))}
        ${Array.from(this.doc.querySelectorAll(':root > IED'))
            .filter(child => child.tagName === 'IED' && hasIedCoordinates(child))
            .map(ied => this.renderIed(ied))}
        ${Array.from(this.doc.querySelectorAll(':root > IED'))
            .filter(child => child.tagName === 'IED' && hasIedCoordinates(child))
            .map(ied => this.renderLabel(ied))}
        ${Array.from(this.substation.querySelectorAll('VoltageLevel, Bay, ConductingEquipment, PowerTransformer, Text, ine'))
            .filter(e => !this.placing || e.closest(this.placing.tagName) !== this.placing)
            .map(element => this.renderLabel(element))}
        ${transformerPlacingTarget} ${iedPlacingTarget} ${placingLabelTarget}
        ${placingElement}
      </svg>
      ${menu} ${coordinateTooltip}
      <mwc-dialog
        id="resizeSubstationUI"
        heading="Resize ${this.substation.getAttribute('name')}"
      >
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <mwc-textfield
            id="substationWidthUI"
            type="number"
            min="1"
            step="1"
            label="Width"
            value="${w}"
            dialogInitialFocus
            autoValidate
            .validityTransform=${(value, validity) => {
            const { dim: [_w, oldH], } = attributes(this.substation);
            if (validity.valid &&
                !this.canResizeTo(this.substation, parseInt(value, 10), oldH)) {
                return { valid: false, rangeUnderflow: true };
            }
            return {};
        }}
          ></mwc-textfield>
          <mwc-textfield
            id="substationHeightUI"
            type="number"
            min="1"
            step="1"
            label="Height"
            value="${h}"
            autoValidate
            .validityTransform=${(value, validity) => {
            const { dim: [oldW, _h], } = attributes(this.substation);
            if (validity.valid &&
                !this.canResizeTo(this.substation, oldW, parseInt(value, 10))) {
                return { valid: false, rangeUnderflow: true };
            }
            return {};
        }}
          ></mwc-textfield>
        </div>
        <mwc-button
          slot="primaryAction"
          @click=${() => {
            const valid = Array.from(this.resizeSubstationUI.querySelectorAll('mwc-textfield')).every(textField => textField.checkValidity());
            if (!valid)
                return;
            const { dim: [oldW, oldH], } = attributes(this.substation);
            const [newW, newH] = [
                this.substationWidthUI,
                this.substationHeightUI,
            ].map(ui => { var _a; return parseInt((_a = ui.value) !== null && _a !== void 0 ? _a : '1', 10).toString(); });
            this.resizeSubstationUI.close();
            if (newW === oldW.toString() && newH === oldH.toString())
                return;
            this.dispatchEvent(newEditEvent({
                element: this.substation,
                attributes: {
                    [`${this.nsp}:w`]: { namespaceURI: sldNs, value: newW },
                    [`${this.nsp}:h`]: { namespaceURI: sldNs, value: newH },
                },
            }));
        }}
          >resize</mwc-button
        >
        <mwc-button dialogAction="close" slot="secondaryAction"
          >cancel</mwc-button
        >
      </mwc-dialog>
      <mwc-snackbar
        labelText="Only transformers within a bay may be grounded directly."
      >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    </section>`;
    }
    renderLabel(element) {
        var _a;
        if (!this.showLabels)
            return nothing;
        let deg = 0;
        let text = element.getAttribute('name');
        let weight = 400;
        let color = 'black';
        const [x, y] = this.renderedLabelPosition(element);
        if (element.tagName === 'Text') {
            ({ weight, color } = attributes(element));
            deg = attributes(element).rot * 90;
            if (element.textContent)
                text = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.split(/\r?\n/).map((line, i) => svg `<tspan alignment-baseline="central"
                  x="${x + 0.1}" dy="${i === 0 ? nothing : '1.19em'}"
                  visibility="${line ? nothing : 'hidden'}">
                  ${line || '.'}
                </tspan>`);
            else {
                text = '<Middle click to edit>';
                color = '#aaa';
                weight = 500;
            }
        }
        const fontSize = element.tagName === 'ConductingEquipment' ? 0.45 : 0.6;
        let events = 'none';
        let handleClick = nothing;
        if (this.idle) {
            events = 'all';
            const offset = [this.mouseX2 - x - 0.5, this.mouseY2 - y + 0.5];
            handleClick = () => this.dispatchEvent(newStartPlaceLabelEvent(element, offset));
        }
        const id = element.closest('Substation') === this.substation &&
            element.tagName !== 'Text'
            ? identity(element)
            : nothing;
        const classes = classMap({
            label: true,
            container: (element.tagName === 'Bay' && !isBusBar(element)) ||
                element.tagName === 'VoltageLevel',
        });
        return svg `<g class="${classes}" id="label:${id}"
                 transform="rotate(${deg} ${x + 0.5} ${y - 0.5})">
        <text x="${x + 0.1}" y="${y - 0.5}"
          alignment-baseline="central"
          @mousedown=${preventDefault}
          @auxclick=${(e) => {
            if (e.button === 1) {
                // middle mouse button
                this.dispatchEvent(newEditWizardEvent(element));
                e.preventDefault();
            }
        }}
          @click=${handleClick}
          @contextmenu=${(e) => this.openMenu(element, e)}
          pointer-events="${events}" fill="${color}" font-weight="${weight}"
          font-size="${fontSize}px" font-family="Roboto, sans-serif"
          style="cursor: default;">
          ${text}
        </text>
      </g>`;
    }
    renderContainer(bayOrVL, preview = false) {
        var _a, _b, _c;
        const isVL = bayOrVL.tagName === 'VoltageLevel';
        if (this.placing === bayOrVL && !preview)
            return svg ``;
        let [x, y] = this.renderedPosition(bayOrVL);
        const offset = [this.mouseX - x, this.mouseY - y];
        let { dim: [w, h], } = attributes(bayOrVL);
        let handleClick = (e) => {
            if (this.idle)
                this.dispatchEvent(newStartPlaceEvent(e.shiftKey ? copy(bayOrVL, this.nsp) : bayOrVL, offset));
        };
        let invalid = false;
        if (this.resizingBR === bayOrVL) {
            w = Math.max(1, this.mouseX - x + 1);
            h = Math.max(1, this.mouseY - y + 1);
            if (this.canResizeTo(bayOrVL, w, h))
                handleClick = () => this.dispatchEvent(newResizeEvent({
                    w,
                    h,
                    element: bayOrVL,
                }));
            else
                invalid = true;
        }
        const right = x + w - 1;
        const bottom = y + h - 1;
        if (this.resizingTL === bayOrVL) {
            w = Math.max(1, x + w - this.mouseX);
            h = Math.max(1, y + h - this.mouseY);
            x = Math.min(this.mouseX, right);
            y = Math.min(this.mouseY, bottom);
            if (this.canResizeToTL(bayOrVL, x, y, w, h))
                handleClick = () => this.dispatchEvent(newResizeTLEvent({
                    x,
                    y,
                    w,
                    h,
                    element: bayOrVL,
                }));
            else
                invalid = true;
        }
        if (this.placing === bayOrVL) {
            let parent;
            if (isVL)
                parent = this.substation;
            else
                parent = Array.from(this.substation.querySelectorAll(':root > Substation > VoltageLevel')).find(vl => containsRect(vl, x, y, w, h));
            if (parent && this.canPlaceAt(bayOrVL, x, y, w, h))
                handleClick = () => this.dispatchEvent(newPlaceEvent({
                    x,
                    y,
                    element: bayOrVL,
                    parent: parent,
                }));
            else
                invalid = true;
        }
        let placingTarget = svg ``;
        let resizingTarget = svg ``;
        if ((isVL && ((_a = this.placing) === null || _a === void 0 ? void 0 : _a.tagName) === 'Bay') ||
            (!isVL && ((_b = this.placing) === null || _b === void 0 ? void 0 : _b.tagName) === 'ConductingEquipment'))
            placingTarget = svg `<rect x="${x}" y="${y}" width="${w}" height="${h}"
        @click=${handleClick} fill="url(#grid)" />`;
        if (this.resizingBR === bayOrVL ||
            this.resizingTL === bayOrVL ||
            (((_c = this.resizingBR) === null || _c === void 0 ? void 0 : _c.parentElement) === bayOrVL && isBusBar(this.resizingBR)))
            resizingTarget = svg `<rect x="${x}" y="${y}" width="${w}" height="${h}"
        @click=${handleClick || nothing} fill="url(#grid)" />`;
        const resizeBRHandle = this.idle
            ? svg `<svg xmlns="${svgNs}" height="1" width="1" fill="black"
          opacity="0.83" class="handle"
          @click=${() => this.dispatchEvent(newStartResizeBREvent(bayOrVL))}
          viewBox="0 96 960 960" x="${w + x - 1}" y="${h + y - 1}">
          <rect fill="white" x="28.8" y="124.8" width="902.4" height="902.4" />
          ${resizeBRPath}
        </svg>`
            : nothing;
        const resizeTLhandle = this.idle
            ? svg `<svg xmlns="${svgNs}" height="1" width="1" fill="black"
          opacity="0.83" class="handle"
          @click=${() => this.dispatchEvent(newStartResizeTLEvent(bayOrVL))}
          viewBox="0 96 960 960" x="${x}" y="${y}">
          <rect fill="white" x="28.8" y="124.8" width="902.4" height="902.4" />
          ${resizeTLPath}
        </svg>`
            : nothing;
        const clickthrough = !this.idle &&
            this.placing !== bayOrVL &&
            this.resizingBR !== bayOrVL &&
            this.resizingTL !== bayOrVL;
        return svg `<g id="${bayOrVL.closest('Substation') === this.substation
            ? identity(bayOrVL)
            : nothing}" class=${classMap({
            voltagelevel: isVL,
            bay: !isVL,
            preview,
        })} tabindex="0" pointer-events="${clickthrough ? 'none' : 'all'}" style="outline: none;">
      <rect x="${x}" y="${y}" width="${w}" height="${h}"
        @contextmenu=${(e) => this.openMenu(bayOrVL, e)}
        @click=${handleClick || nothing} @mousedown=${preventDefault}
        @auxclick=${({ clientX, clientY, button }) => {
            if (button !== 1)
                return;
            const mouse = this.svgCoordinates(clientX, clientY);
            if (distance(mouse, [x, y]) < distance(mouse, [right, bottom]))
                this.dispatchEvent(newStartResizeTLEvent(bayOrVL));
            else
                this.dispatchEvent(newStartResizeBREvent(bayOrVL));
        }}
        fill="white" stroke-dasharray="${isVL ? nothing : '0.18'}"
        stroke="${
        // eslint-disable-next-line no-nested-ternary
        invalid ? '#BB1326' : isVL ? '#F5E214' : '#12579B'}" />
      ${Array.from(bayOrVL.children)
            .filter(isBay)
            .map(bay => this.renderContainer(bay))}
      ${Array.from(bayOrVL.children)
            .filter(child => child.tagName === 'ConductingEquipment')
            .map(equipment => this.renderEquipment(equipment))}
      ${Array.from(bayOrVL.children)
            .filter(child => child.tagName === 'PowerTransformer')
            .map(equipment => this.renderPowerTransformer(equipment))}
      ${preview
            ? Array.from(bayOrVL.querySelectorAll('ConnectivityNode'))
                .filter(child => child.getAttribute('name') !== 'grounded')
                .map(cNode => this.renderConnectivityNode(cNode))
            : nothing}
      ${preview
            ? Array.from(bayOrVL.querySelectorAll('Bay, ConductingEquipment, PowerTransformer, Text'))
                .concat(bayOrVL)
                .map(element => this.renderLabel(element))
            : nothing}
      ${resizeTLhandle}
      ${resizeBRHandle}
      ${placingTarget}
      ${resizingTarget}
    </g>`;
    }
    windingMeasures(winding) {
        const transformer = winding.parentElement;
        const windings = Array.from(transformer.children).filter(c => c.tagName === 'TransformerWinding');
        const [x, y] = this.renderedPosition(transformer).map(c => c + 0.5);
        let center = [x, y];
        const size = 0.7;
        const grounded = {};
        const terminals = {};
        let arc;
        let zigZagTransform;
        const terminalElements = Array.from(winding.children).filter(c => c.tagName === 'Terminal');
        const terminal1 = terminalElements.find(t => t.getAttribute('name') === 'T1');
        const terminal2 = terminalElements.find(t => t.getAttribute('name') !== 'T1');
        const neutral = Array.from(winding.children).find(c => c.tagName === 'NeutralPoint');
        const windingIndex = windings.indexOf(winding);
        const { rot, kind, flip } = attributes(transformer);
        function shift(point, coord, amount) {
            const shifted = point.slice();
            if (coord === 0)
                shifted[rot % 2] += rot < 2 ? amount : -amount;
            else
                shifted[(rot + 1) % 2] += rot > 0 && rot < 3 ? -amount : amount;
            return shifted;
        }
        if (windings.length === 1) {
            if (kind === 'earthing') {
                zigZagTransform = '';
                const n1 = shift(center, 1, size);
                if (!neutral) {
                    terminals.N1 = n1;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    const n1p = shift(n1, 1, 0.2);
                    grounded.N1 = [n1p, n1];
                }
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 1, -size);
                }
            }
            else {
                const sgn = flip ? -1 : 1;
                const n1 = shift(center, 0, -size);
                const n2 = shift(center, 0, size);
                const t1 = shift(center, 1, (-size - 0.5) * sgn);
                const t2 = shift(center, 1, size * sgn);
                if (!neutral) {
                    terminals.N1 = n1;
                    terminals.N2 = n2;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    if (neutral.getAttribute('name') === 'N1') {
                        const n1p = shift(n1, 0, -0.2);
                        grounded.N1 = [n1p, n1];
                    }
                    else {
                        const n2p = shift(n2, 0, 0.2);
                        grounded.N2 = [n2p, n2];
                    }
                }
                arc = {
                    from: n2,
                    fromCtl: shift(n2, 1, -sgn),
                    to: t1,
                    toCtl: shift(shift(t1, 0, 0.2), 1, 0.1 * sgn),
                };
                if (!terminal1) {
                    terminals.T1 = t1;
                }
                if (!terminal2) {
                    terminals.T2 = t2;
                }
            }
        }
        else if (windings.length === 2) {
            if (windingIndex === 1) {
                center = shift(center, 1, 1);
            }
            if (kind === 'auto') {
                if (windingIndex === 1) {
                    const n1 = shift(center, 0, -size);
                    const n2 = shift(center, 0, size);
                    if (!neutral) {
                        terminals.N1 = n1;
                        terminals.N2 = n2;
                    }
                    else if (neutral.getAttribute('cNodeName') === 'grounded') {
                        if (neutral.getAttribute('name') === 'N1') {
                            const n1p = shift(n1, 0, -0.2);
                            grounded.N1 = [n1p, n1];
                        }
                        else {
                            const n2p = shift(n2, 0, 0.2);
                            grounded.N2 = [n2p, n2];
                        }
                    }
                    if (!terminal1 && !terminal2) {
                        terminals.T1 = shift(center, 1, size);
                    }
                }
                else {
                    const sgn = flip ? -1 : 1;
                    const t1 = shift(center, 0, size * sgn);
                    const t2 = shift(center, 0, (-size - 0.5) * sgn);
                    const n1 = shift(center, 1, -size);
                    arc = {
                        from: n1,
                        fromCtl: shift(n1, 0, -sgn),
                        to: t2,
                        toCtl: shift(shift(t2, 1, -0.2), 0, 0.1 * sgn),
                    };
                    if (!terminal1)
                        terminals.T1 = t1;
                    if (!terminal2)
                        terminals.T2 = t2;
                    if (!neutral) {
                        terminals.N1 = n1;
                    }
                    else if (neutral.getAttribute('cNodeName') === 'grounded') {
                        const n1p = shift(n1, 1, -0.2);
                        grounded.N1 = [n1p, n1];
                    }
                }
            }
            else if (kind === 'earthing') {
                if (windingIndex === 1) {
                    if (!terminal1 && !terminal2) {
                        terminals.T1 = shift(center, 1, size);
                    }
                }
                else {
                    zigZagTransform = zigZag2WTransform;
                    const sgn = flip ? -1 : 1;
                    if (!terminal1 && !terminal2)
                        terminals.T1 = shift(center, 0, -size * sgn);
                    const n1 = shift(center, 0, size * sgn);
                    if (!neutral) {
                        terminals.N1 = n1;
                    }
                    else if (neutral.getAttribute('cNodeName') === 'grounded') {
                        const n1p = shift(n1, 0, 0.2 * sgn);
                        grounded.N1 = [n1p, n1];
                    }
                }
            }
            else if (windingIndex === 1) {
                const n1 = shift(center, 0, -size);
                const n2 = shift(center, 0, +size);
                if (!neutral) {
                    terminals.N1 = n1;
                    terminals.N2 = n2;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    if (neutral.getAttribute('name') === 'N1') {
                        const n1p = shift(n1, 0, -0.2);
                        grounded.N1 = [n1p, n1];
                    }
                    else {
                        const n2p = shift(n2, 0, 0.2);
                        grounded.N2 = [n2p, n2];
                    }
                }
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 1, +size);
                }
            }
            else {
                const n1 = shift(center, 0, -size);
                const n2 = shift(center, 0, +size);
                if (!neutral) {
                    terminals.N1 = n1;
                    terminals.N2 = n2;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    if (neutral.getAttribute('name') === 'N1') {
                        const n1p = shift(n1, 0, -0.2);
                        grounded.N1 = [n1p, n1];
                    }
                    else {
                        const n2p = shift(n2, 0, 0.2);
                        grounded.N2 = [n2p, n2];
                    }
                }
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 1, -size);
                }
            }
        }
        else if (windings.length === 3) {
            if (windingIndex === 0) {
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 1, -size);
                }
                const n1 = shift(center, 0, -size);
                const n2 = shift(center, 0, +size);
                if (!neutral) {
                    terminals.N1 = n1;
                    terminals.N2 = n2;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    if (neutral.getAttribute('name') === 'N1') {
                        const n1p = shift(n1, 0, -0.2);
                        grounded.N1 = [n1p, n1];
                    }
                    else {
                        const n2p = shift(n2, 0, 0.2);
                        grounded.N2 = [n2p, n2];
                    }
                }
            }
            else if (windingIndex === 1) {
                center = shift(shift(center, 0, 0.5), 1, 1);
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 0, size);
                }
                const n1 = shift(center, 1, size);
                if (!neutral) {
                    terminals.N1 = n1;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    const n1p = shift(n1, 1, 0.2);
                    grounded.N1 = [n1p, n1];
                }
            }
            else if (windingIndex === 2) {
                center = shift(shift(center, 0, -0.5), 1, 1);
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 0, -size);
                }
                const n1 = shift(center, 1, size);
                if (!neutral) {
                    terminals.N1 = n1;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    const n1p = shift(n1, 1, 0.2);
                    grounded.N1 = [n1p, n1];
                }
            }
        }
        return { center, size, terminals, grounded, arc, zigZagTransform };
    }
    renderTransformerWinding(winding) {
        const { size, center: [cx, cy], terminals, grounded, arc, zigZagTransform, } = this.windingMeasures(winding);
        const ports = [];
        Object.entries(grounded).forEach(([_, [[x1, y1], [x2, y2]]]) => {
            ports.push(svg `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" stroke-width="0.06" marker-start="url(#grounded)" />`);
        });
        const groundable = winding.closest('Bay');
        if (!(this.connecting ||
            this.resizingBR ||
            this.resizingTL ||
            this.placingLabel ||
            (this.placing && this.placing !== winding.closest('PowerTransformer'))))
            Object.entries(terminals).forEach(([name, point]) => {
                if (!point)
                    return;
                const [x, y] = point;
                const x1 = Number.isInteger(x * 2) ? x : x + 1;
                const y1 = Number.isInteger(y * 2) ? y : y + 1;
                const terminal = name.startsWith('T');
                const fill = terminal ? 'BB1326' : '12579B';
                ports.push(svg `<circle class="port" cx="${x}" cy="${y}" r="0.2" opacity="0.4"
              @contextmenu=${(e) => {
                    if (terminal)
                        return;
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    if (!this.idle)
                        return;
                    this.groundTerminal(winding, name);
                }}
              @click=${(e) => {
                    e.stopImmediatePropagation();
                    if (!this.idle)
                        return;
                    this.dispatchEvent(newStartConnectEvent({
                        from: winding,
                        fromTerminal: name,
                        path: [
                            [x, y],
                            [x1, y1],
                        ],
                    }));
                }}
              fill="#${fill}"
              stroke="${groundable && !terminal ? '#F5E214' : fill}" />`);
            });
        let longArrow = false;
        let arcPath = svg ``;
        const { flip, rot } = attributes(winding.parentElement);
        if (arc) {
            const { from: [xf, yf], fromCtl: [xfc, yfc], to: [xt, yt], toCtl: [xtc, ytc], } = arc;
            if (!flip && yfc < yf)
                longArrow = true;
            if (flip && xfc > xf)
                longArrow = true;
            arcPath = svg `<path d="M ${xf} ${yf} C ${xfc} ${yfc}, ${xtc} ${ytc}, ${xt} ${yt}" stroke="black" stroke-width="0.06" />`;
        }
        const tapChanger = winding.querySelector('TapChanger');
        const ltcArrow = tapChanger
            ? svg `<line x1="${cx - 0.8}" y1="${cy + 0.8}" x2="${cx + 0.8}" y2="${cy - (longArrow ? 1 : 0.8)}"
              stroke="black" stroke-width="0.06" marker-end="url(#arrow)" />`
            : nothing;
        const zigZag = zigZagTransform === undefined
            ? nothing
            : svg `<g stroke="black" stroke-linecap="round"
                transform="rotate(${rot * 90} ${cx} ${cy})
                translate(${cx - 1.5} ${cy - 1.5})
                ${zigZagTransform}">${zigZagPath}</g>`;
        return svg `<g class="winding"
        @contextmenu=${(e) => this.openMenu(winding, e)}
    ><circle cx="${cx}" cy="${cy}" r="${size}" stroke="black" stroke-width="0.06" />${arcPath}${zigZag}${ltcArrow}${ports}</g>`;
    }
    renderPowerTransformer(transformer, preview = false) {
        if (this.placing === transformer && !preview)
            return svg ``;
        const windings = Array.from(transformer.children).filter(c => c.tagName === 'TransformerWinding');
        const [x, y] = this.renderedPosition(transformer);
        const offset = [this.mouseX - x, this.mouseY - y];
        const clickTarget = this.placing === transformer
            ? svg `<rect width="1" height="1" fill="none"
              x="${this.mouseX}" y="${this.mouseY}" />`
            : nothing;
        return svg `<g class="${classMap({ transformer: true, preview })}"
        pointer-events="all"
        @mousedown=${preventDefault}
        @auxclick=${(e) => {
            if (e.button === 1) {
                // middle mouse button
                this.dispatchEvent(newRotateEvent(transformer));
                e.preventDefault();
            }
        }}
        @click=${(e) => {
            if (this.placing === transformer) {
                const parent = Array.from(this.substation.querySelectorAll(':scope > VoltageLevel > Bay'))
                    .concat(Array.from(this.substation.querySelectorAll(':scope > VoltageLevel')))
                    .find(vl => containsRect(vl, x, y, 1, 1)) || this.substation;
                this.dispatchEvent(newPlaceEvent({
                    element: transformer,
                    parent,
                    x,
                    y,
                }));
            }
            if (!this.idle)
                return;
            let placing = transformer;
            if (e.shiftKey)
                placing = copy(transformer, this.nsp);
            this.dispatchEvent(newStartPlaceEvent(placing, offset));
        }}>
        ${windings.map(w => this.renderTransformerWinding(w))}
        ${clickTarget}
      </g>
      <g class="preview">${preview
            ? [
                this.renderLabel(transformer),
                ...Array.from(transformer.querySelectorAll('Text')).map(text => this.renderLabel(text)),
            ]
            : nothing}</g>`;
    }
    renderEquipment(equipment, { preview = false, connect = false } = {}) {
        var _a;
        if (this.placing === equipment && !preview)
            return svg ``;
        if (((_a = this.connecting) === null || _a === void 0 ? void 0 : _a.from.closest('Substation')) === this.substation &&
            !connect)
            return svg ``;
        const [x, y] = this.renderedPosition(equipment);
        const { flip, rot } = attributes(equipment);
        const deg = 90 * rot;
        const eqType = equipment.getAttribute('type');
        const ringed = ringedEqTypes.has(eqType);
        const symbol = isEqType(eqType) ? eqType : 'ConductingEquipment';
        const icon = ringed
            ? svg `<svg
    viewBox="0 0 25 25"
    width="1"
    height="1"
  >
    ${eqRingPath}
  </svg>`
            : svg `<use href="#${symbol}" xlink:href="#${symbol}"
              pointer-events="none" />`;
        let handleClick = (e) => {
            let placing = equipment;
            if (e.shiftKey)
                placing = copy(equipment, this.nsp);
            this.dispatchEvent(newStartPlaceEvent(placing));
        };
        if (this.placing === equipment) {
            const parent = Array.from(this.substation.querySelectorAll(':root > Substation > VoltageLevel > Bay')).find(bay => !isBusBar(bay) && containsRect(bay, x, y, 1, 1));
            if (parent && this.canPlaceAt(equipment, x, y, 1, 1))
                handleClick = () => {
                    this.dispatchEvent(newPlaceEvent({
                        x,
                        y,
                        element: equipment,
                        parent,
                    }));
                };
        }
        const terminals = Array.from(equipment.children).filter(c => c.tagName === 'Terminal');
        const topTerminal = terminals.find(t => t.getAttribute('name') === 'T1');
        const bottomTerminal = terminals.find(t => t.getAttribute('name') !== 'T1');
        const topConnector = topTerminal ||
            this.resizingBR ||
            this.resizingTL ||
            this.connecting ||
            this.placingLabel ||
            (this.placing && this.placing !== equipment)
            ? nothing
            : svg `<circle class="port" cx="0.5" cy="0" r="0.2" opacity="0.4"
      fill="#BB1326" stroke="#F5E214" pointer-events="${this.placing ? 'none' : nothing}"
    @click=${() => this.dispatchEvent(newStartConnectEvent({
                from: equipment,
                fromTerminal: 'T1',
                path: connectionStartPoints(equipment).T1,
            }))}
    @contextmenu=${(e) => {
                e.preventDefault();
                this.groundTerminal(equipment, 'T1');
            }}
      />`;
        const topIndicator = !this.connecting ||
            this.connecting.from === equipment ||
            (this.connecting &&
                this.mouseX === x &&
                this.mouseY === y &&
                this.nearestOpenTerminal(equipment) === 'T1') ||
            topTerminal
            ? nothing
            : svg `<polygon points="0.3,0 0.7,0 0.5,0.4" 
                fill="#BB1326" opacity="0.4" />`;
        const topGrounded = (topTerminal === null || topTerminal === void 0 ? void 0 : topTerminal.getAttribute('cNodeName')) === 'grounded'
            ? svg `<line x1="0.5" y1="-0.1" x2="0.5" y2="0.16" stroke="black"
                stroke-width="0.06" marker-start="url(#grounded)" />`
            : nothing;
        const bottomConnector = bottomTerminal ||
            this.resizingBR ||
            this.resizingTL ||
            this.connecting ||
            this.placingLabel ||
            (this.placing && this.placing !== equipment) ||
            singleTerminal.has(eqType)
            ? nothing
            : svg `<circle class="port" cx="0.5" cy="1" r="0.2" opacity="0.4"
      fill="#BB1326" stroke="#F5E214" pointer-events="${this.placing ? 'none' : nothing}"
    @click=${() => this.dispatchEvent(newStartConnectEvent({
                from: equipment,
                fromTerminal: 'T2',
                path: connectionStartPoints(equipment).T2,
            }))}
    @contextmenu=${(e) => {
                e.preventDefault();
                this.groundTerminal(equipment, 'T2');
            }}
      />`;
        const bottomIndicator = !this.connecting ||
            this.connecting.from === equipment ||
            (this.connecting &&
                this.mouseX === x &&
                this.mouseY === y &&
                this.nearestOpenTerminal(equipment) === 'T2') ||
            bottomTerminal ||
            singleTerminal.has(eqType)
            ? nothing
            : svg `<polygon points="0.3,1 0.7,1 0.5,0.6" 
                fill="#BB1326" opacity="0.4" />`;
        const bottomGrounded = (bottomTerminal === null || bottomTerminal === void 0 ? void 0 : bottomTerminal.getAttribute('cNodeName')) === 'grounded'
            ? svg `<line x1="0.5" y1="1.1" x2="0.5" y2="0.84" stroke="black"
                stroke-width="0.06" marker-start="url(#grounded)" />`
            : nothing;
        const clickthrough = connect || (!this.idle && this.placing !== equipment);
        return svg `<g class="${classMap({
            equipment: true,
            preview: this.placing === equipment,
        })}"
    id="${equipment.closest('Substation') === this.substation
            ? identity(equipment)
            : nothing}"
    transform="translate(${x} ${y}) rotate(${deg} 0.5 0.5)${flip ? ' scale(-1,1) translate(-1 0)' : ''}">
      <title>${equipment.getAttribute('name')}</title>
      ${icon}
      ${ringed
            ? svg `<use transform="rotate(${-deg} 0.5 0.5)" pointer-events="none"
                  href="#${symbol}" xlink:href="#${symbol}" />`
            : nothing}
      <rect width="1" height="1" fill="none" pointer-events="${clickthrough ? 'none' : 'all'}"
        @mousedown=${preventDefault}
        @click=${handleClick}
        @auxclick=${(e) => {
            if (e.button === 1) {
                // middle mouse button
                this.dispatchEvent(newRotateEvent(equipment));
                e.preventDefault();
            }
        }}
        @contextmenu=${(e) => this.openMenu(equipment, e)}
      />
      ${topConnector}
      ${topIndicator}
      ${topGrounded}
      ${bottomConnector}
      ${bottomIndicator}
      ${bottomGrounded}
    </g>
    <g class="preview">${preview
            ? [
                this.renderLabel(equipment),
                ...Array.from(equipment.querySelectorAll('Text')).map(text => this.renderLabel(text)),
            ]
            : nothing}</g>`;
    }
    renderIed(ied, { preview = false } = {}) {
        var _a;
        if (this.placing === ied && !preview)
            return svg ``;
        if (((_a = this.connecting) === null || _a === void 0 ? void 0 : _a.from.closest('Substation')) === this.substation)
            return svg ``;
        const [x, y] = this.renderedPosition(ied);
        const eqType = ied.getAttribute('type');
        const ringed = ringedEqTypes.has(eqType);
        const symbol = 'IED';
        const icon = ringed
            ? svg `<svg
    viewBox="0 0 25 25"
    width="1"
    height="1"
  >
    ${eqRingPath}
  </svg>`
            : svg `<use href="#${symbol}" xlink:href="#${symbol}"
              pointer-events="none" />`;
        let handleClick = (e) => {
            let placing = ied;
            if (e.shiftKey)
                placing = copy(ied, this.nsp);
            this.dispatchEvent(newStartPlaceEvent(placing));
        };
        if (this.placing === ied) {
            const parent = ied.parentElement;
            if (parent && this.canPlaceAt(ied, x, y, 1, 1))
                handleClick = () => {
                    this.dispatchEvent(newPlaceEvent({
                        x,
                        y,
                        element: ied,
                        parent,
                    }));
                };
        }
        const clickthrough = !this.idle && this.placing !== ied;
        return svg `<g class="${classMap({
            equipment: true,
            preview: this.placing === ied,
        })}"
    id="${ied.closest('Substation') === this.substation ? identity(ied) : nothing}"
    transform="translate(${x} ${y})">
      <title>${ied.getAttribute('name')}</title>
      ${icon}
      ${ringed
            ? svg `<use pointer-events="none"
                  href="#${symbol}" xlink:href="#${symbol}" />`
            : nothing}
      <rect width="1" height="1" fill="none" pointer-events="${clickthrough ? 'none' : 'all'}"
        @mousedown=${preventDefault}
        @click=${handleClick}
        @auxclick=${(e) => {
            if (e.button === 1) {
                // middle mouse button
                this.dispatchEvent(newRotateEvent(ied));
                e.preventDefault();
            }
        }}
        @contextmenu=${(e) => this.openMenu(ied, e)}
      />
    </g>
    <g class="preview">${preview
            ? [
                this.renderLabel(ied),
                ...Array.from(ied.querySelectorAll('Text')).map(text => this.renderLabel(text)),
            ]
            : nothing}</g>`;
    }
    renderBusBar(busBar) {
        const [x, y] = this.renderedPosition(busBar);
        const { dim: [w, h], } = attributes(busBar);
        let placingTarget = svg ``;
        placingTarget = svg `<rect x="${x}" y="${y}" width="${w}" height="${h}"
          pointer-events="all" fill="none" 
          @click=${() => {
            const parent = Array.from(this.substation.querySelectorAll(':root > Substation > VoltageLevel')).find(vl => containsRect(vl, x, y, w, h));
            if (parent)
                this.dispatchEvent(newPlaceEvent({
                    x,
                    y,
                    element: busBar,
                    parent: parent,
                }));
        }}
        />`;
        return svg `<g class="bus preview" id="${busBar.closest('Substation') === this.substation
            ? identity(busBar)
            : nothing}">
      <title>${busBar.getAttribute('name')}</title>
      ${this.renderLabel(busBar)}
      ${Array.from(busBar.querySelectorAll('Text')).map(text => this.renderLabel(text))}
      ${this.renderConnectivityNode(busBar.querySelector('ConnectivityNode'))}
      ${placingTarget}
    </g>`;
    }
    renderConnectivityNode(cNode) {
        const priv = cNode.querySelector(`Private[type="${privType}"]`);
        if (!priv)
            return nothing;
        const circles = [];
        const intersections = Object.entries(Array.from(priv.querySelectorAll('Vertex')).reduce((record, vertex) => {
            const ret = record;
            const key = JSON.stringify(this.renderedPosition(vertex));
            if (ret[key])
                ret[key].push(vertex);
            else
                ret[key] = [vertex];
            return ret;
        }, {}))
            .filter(([_, vertices]) => vertices.length > 2 ||
            (vertices.length === 2 &&
                vertices.find(v => v.hasAttributeNS(sldNs, 'uuid'))))
            .map(([_, [vertex]]) => this.renderedPosition(vertex));
        intersections.forEach(([x, y]) => circles.push(svg `<circle fill="black" cx="${x}" cy="${y}" r="0.15" />`));
        const lines = [];
        const sections = Array.from(priv.getElementsByTagNameNS(sldNs, 'Section'));
        const bay = cNode.closest('Bay');
        const targetSize = 0.5;
        const pointerEvents = !this.placing &&
            (!this.resizingBR || (this.resizingBR === bay && isBusBar(bay)))
            ? 'all'
            : 'none';
        sections.forEach(section => {
            const busBar = xmlBoolean(section.getAttribute('bus'));
            const vertices = Array.from(section.getElementsByTagNameNS(sldNs, 'Vertex'));
            let i = 0;
            while (i < vertices.length - 1) {
                const [x1, y1] = this.renderedPosition(vertices[i]);
                let [x2, y2] = this.renderedPosition(vertices[i + 1]);
                let handleClick = nothing;
                let handleAuxClick = nothing;
                let handleContextMenu = nothing;
                if (busBar && bay) {
                    const { pos: [x, y], } = attributes(bay);
                    const offset = [this.mouseX - x, this.mouseY - y];
                    handleClick = () => this.dispatchEvent(newStartPlaceEvent(bay, offset));
                    handleAuxClick = ({ button }) => {
                        if (button === 1)
                            this.dispatchEvent(newStartResizeBREvent(bay));
                    };
                    handleContextMenu = (e) => this.openMenu(bay, e);
                }
                if (busBar && this.resizingBR === bay) {
                    if (section !== sections.find(s => xmlBoolean(s.getAttribute('bus'))))
                        return;
                    circles.length = 0;
                    const { pos: [vX, vY], dim: [vW, vH], } = attributes(bay.parentElement);
                    const maxX = vX + vW - 0.5;
                    const maxY = vY + vH - 0.5;
                    if (i === 0) {
                        const dx = Math.max(this.mouseX - x1, 0);
                        const dy = Math.max(this.mouseY - y1, 0);
                        if (dx > dy) {
                            x2 = Math.max(x1, Math.min(maxX, this.mouseX + 0.5));
                            y2 = y1;
                        }
                        else {
                            y2 = Math.max(y1, Math.min(maxY, this.mouseY + 0.5));
                            x2 = x1;
                        }
                        if (x1 === x2 && y1 === y2)
                            if (x2 >= maxX)
                                y2 += 1;
                            else
                                x2 += 1;
                    }
                    handleClick = () => {
                        this.dispatchEvent(newPlaceEvent({
                            parent: section,
                            element: vertices[vertices.length - 1],
                            x: x2,
                            y: y2,
                        }));
                    };
                    lines.push(svg `<rect x="${this.mouseX}" y="${this.mouseY}"
              width="1" height="1" fill="none" pointer-events="${pointerEvents}"
              @click=${handleClick} />`);
                }
                if (this.connecting)
                    handleClick = () => {
                        const { from, path, fromTerminal } = this.connecting;
                        if (from
                            .closest('ConductingEquipment, PowerTransformer')
                            .querySelector(`[connectivityNode="${cNode.getAttribute('pathName')}"]`))
                            return;
                        const [[oldX1, oldY1], [oldX2, oldY2]] = path.slice(-2);
                        const vertical = oldX1 === oldX2;
                        let x3 = this.mouseX2;
                        let y3 = this.mouseY2;
                        let newX2 = vertical ? oldX2 : x3;
                        let newY2 = vertical ? y3 : oldY2;
                        const start = newX2 === x3 && newY2 === y3
                            ? [oldX1, oldY1]
                            : [newX2, newY2];
                        [x3, y3] = findIntersection(start, [x3, y3], [x1, y1], [x2, y2]);
                        newX2 = vertical ? oldX2 : x3;
                        newY2 = vertical ? y3 : oldY2;
                        path[path.length - 1] = [newX2, newY2];
                        path.push([x3, y3]);
                        cleanPath(path);
                        this.dispatchEvent(newConnectEvent({
                            from,
                            fromTerminal,
                            path,
                            to: cNode,
                        }));
                    };
                lines.push(svg `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                pointer-events="${pointerEvents}"
                stroke-width="${busBar ? 0.12 : nothing}" stroke="black" 
                stroke-linecap="${busBar ? 'round' : 'square'}" />`);
                lines.push(svg `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                pointer-events="${pointerEvents}" stroke-width="${targetSize}"
                @contextmenu=${handleContextMenu} @mousedown=${preventDefault}
                @click=${handleClick} @auxclick=${handleAuxClick} />`);
                if (busBar ||
                    (this.connecting && !vertices[i].hasAttributeNS(sldNs, 'uuid')))
                    lines.push(svg `<rect x="${x1 - targetSize / 2}" y="${y1 - targetSize / 2}"
                  width="${targetSize}" height="${targetSize}"
                  @click=${handleClick} @auxclick=${handleAuxClick}
                  @contextmenu=${handleContextMenu} @mousedown=${preventDefault}
                  pointer-events="${pointerEvents}" fill="none" />`);
                if (busBar ||
                    (this.connecting && !vertices[i + 1].hasAttributeNS(sldNs, 'uuid')))
                    lines.push(svg `<rect x="${x2 - targetSize / 2}" y="${y2 - targetSize / 2}"
                  width="${targetSize}" height="${targetSize}"
                  @click=${handleClick} @auxclick=${handleAuxClick}
                  @contextmenu=${handleContextMenu} @mousedown=${preventDefault}
                  pointer-events="${pointerEvents}" fill="none" />`);
                i += 1;
            }
        });
        const id = cNode.closest('Substation') === this.substation
            ? identity(cNode)
            : nothing;
        return svg `<g class="node" id="${id}" >
        <title>${cNode.getAttribute('pathName')}</title>
        ${circles}
        ${lines}
      </g>`;
    }
};
SLDEditor.styles = css `
    h2 {
      font-family: Roboto;
      font-weight: 300;
      font-size: 24px;
      margin-bottom: 4px;
      color: rgba(0, 0, 0, 0.83);
      --mdc-icon-button-size: 28px;
      --mdc-icon-size: 24px;
    }

    menu {
      position: fixed;
      background: var(--oscd-base3, white);
      margin: 0px;
      padding: 0px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      --mdc-list-vertical-padding: 0px;
      overflow-y: auto;
    }

    .hidden {
      display: none;
    }
    svg:not(:hover) ~ .coordinates {
      display: none;
    }
    .coordinates {
      position: fixed;
      pointer-events: none;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      padding: 8px;
      border-radius: 16px;
      background: #fffd;
      color: rgb(0, 0, 0 / 0.83);
    }
    .coordinates.invalid {
      color: #bb1326;
    }

    * {
      user-select: none;
    }
  `;
__decorate([
    property()
], SLDEditor.prototype, "doc", void 0);
__decorate([
    property()
], SLDEditor.prototype, "substation", void 0);
__decorate([
    property()
], SLDEditor.prototype, "editCount", void 0);
__decorate([
    property()
], SLDEditor.prototype, "gridSize", void 0);
__decorate([
    property()
], SLDEditor.prototype, "nsp", void 0);
__decorate([
    property()
], SLDEditor.prototype, "resizingBR", void 0);
__decorate([
    property()
], SLDEditor.prototype, "resizingTL", void 0);
__decorate([
    property()
], SLDEditor.prototype, "placing", void 0);
__decorate([
    property()
], SLDEditor.prototype, "placingOffset", void 0);
__decorate([
    property()
], SLDEditor.prototype, "placingLabel", void 0);
__decorate([
    property()
], SLDEditor.prototype, "connecting", void 0);
__decorate([
    property()
], SLDEditor.prototype, "showLabels", void 0);
__decorate([
    state()
], SLDEditor.prototype, "idle", null);
__decorate([
    query('#resizeSubstationUI')
], SLDEditor.prototype, "resizeSubstationUI", void 0);
__decorate([
    query('#substationWidthUI')
], SLDEditor.prototype, "substationWidthUI", void 0);
__decorate([
    query('#substationHeightUI')
], SLDEditor.prototype, "substationHeightUI", void 0);
__decorate([
    query('svg#sld')
], SLDEditor.prototype, "sld", void 0);
__decorate([
    query('mwc-snackbar')
], SLDEditor.prototype, "groundHint", void 0);
__decorate([
    state()
], SLDEditor.prototype, "mouseX", void 0);
__decorate([
    state()
], SLDEditor.prototype, "mouseY", void 0);
__decorate([
    state()
], SLDEditor.prototype, "mouseX2", void 0);
__decorate([
    state()
], SLDEditor.prototype, "mouseY2", void 0);
__decorate([
    state()
], SLDEditor.prototype, "mouseX2f", void 0);
__decorate([
    state()
], SLDEditor.prototype, "mouseY2f", void 0);
__decorate([
    state()
], SLDEditor.prototype, "menu", void 0);
SLDEditor = __decorate([
    customElement('sld-editor')
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
], SLDEditor);
export { SLDEditor };
//# sourceMappingURL=sld-editor.js.map