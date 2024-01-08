"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_unknow_1 = __importDefault(require("./ts_unknow"));
const ts_any_1 = __importDefault(require("./ts_any"));
const ts_tuple_1 = require("./ts.tuple");
const ts_enum_1 = require("./ts_enum");
console.log(ts_enum_1.currentX);
console.log(ts_tuple_1.user);
(0, ts_unknow_1.default)();
(0, ts_any_1.default)();
