function newLogEvent(detail, eventInitDict) {
    return new CustomEvent('log', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { ...detail, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}
function newIssueEvent(detail, eventInitDict) {
    return new CustomEvent('issue', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { ...detail, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

function newLoadNsdocEvent(nsdoc, filename) {
    return new CustomEvent('load-nsdoc', {
        bubbles: true,
        composed: true,
        detail: { nsdoc, filename },
    });
}
function newSettingsUIEvent(show, eventInitDict) {
    return new CustomEvent('oscd-settings', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: {
            show,
            ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail,
        },
    });
}

export { newLoadNsdocEvent as a, newIssueEvent as b, newSettingsUIEvent as c, newLogEvent as n };
