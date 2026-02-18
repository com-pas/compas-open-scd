import { l as langChanged, g as get } from './common/directive-12ec8b14.js';
export { g as get, r as registerTranslateConfig, u as use } from './common/directive-12ec8b14.js';
export { t as translate } from './common/translate-14164d79.js';
import { u as unsafeHTML } from './common/unsafe-html-44fe85ab.js';
import './common/lit-html-c4cc555c.js';

/**
 * A lit directive that updates the translation and renders embedded HTML markup when the language changes.
 * @param key
 * @param values
 * @param config
 */
const translateUnsafeHTML = (key, values, config) => langChanged(() => unsafeHTML(get(key, values, config)));

export { translateUnsafeHTML };
