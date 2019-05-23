define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function randomnumber(max) {
        return Math.floor(Math.random() * max);
    }
    exports.randomnumber = randomnumber;
});
