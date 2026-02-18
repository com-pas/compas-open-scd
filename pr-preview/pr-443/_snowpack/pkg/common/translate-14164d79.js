import { l as langChanged, g as get } from './directive-12ec8b14.js';

/**
 * A lit directive that updates the translation when the language changes.
 * @param key
 * @param values
 * @param config
 */
const translate = (key, values, config) => langChanged(() => get(key, values, config));

export { translate as t };
