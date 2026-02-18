import { _ as __decorate } from '../../../common/tslib.es6-272d455c.js';
import { L as LitElement, p as property, a as customElement } from '../../../common/lit-element-5ba57723.js';
import '../../../@material/mwc-linear-progress.js';
import { h as html } from '../../../common/lit-html-c4cc555c.js';
import '../../../common/render-a1d0e246.js';
import '../../../common/aria-property-2938771c.js';
import '../../../common/class-map-360a3edc.js';
import '../../../common/if-defined-2d797dbf.js';
import '../../../common/style-map-46da9e52.js';

let OscdWaiter = class OscdWaiter extends LitElement {
    async onPendingState(e) {
        this.waiting = true;
        this.work.add(e.detail.promise);
        this.workDone = Promise.allSettled(this.work);
        await e.detail.promise.catch(reason => console.warn(reason));
        this.work.delete(e.detail.promise);
        this.waiting = this.work.size > 0;
    }
    constructor() {
        super();
        /** Whether the element is currently waiting for some async work. */
        this.waiting = false;
        this.work = new Set();
        /** A promise which resolves once all currently pending work is done. */
        this.workDone = Promise.allSettled(this.work);
        this.onPendingState = this.onPendingState.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('pending-state', this.onPendingState);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('pending-state', this.onPendingState);
    }
    render() {
        return html `<slot></slot>
      <mwc-linear-progress
        .closed=${!this.waiting}
        indeterminate
      ></mwc-linear-progress>`;
    }
};
__decorate([
    property({ type: Boolean })
], OscdWaiter.prototype, "waiting", void 0);
OscdWaiter = __decorate([
    customElement('oscd-waiter')
], OscdWaiter);

export { OscdWaiter };
