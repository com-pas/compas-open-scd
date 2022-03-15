/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["Wizards for SCL element SubNetwork include an edit wizard that with existing BitRate child element looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="close"
  heading="[wizard.title.edit]"
  open=""
>
  <div id="wizard-content">
    <wizard-textfield
      dialoginitialfocus=""
      helper="[subnetwork.wizard.nameHelper]"
      label="name"
      required=""
      validationmessage="[textfield.required]"
    >
    </wizard-textfield>
    <wizard-textfield
      disabled=""
      helper="[subnetwork.wizard.descHelper]"
      label="desc"
      nullable=""
    >
    </wizard-textfield>
    <wizard-textfield
      helper="[subnetwork.wizard.typeHelper]"
      label="type"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-textfield
      helper="[subnetwork.wizard.bitrateHelper]"
      label="BitRate"
      nullable=""
      pattern="[+-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
      required=""
      unit="b/s"
      validationmessage="[textfield.nonempty]"
    >
    </wizard-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[cancel]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
  <mwc-button
    dialoginitialfocus=""
    icon="save"
    label="[save]"
    slot="primaryAction"
    trailingicon=""
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot Wizards for SCL element SubNetwork include an edit wizard that with existing BitRate child element looks like the latest snapshot */

snapshots["Wizards for SCL element SubNetwork include an edit wizard that with missing BitRate child element looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="close"
  heading="[wizard.title.edit]"
  open=""
>
  <div id="wizard-content">
    <wizard-textfield
      dialoginitialfocus=""
      helper="[subnetwork.wizard.nameHelper]"
      label="name"
      required=""
      validationmessage="[textfield.required]"
    >
    </wizard-textfield>
    <wizard-textfield
      disabled=""
      helper="[subnetwork.wizard.descHelper]"
      label="desc"
      nullable=""
    >
    </wizard-textfield>
    <wizard-textfield
      helper="[subnetwork.wizard.typeHelper]"
      label="type"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-textfield
      disabled=""
      helper="[subnetwork.wizard.bitrateHelper]"
      label="BitRate"
      nullable=""
      pattern="[+-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
      required=""
      unit="b/s"
      validationmessage="[textfield.nonempty]"
    >
    </wizard-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[cancel]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
  <mwc-button
    dialoginitialfocus=""
    icon="save"
    label="[save]"
    slot="primaryAction"
    trailingicon=""
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot Wizards for SCL element SubNetwork include an edit wizard that with missing BitRate child element looks like the latest snapshot */

snapshots["Wizards for SCL element SubNetwork include an create wizard that looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="close"
  heading="[wizard.title.create]"
  open=""
>
  <div id="wizard-content">
    <wizard-textfield
      dialoginitialfocus=""
      helper="[subnetwork.wizard.nameHelper]"
      label="name"
      required=""
      validationmessage="[textfield.required]"
    >
    </wizard-textfield>
    <wizard-textfield
      helper="[subnetwork.wizard.descHelper]"
      label="desc"
      nullable=""
    >
    </wizard-textfield>
    <wizard-textfield
      helper="[subnetwork.wizard.typeHelper]"
      label="type"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-textfield
      helper="[subnetwork.wizard.bitrateHelper]"
      label="BitRate"
      nullable=""
      pattern="[+-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
      required=""
      unit="b/s"
      validationmessage="[textfield.nonempty]"
    >
    </wizard-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[cancel]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
  <mwc-button
    dialoginitialfocus=""
    icon="add"
    label="[add]"
    slot="primaryAction"
    trailingicon=""
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot Wizards for SCL element SubNetwork include an create wizard that looks like the latest snapshot */
