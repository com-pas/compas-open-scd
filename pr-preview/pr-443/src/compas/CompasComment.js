var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  css,
  customElement,
  html,
  LitElement
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js";
export let CompasCommentElement = class extends LitElement {
  getCommentField() {
    return this.shadowRoot.querySelector('wizard-textfield[id="comment"]');
  }
  set value(value) {
    const commentField = this.getCommentField();
    commentField.maybeValue = value;
  }
  get value() {
    const commentField = this.getCommentField();
    return commentField.maybeValue;
  }
  valid() {
    return this.getCommentField().checkValidity();
  }
  render() {
    return html`
      <wizard-textfield
        id="comment"
        label="${translate("compas.comment")}"
        .maybeValue=${null}
        nullable
      >
      </wizard-textfield>
    `;
  }
};
CompasCommentElement.styles = css`
    wizard-textfield {
      width: 100%;
    }
  `;
CompasCommentElement = __decorate([
  customElement("compas-comment")
], CompasCommentElement);
