function isComplexV2(edit) {
    return edit instanceof Array;
}
function isSetTextContentV2(edit) {
    return (edit.element !== undefined &&
        edit.textContent !== undefined);
}
function isRemoveV2(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}
function isSetAttributesV2(edit) {
    return (edit.element !== undefined &&
        edit.attributes !== undefined &&
        edit.attributesNS !== undefined);
}
function isInsertV2(edit) {
    return (edit.parent !== undefined &&
        edit.node !== undefined &&
        edit.reference !== undefined);
}

export { isRemoveV2 as a, isSetAttributesV2 as b, isSetTextContentV2 as c, isComplexV2 as d, isInsertV2 as i };
