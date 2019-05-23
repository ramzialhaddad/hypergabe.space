define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Song = /** @class */ (function () {
        function Song(title, artist, path) {
            this.title = title;
            this.artist = artist;
            this.path = path;
        }
        Song.prototype.GetTitle = function () {
            return this.title;
        };
        Song.prototype.GetArtist = function () {
            return this.artist;
        };
        Song.prototype.GetPath = function () {
            return this.path;
        };
        return Song;
    }());
    exports.Song = Song;
});
