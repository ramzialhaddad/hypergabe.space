define(["require", "exports", "./radio/Csong"], function (require, exports, Csong_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pageEvents = /** @class */ (function () {
        function pageEvents() {
            this.icon = "../images/gabeDefault.png";
            this.messages = new Array("NULL");
            this.playlist = new Array(new Csong_1.Song("NULL", "NULL", "NULL"));
        }
        pageEvents.prototype.GetIcon = function () {
            return this.icon;
        };
        pageEvents.prototype.GetMessages = function () {
            return this.messages;
        };
        pageEvents.prototype.GetPlaylist = function () {
            return this.playlist;
        };
        return pageEvents;
    }());
    exports.pageEvents = pageEvents;
});
