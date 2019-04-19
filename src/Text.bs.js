// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function TextMaker(Config) {
  var Text$TextMaker = function (Props) {
    var py = Props.py;
    var px = Props.px;
    var p = Props.p;
    var mt = Props.mt;
    var mb = Props.mb;
    var ml = Props.ml;
    var mr = Props.mr;
    var color = Props.color;
    Props.fontSize;
    Props.is;
    var children = Props.children;
    var tmp;
    if (mt !== undefined) {
      var m = mt;
      tmp = m === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          m === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              m === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  m === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      m === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(m) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp = "";
    }
    var tmp$1;
    if (mr !== undefined) {
      var m$1 = mr;
      tmp$1 = m$1 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          m$1 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              m$1 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  m$1 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      m$1 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(m$1) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$1 = "";
    }
    var tmp$2;
    if (mb !== undefined) {
      var m$2 = mb;
      tmp$2 = m$2 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          m$2 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              m$2 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  m$2 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      m$2 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(m$2) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$2 = "";
    }
    var tmp$3;
    if (ml !== undefined) {
      var m$3 = ml;
      tmp$3 = m$3 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          m$3 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              m$3 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  m$3 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      m$3 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(m$3) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$3 = "";
    }
    var tmp$4;
    if (p !== undefined) {
      var p$1 = p;
      tmp$4 = p$1 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          p$1 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              p$1 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  p$1 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      p$1 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(p$1) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$4 = "";
    }
    var tmp$5;
    if (py !== undefined) {
      var p$2 = py;
      tmp$5 = p$2 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          p$2 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              p$2 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  p$2 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      p$2 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(p$2) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$5 = "";
    }
    var tmp$6;
    if (px !== undefined) {
      var p$3 = px;
      tmp$6 = p$3 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          p$3 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              p$3 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  p$3 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      p$3 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(p$3) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$6 = "";
    }
    var tmp$7;
    if (py !== undefined) {
      var p$4 = py;
      tmp$7 = p$4 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          p$4 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              p$4 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  p$4 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      p$4 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(p$4) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$7 = "";
    }
    var tmp$8;
    if (px !== undefined) {
      var p$5 = px;
      tmp$8 = p$5 === 5 ? String(Caml_array.caml_array_get(Config[/* scale */0], 5)) + Config[/* domUnit */1] : (
          p$5 === 4 ? String(Caml_array.caml_array_get(Config[/* scale */0], 4)) + Config[/* domUnit */1] : (
              p$5 === 3 ? String(Caml_array.caml_array_get(Config[/* scale */0], 3)) + Config[/* domUnit */1] : (
                  p$5 === 2 ? String(Caml_array.caml_array_get(Config[/* scale */0], 2)) + Config[/* domUnit */1] : (
                      p$5 === 1 ? String(Caml_array.caml_array_get(Config[/* scale */0], 1)) + Config[/* domUnit */1] : String(p$5) + Config[/* domUnit */1]
                    )
                )
            )
        );
    } else {
      tmp$8 = "";
    }
    return React.createElement("div", {
                style: {
                  color: color !== undefined ? color : "",
                  marginTop: tmp,
                  marginRight: tmp$1,
                  marginBottom: tmp$2,
                  marginLeft: tmp$3,
                  padding: tmp$4,
                  paddingTop: tmp$5,
                  paddingRight: tmp$6,
                  paddingBottom: tmp$7,
                  paddingLeft: tmp$8
                }
              }, children);
  };
  return /* module */[/* make */Text$TextMaker];
}

exports.TextMaker = TextMaker;
/* react Not a pure module */