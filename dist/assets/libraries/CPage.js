define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pageEvents = /** @class */ (function () {
        function pageEvents(pageData) {
            this.pageData = pageData;
        }
        pageEvents.prototype.GetIcon = function () {
            return this.pageData.icon;
        };
        pageEvents.prototype.GetMessages = function () {
            return this.pageData.messages;
        };
        pageEvents.prototype.GetPlaylist = function () {
            return this.pageData.playlist;
        };
        return pageEvents;
    }());
    exports.pageEvents = pageEvents;
});
