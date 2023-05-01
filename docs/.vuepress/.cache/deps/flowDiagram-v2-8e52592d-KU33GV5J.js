import {
  flowRendererV2,
  flowStyles
} from "./chunk-RSSGZZAH.js";
import "./chunk-SV7CDYQB.js";
import {
  flowDb,
  parser$1
} from "./chunk-6CC6ADFX.js";
import "./chunk-TGY2PZWM.js";
import "./chunk-IOTNB4GM.js";
import "./chunk-4UFF4LJD.js";
import "./chunk-RJ3B4HUD.js";
import "./chunk-WAEG7BTD.js";
import "./chunk-Z2T7KN7H.js";
import {
  require_dist
} from "./chunk-7S4WKUPM.js";
import {
  require_dayjs_min,
  setConfig
} from "./chunk-3MP44TXF.js";
import {
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/mermaid/dist/flowDiagram-v2-8e52592d.js
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-8e52592d-KU33GV5J.js.map
