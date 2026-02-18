/** Returns a new empty SCD document. */
const SCL_NAMESPACE = "http://www.iec.ch/61850/2003/SCL";
/**
 * Check if the namespace of the passed element is the standard SCL Namespace.
 * @param element - The element to check.
 */
function isSCLNamespace(element) {
    return element.namespaceURI === SCL_NAMESPACE;
}

export { SCL_NAMESPACE, isSCLNamespace };
