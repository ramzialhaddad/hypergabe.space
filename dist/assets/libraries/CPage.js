define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pageEvents = /** @class */ (function () {
        function pageEvents(pageData) {
            this._pageData = pageData;
        }
        Object.defineProperty(pageEvents.prototype, "icon", {
            get: function () {
                return this._pageData.icon;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageEvents.prototype, "messages", {
            get: function () {
                return this._pageData.messages;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageEvents.prototype, "playlist", {
            get: function () {
                return this._pageData.playlist;
            },
            enumerable: true,
            configurable: true
        });
        return pageEvents;
    }());
    exports.pageEvents = pageEvents;
});
