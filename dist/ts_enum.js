"use strict";
/*const x = 1
const y = 2
const z = 3*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentX = void 0;
var xyz;
(function (xyz) {
    xyz[xyz["x"] = 1] = "x";
    xyz[xyz["y"] = 2] = "y";
    xyz[xyz["z"] = 3] = "z";
})(xyz || (xyz = {}));
exports.currentX = xyz.x;
