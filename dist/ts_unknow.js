"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userInput;
// 'unknown' type is more restrictive than 'any'
// We need to perform a type check before using the value
function main() {
    if (typeof userInput === 'string') {
        let strLength = userInput.length;
        console.log(strLength);
    }
    else {
        console.log("The type of userInput is not known.");
    }
}
exports.default = main;
