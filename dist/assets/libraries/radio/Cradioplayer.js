define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioPlayer = /** @class */ (function () {
        function RadioPlayer() {
            this._state = 0;
            this._index = 0;
            var backbar = document.getElementById('radio-progress');
            this._bar = backbar.clientWidth;
            this._progress = document.getElementById('radio-progress-bar');
        }
        Object.defineProperty(RadioPlayer.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (state) {
                this._state = state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RadioPlayer.prototype, "currentSong", {
            get: function () {
                return this._playlist[this._index];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RadioPlayer.prototype, "width", {
            get: function () {
                return this._bar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RadioPlayer.prototype, "playlist", {
            get: function () {
                return this._playlist;
            },
            set: function (songs) {
                this._playlist = songs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RadioPlayer.prototype, "currentIndex", {
            set: function (index) {
                this._index = index;
            },
            enumerable: true,
            configurable: true
        });
        RadioPlayer.prototype.updateProgressBar = function (curtime, maxtime) {
            this._progress.style.width = (curtime * this._bar / maxtime).toString() + "px";
        };
        RadioPlayer.prototype.previousSong = function () {
            var lenght = this._playlist.length;
            if (this._index == 0) {
                this._index = lenght - 1;
            }
            else {
                this._index = this._index - 1;
            }
        };
        RadioPlayer.prototype.nextSong = function () {
            var lenght = this._playlist.length;
            if (this._index == lenght - 1) {
                this._index = 0;
            }
            else {
                this._index = this._index + 1;
            }
        };
        return RadioPlayer;
    }());
    exports.RadioPlayer = RadioPlayer;
});
