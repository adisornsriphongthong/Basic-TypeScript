"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main() {
    /*let num: number[] = []
    num[0] = 10
    num[1] = 'hello world'*/
    let num = [];
    num[0] = 10;
    num[1] = 'hello world';
    num.forEach(e => {
        console.log(e + 10);
    });
}
exports.default = main;
