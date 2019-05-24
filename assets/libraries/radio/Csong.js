define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Song = /** @class */ (function () {
        function Song(title, artist, path) {
            this.title = title;
            this.artist = artist;
            this.path = path;
            this.sound = new Audio(path);
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
        Song.prototype.GetAudio = function () {
            return this.sound;
        };
        Song.prototype.PlayAudio = function () {
            this.sound.play();
        };
        Song.prototype.PauseAudio = function () {
            this.sound.pause();
        };
        return Song;
    }());
    exports.Song = Song;
});
