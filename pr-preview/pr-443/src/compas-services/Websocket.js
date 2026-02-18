import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {
  APPLICATION_ERROR,
  extractErrorMessage,
  parseXml,
  SERVER_ERROR
} from "./foundation.js";
export function websocket(element, serviceName, url, request) {
  let websocket2;
  function sleep(sleepTime) {
    return new Promise((resolve) => setTimeout(resolve, sleepTime));
  }
  async function waitUntilExecuted() {
    while (websocket2 !== void 0) {
      await sleep(250);
    }
  }
  return new Promise((resolve, reject) => {
    websocket2 = new WebSocket(url);
    websocket2.onopen = () => {
      websocket2?.send(request);
    };
    websocket2.onmessage = (evt) => {
      parseXml(evt.data).then((doc) => {
        if (doc.documentElement.localName === "ErrorResponse") {
          const message = extractErrorMessage(doc);
          reject({type: APPLICATION_ERROR, message});
        } else {
          resolve(doc);
        }
        websocket2?.close();
      }).catch((reason) => {
        reject(reason);
        websocket2?.close();
      });
    };
    websocket2.onerror = () => {
      reject({
        type: SERVER_ERROR,
        message: `Websocket Error in service "${serviceName}"`
      });
      websocket2?.close();
    };
    websocket2.onclose = () => {
      websocket2 = void 0;
    };
    element.dispatchEvent(newPendingStateEvent(waitUntilExecuted()));
  });
}
