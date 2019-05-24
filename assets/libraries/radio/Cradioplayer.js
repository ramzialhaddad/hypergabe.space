define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioPlayer = /** @class */ (function () {
        function RadioPlayer() {
            this.state = 0;
            var backbar = document.getElementById('radio-progress');
            this.bar = backbar.clientWidth;
            this.progress = document.getElementById('radio-progress-bar');
        }
        RadioPlayer.prototype.GetState = function () {
            return this.state;
        };
        RadioPlayer.prototype.GetCurSong = function () {
            return this.currentsong;
        };
        RadioPlayer.prototype.GetWidth = function () {
            return this.bar;
        };
        RadioPlayer.prototype.SetState = function (state) {
            this.state = state;
            if (state == 1) {
            }
        };
        RadioPlayer.prototype.SetCurSong = function (Song) {
            this.currentsong = Song;
        };
        RadioPlayer.prototype.SetProgressBar = function (curtime, maxtime) {
            this.progress.style.width = (curtime * this.bar / maxtime).toString() + "px";
        };
        return RadioPlayer;
    }());
    exports.RadioPlayer = RadioPlayer;
});
