/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["Editor for GSEControl element and its direct children with valid GSEControl looks like the latest snapshot"] = 
`<h2 style="display: flex;">
  <div style="flex:auto">
    <div>
      GSEControl
    </div>
    <div class="headersubtitle">
      IED1>>CircuitBreaker_CB1>GCB
    </div>
  </div>
</h2>
<div class="parentcontent">
  <div class="content">
    <wizard-textfield
      dialoginitialfocus=""
      helper="[scl.name]"
      label="name"
      maxlength="32"
      pattern="[A-Za-z][0-9,A-Z,a-z_]*"
      required=""
      validationmessage="[textfield.required]"
    >
    </wizard-textfield>
    <wizard-textfield
      disabled=""
      helper="[scl.desc]"
      label="desc"
      nullable=""
    >
    </wizard-textfield>
    <wizard-select
      helper="[scl.type]"
      label="type"
      nullable=""
      required=""
    >
      <mwc-list-item
        activated=""
        aria-disabled="false"
        aria-selected="true"
        mwc-list-item=""
        role="option"
        selected=""
        tabindex="0"
        value="GOOSE"
      >
        GOOSE
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="GSSE"
      >
        GSSE
      </mwc-list-item>
    </wizard-select>
    <wizard-textfield
      helper="[scl.id]"
      label="appID"
      required=""
      validationmessage="[textfield.nonempty]"
    >
    </wizard-textfield>
    <wizard-checkbox
      helper="[scl.fixedOffs]"
      label="fixedOffs"
      nullable=""
    >
    </wizard-checkbox>
    <wizard-select
      disabled=""
      helper="[scl.securityEnable]"
      label="securityEnabled"
      nullable=""
      required=""
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="0"
        value="None"
      >
        None
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Signature"
      >
        Signature
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="SignatureAndEncryption"
      >
        SignatureAndEncryption
      </mwc-list-item>
    </wizard-select>
  </div>
  <div class="content">
    <h3>
      Communication Settings (GSE)
    </h3>
    <mwc-formfield label="[connectedap.wizard.addschemainsttype]">
      <mwc-checkbox id="instType">
      </mwc-checkbox>
    </mwc-formfield>
    <wizard-textfield
      label="MAC-Address"
      pattern="([0-9A-F]{2}-){5}[0-9A-F]{2}"
      required=""
    >
    </wizard-textfield>
    <wizard-textfield
      label="APPID"
      pattern="[0-9A-F]{4}"
      required=""
    >
    </wizard-textfield>
    <wizard-textfield
      label="VLAN-ID"
      nullable=""
      pattern="[0-9A-F]{3}"
      required=""
    >
    </wizard-textfield>
    <wizard-textfield
      label="VLAN-PRIORITY"
      nullable=""
      pattern="[0-7]"
      required=""
    >
    </wizard-textfield>
    <wizard-textfield
      label="MinTime"
      nullable=""
      suffix="ms"
      type="number"
    >
    </wizard-textfield>
    <wizard-textfield
      label="MaxTime"
      nullable=""
      suffix="ms"
      type="number"
    >
    </wizard-textfield>
  </div>
</div>
`;
/* end snapshot Editor for GSEControl element and its direct children with valid GSEControl looks like the latest snapshot */

