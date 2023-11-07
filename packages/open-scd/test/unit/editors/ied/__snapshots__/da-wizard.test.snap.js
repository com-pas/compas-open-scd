/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["with no ancestors looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="next"
  heading="[iededitor.wizard.daTitle]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <mwc-textarea
      cols="50"
      disabled=""
      id="nsdocDescription"
      label="[iededitor.wizard.nsdocDescription]"
      readonly=""
      rows="3"
      value="ctlModel"
    >
    </mwc-textarea>
    <mwc-textfield
      disabled=""
      id="daName"
      label="[iededitor.wizard.daName]"
      readonly=""
      value="ctlModel"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daiDescription"
      label="[iededitor.wizard.daiDescription]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daFc"
      label="[iededitor.wizard.daFc]"
      readonly=""
      value="CF"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daBType"
      label="[iededitor.wizard.daBType]"
      readonly=""
      value="Enum"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daValue"
      label="[iededitor.wizard.daValue]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="doName"
      label="[iededitor.wizard.doName]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doCdc"
      label="[iededitor.wizard.doCdc]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnPrefix]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnDescription]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnInst"
      label="[iededitor.wizard.lnInst]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lDevice"
      label="[iededitor.wizard.lDevice]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="accessPoint"
      label="[iededitor.wizard.accessPoint]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="ied"
      label="[iededitor.wizard.ied]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot with no ancestors looks like the latest snapshot */

snapshots["with a DA element looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="next"
  heading="[iededitor.wizard.daTitle]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <mwc-textarea
      cols="50"
      disabled=""
      id="nsdocDescription"
      label="[iededitor.wizard.nsdocDescription]"
      readonly=""
      rows="3"
      value="ctlModel"
    >
    </mwc-textarea>
    <mwc-textfield
      disabled=""
      id="daName"
      label="[iededitor.wizard.daName]"
      readonly=""
      value="ctlModel"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daiDescription"
      label="[iededitor.wizard.daiDescription]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daFc"
      label="[iededitor.wizard.daFc]"
      readonly=""
      value="CF"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daBType"
      label="[iededitor.wizard.daBType]"
      readonly=""
      value="Enum"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daValue"
      label="[iededitor.wizard.daValue]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="doName"
      label="[iededitor.wizard.doName]"
      readonly=""
      value="Pos"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doCdc"
      label="[iededitor.wizard.doCdc]"
      readonly=""
      value="DPC"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnPrefix]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnDescription]"
      readonly=""
      value="XCBR"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnInst"
      label="[iededitor.wizard.lnInst]"
      readonly=""
      value="1"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lDevice"
      label="[iededitor.wizard.lDevice]"
      readonly=""
      value="CircuitBreaker_CB1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="accessPoint"
      label="[iededitor.wizard.accessPoint]"
      readonly=""
      value="P1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="ied"
      label="[iededitor.wizard.ied]"
      readonly=""
      value="IED1"
    >
    </mwc-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot with a DA element looks like the latest snapshot */

snapshots["with a BDA element looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="next"
  heading="[iededitor.wizard.daTitle]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <mwc-textarea
      cols="50"
      disabled=""
      id="nsdocDescription"
      label="[iededitor.wizard.nsdocDescription]"
      readonly=""
      rows="3"
      value="ctlVal"
    >
    </mwc-textarea>
    <mwc-textfield
      disabled=""
      id="daName"
      label="[iededitor.wizard.daName]"
      readonly=""
      value="ctlVal"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daiDescription"
      label="[iededitor.wizard.daiDescription]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daFc"
      label="[iededitor.wizard.daFc]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daBType"
      label="[iededitor.wizard.daBType]"
      readonly=""
      value="BOOLEAN"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daValue"
      label="[iededitor.wizard.daValue]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="doName"
      label="[iededitor.wizard.doName]"
      readonly=""
      value="Sim"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doCdc"
      label="[iededitor.wizard.doCdc]"
      readonly=""
      value="SPC"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnPrefix]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnDescription]"
      readonly=""
      value="LPHD"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnInst"
      label="[iededitor.wizard.lnInst]"
      readonly=""
      value="1"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lDevice"
      label="[iededitor.wizard.lDevice]"
      readonly=""
      value="CBSW"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="accessPoint"
      label="[iededitor.wizard.accessPoint]"
      readonly=""
      value="P1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="ied"
      label="[iededitor.wizard.ied]"
      readonly=""
      value="IED2"
    >
    </mwc-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot with a BDA element looks like the latest snapshot */

snapshots["with a DA element and DAI Element looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="next"
  heading="[iededitor.wizard.daTitle]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <mwc-textarea
      cols="50"
      disabled=""
      id="nsdocDescription"
      label="[iededitor.wizard.nsdocDescription]"
      readonly=""
      rows="3"
      value="ctlModel"
    >
    </mwc-textarea>
    <mwc-textfield
      disabled=""
      id="daName"
      label="[iededitor.wizard.daName]"
      readonly=""
      value="ctlModel"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daiDescription"
      label="[iededitor.wizard.daiDescription]"
      readonly=""
      value="CTL Model"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daFc"
      label="[iededitor.wizard.daFc]"
      readonly=""
      value="CF"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daBType"
      label="[iededitor.wizard.daBType]"
      readonly=""
      value="Enum"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="daValue"
      label="[iededitor.wizard.daValue]"
      readonly=""
      value="status-only"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="doName"
      label="[iededitor.wizard.doName]"
      readonly=""
      value="Pos"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doCdc"
      label="[iededitor.wizard.doCdc]"
      readonly=""
      value="DPC"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnPrefix]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnDescription]"
      readonly=""
      value="XCBR"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnInst"
      label="[iededitor.wizard.lnInst]"
      readonly=""
      value="1"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lDevice"
      label="[iededitor.wizard.lDevice]"
      readonly=""
      value="CircuitBreaker_CB1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="accessPoint"
      label="[iededitor.wizard.accessPoint]"
      readonly=""
      value="P1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="ied"
      label="[iededitor.wizard.ied]"
      readonly=""
      value="IED1"
    >
    </mwc-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot with a DA element and DAI Element looks like the latest snapshot */

