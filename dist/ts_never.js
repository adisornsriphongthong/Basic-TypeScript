"use strict";
// Function that never returns
function throwError(message) {
    throw new Error(message);
}
// Variable that should never have a value
let unreachable;
// This function is expected to never return
function infiniteLoop() {
    while (true) {
        console.log("This function never returns!");
    }
}
