"use strict";
const x = "10";
function y(weight) {
    if (typeof weight == 'number') {
        return weight + 10;
    }
    else {
        return parseInt(weight) + 10;
    }
}
console.log(y('10'));
