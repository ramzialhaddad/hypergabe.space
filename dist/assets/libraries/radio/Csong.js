define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Song = /** @class */ (function () {
        function Song(title, artist, path) {
            this._title = title;
            this._artist = artist;
            this._path = path;
            this._sound = new Audio(path);
            this._playPause = document.getElementById('playpause');
        }
        Object.defineProperty(Song.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Song.prototype, "artist", {
            get: function () {
                return this._artist;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Song.prototype, "path", {
            get: function () {
                return this._path;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Song.prototype, "audio", {
            get: function () {
                return this._sound;
            },
            enumerable: true,
            configurable: true
        });
        Song.prototype.PlayAudio = function () {
            this._sound.play();
            this._playPause.classList.remove("play");
            this._playPause.classList.add("pause");
        };
        Song.prototype.PauseAudio = function () {
            this._sound.pause();
            this._playPause.classList.remove("pause");
            this._playPause.classList.add("play");
        };
        return Song;
    }());
    exports.Song = Song;
});
