/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["GOOSE subscriber plugin in Publisher view per default the plugin itself looks like the latest snapshot"] = 
`<div>
  <mwc-formfield label="[subscription.goose.view.publisherView]">
    <mwc-radio
      checked=""
      id="goosePublisherView"
      name="view"
      value="goose"
    >
    </mwc-radio>
  </mwc-formfield>
  <mwc-formfield label="[subscription.goose.view.subscriberView]">
    <mwc-radio
      id="gooseSubscriberView"
      name="view"
      value="ied"
    >
    </mwc-radio>
  </mwc-formfield>
  <div class="container">
    <goose-list class="row">
    </goose-list>
    <subscriber-list-goose class="row">
    </subscriber-list-goose>
  </div>
</div>
<mwc-dialog
  heading="[log.name]"
  id="log"
>
  <mwc-icon-button-toggle
    id="infofilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-icon-button-toggle
    id="warningfilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-icon-button-toggle
    id="errorfilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-icon-button-toggle
    id="actionfilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-list
    id="content"
    wrapfocus=""
  >
    <mwc-list-item
      aria-disabled="true"
      disabled=""
      graphic="icon"
      mwc-list-item=""
      tabindex="0"
    >
      <span>
        [log.placeholder]
      </span>
      <mwc-icon slot="graphic">
        info
      </mwc-icon>
    </mwc-list-item>
  </mwc-list>
  <mwc-button
    disabled=""
    icon="undo"
    label="[undo]"
    slot="secondaryAction"
  >
  </mwc-button>
  <mwc-button
    disabled=""
    icon="redo"
    label="[redo]"
    slot="secondaryAction"
  >
  </mwc-button>
  <mwc-button
    dialogaction="close"
    slot="primaryAction"
  >
    [close]
  </mwc-button>
</mwc-dialog>
<mwc-dialog
  heading="[diag.name]"
  id="diagnostic"
>
  <filtered-list
    id="content"
    wrapfocus=""
  >
    <mwc-list-item
      aria-disabled="true"
      disabled=""
      graphic="icon"
      mwc-list-item=""
      tabindex="0"
    >
      <span>
        [diag.placeholder]
      </span>
      <mwc-icon slot="graphic">
        info
      </mwc-icon>
    </mwc-list-item>
  </filtered-list>
  <mwc-button
    dialogaction="close"
    slot="primaryAction"
  >
    [close]
  </mwc-button>
</mwc-dialog>
<mwc-snackbar
  id="info"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="4000"
>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<mwc-snackbar
  id="warning"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="6000"
>
  <mwc-button
    icon="history"
    slot="action"
  >
    [log.snackbar.show]
  </mwc-button>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<mwc-snackbar
  id="error"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="10000"
>
  <mwc-button
    icon="history"
    slot="action"
  >
    [log.snackbar.show]
  </mwc-button>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<mwc-snackbar
  id="issue"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="10000"
>
  <mwc-button
    icon="rule"
    slot="action"
  >
    [log.snackbar.show]
  </mwc-button>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<wizard-dialog>
</wizard-dialog>
`;
/* end snapshot GOOSE subscriber plugin in Publisher view per default the plugin itself looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Publisher view per default the right hand side GSEControl list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.publisher.title]
  </h1>
  <filtered-list activatable="">
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value="IED1>>CircuitBreaker_CB1>GCB"
    >
      <span>
        IED1
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="large"
      hasmeta=""
      mwc-list-item=""
      tabindex="0"
      value="IED1>>CircuitBreaker_CB1>GCB"
    >
      <mwc-icon slot="graphic">
      </mwc-icon>
      <span>
        GCB
      </span>
      <mwc-icon-button
        class="hidden"
        icon="edit"
        slot="meta"
      >
      </mwc-icon-button>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value="IED2>>CBSW>GCB"
    >
      <span>
        IED2
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="large"
      hasmeta=""
      mwc-list-item=""
      tabindex="-1"
      value="IED2>>CBSW>GCB"
    >
      <mwc-icon slot="graphic">
      </mwc-icon>
      <span>
        GCB
      </span>
      <mwc-icon-button
        class="hidden"
        icon="edit"
        slot="meta"
      >
      </mwc-icon-button>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value=""
    >
      <span>
        IED3
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value="IED4>>CircuitBreaker_CB1>GCB"
    >
      <span>
        IED4
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="large"
      hasmeta=""
      mwc-list-item=""
      tabindex="-1"
      value="IED4>>CircuitBreaker_CB1>GCB"
    >
      <mwc-icon slot="graphic">
      </mwc-icon>
      <span>
        GCB
      </span>
      <mwc-icon-button
        class="hidden"
        icon="edit"
        slot="meta"
      >
      </mwc-icon-button>
    </mwc-list-item>
  </filtered-list>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Publisher view per default the right hand side GSEControl list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Publisher view per default the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.publisher.subscriberTitle]
  </h1>
  <mwc-list>
    <mwc-list-item
      aria-disabled="false"
      noninteractive=""
      tabindex="-1"
    >
      <span>
        [subscription.subscriber.noControlBlockSelected]
      </span>
    </mwc-list-item>
  </mwc-list>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Publisher view per default the left hand side subscriber IED list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Publisher view with a selected GOOSE message the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED1>>CircuitBreaker_CB1> LGOS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED3 IED4"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED3
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Publisher view with a selected GOOSE message the left hand side subscriber IED list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Publisher view with a selected GOOSE message for unsubscribed IEDs after clicking on the IEDs list element the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1 IED3"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED1>>CircuitBreaker_CB1> LGOS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED3
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="true"
        graphic="avatar"
        mwc-list-item=""
        selected=""
        tabindex="-1"
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Publisher view with a selected GOOSE message for unsubscribed IEDs after clicking on the IEDs list element the left hand side subscriber IED list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Publisher view with a selected GOOSE message for subscribed IEDs after clicking on the IEDs list element looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1 IED3 IED4"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED3
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Publisher view with a selected GOOSE message for subscribed IEDs after clicking on the IEDs list element looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Publisher view with a selected GOOSE message for partially subscribed IEDs after clicking on the IEDs list element it looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1 IED4"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED1>>CircuitBreaker_CB1> LGOS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED3"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED3
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Publisher view with a selected GOOSE message for partially subscribed IEDs after clicking on the IEDs list element it looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Subscriber view per default the plugin itsself looks like the latest snapshot"] = 
`<div>
  <mwc-formfield label="[subscription.goose.view.publisherView]">
    <mwc-radio
      id="goosePublisherView"
      name="view"
      value="goose"
    >
    </mwc-radio>
  </mwc-formfield>
  <mwc-formfield label="[subscription.goose.view.subscriberView]">
    <mwc-radio
      checked=""
      id="gooseSubscriberView"
      name="view"
      value="ied"
    >
    </mwc-radio>
  </mwc-formfield>
  <div class="container">
    <ied-list
      class="row"
      servicetype="goose"
    >
    </ied-list>
    <subscriber-list-goose class="row">
    </subscriber-list-goose>
  </div>
</div>
<mwc-dialog
  heading="[log.name]"
  id="log"
>
  <mwc-icon-button-toggle
    id="infofilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-icon-button-toggle
    id="warningfilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-icon-button-toggle
    id="errorfilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-icon-button-toggle
    id="actionfilter"
    on=""
  >
  </mwc-icon-button-toggle>
  <mwc-list
    id="content"
    wrapfocus=""
  >
    <mwc-list-item
      aria-disabled="true"
      disabled=""
      graphic="icon"
      mwc-list-item=""
      tabindex="0"
    >
      <span>
        [log.placeholder]
      </span>
      <mwc-icon slot="graphic">
        info
      </mwc-icon>
    </mwc-list-item>
  </mwc-list>
  <mwc-button
    disabled=""
    icon="undo"
    label="[undo]"
    slot="secondaryAction"
  >
  </mwc-button>
  <mwc-button
    disabled=""
    icon="redo"
    label="[redo]"
    slot="secondaryAction"
  >
  </mwc-button>
  <mwc-button
    dialogaction="close"
    slot="primaryAction"
  >
    [close]
  </mwc-button>
</mwc-dialog>
<mwc-dialog
  heading="[diag.name]"
  id="diagnostic"
>
  <filtered-list
    id="content"
    wrapfocus=""
  >
    <mwc-list-item
      aria-disabled="true"
      disabled=""
      graphic="icon"
      mwc-list-item=""
      tabindex="0"
    >
      <span>
        [diag.placeholder]
      </span>
      <mwc-icon slot="graphic">
        info
      </mwc-icon>
    </mwc-list-item>
  </filtered-list>
  <mwc-button
    dialogaction="close"
    slot="primaryAction"
  >
    [close]
  </mwc-button>
</mwc-dialog>
<mwc-snackbar
  id="info"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="4000"
>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<mwc-snackbar
  id="warning"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="6000"
>
  <mwc-button
    icon="history"
    slot="action"
  >
    [log.snackbar.show]
  </mwc-button>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<mwc-snackbar
  id="error"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="10000"
>
  <mwc-button
    icon="history"
    slot="action"
  >
    [log.snackbar.show]
  </mwc-button>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<mwc-snackbar
  id="issue"
  labeltext="[log.snackbar.placeholder]"
  timeoutms="10000"
>
  <mwc-button
    icon="rule"
    slot="action"
  >
    [log.snackbar.show]
  </mwc-button>
  <mwc-icon-button
    icon="close"
    slot="dismiss"
  >
  </mwc-icon-button>
</mwc-snackbar>
<wizard-dialog>
</wizard-dialog>
`;
/* end snapshot GOOSE subscriber plugin in Subscriber view per default the plugin itsself looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Subscriber view per default the right hand side IEDs list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.subscriber.iedListTitle]
  </h1>
  <filtered-list activatable="">
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="0"
    >
      <span>
        IED1
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="-1"
    >
      <span>
        IED2
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="-1"
    >
      <span>
        IED3
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="-1"
    >
      <span>
        IED4
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
  </filtered-list>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Subscriber view per default the right hand side IEDs list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Subscriber view per default the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.subscriber.publisherTitle]
  </h1>
  <mwc-list>
    <mwc-list-item
      aria-disabled="false"
      noninteractive=""
      tabindex="-1"
    >
      <span>
        [subscription.subscriber.noIedSelected]
      </span>
    </mwc-list-item>
  </mwc-list>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Subscriber view per default the left hand side subscriber IED list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Subscriber view with a selected IED the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1>>CircuitBreaker_CB1>GCB IED4>>CircuitBreaker_CB1>GCB"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          GCB (IED1)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          GCB (IED4)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Subscriber view with a selected IED the left hand side subscriber IED list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Subscriber view with a selected IED for unsubscribed GSEControl s clicking on a GSEControl list item the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4>>CircuitBreaker_CB1>GCB"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          GCB (IED4)
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1>>CircuitBreaker_CB1>GCB"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          GCB (IED1)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Subscriber view with a selected IED for unsubscribed GSEControl s clicking on a GSEControl list item the left hand side subscriber IED list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Subscriber view with a selected IED for subscribed GSEControl s clicking on the GSEControl list item the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1>>CircuitBreaker_CB1>GCB IED4>>CircuitBreaker_CB1>GCB"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          GCB (IED1)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          GCB (IED4)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Subscriber view with a selected IED for subscribed GSEControl s clicking on the GSEControl list item the left hand side subscriber IED list looks like the latest snapshot */

snapshots["GOOSE subscriber plugin in Subscriber view with a selected IED for partially subscribed GSEControl s clicking on the GSEControl list item the left hand side subscriber IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.goose.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1>>CircuitBreaker_CB1>GCB"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          GCB (IED1)
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4>>CircuitBreaker_CB1>GCB"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="true"
        graphic="avatar"
        mwc-list-item=""
        selected=""
        tabindex="-1"
      >
        <span>
          GCB (IED4)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot GOOSE subscriber plugin in Subscriber view with a selected IED for partially subscribed GSEControl s clicking on the GSEControl list item the left hand side subscriber IED list looks like the latest snapshot */
