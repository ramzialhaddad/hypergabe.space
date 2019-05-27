define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioPlayer = /** @class */ (function () {
        function RadioPlayer() {
            this.state = 0;
            this.index = 0;
            var backbar = document.getElementById('radio-progress');
            this.bar = backbar.clientWidth;
            this.progress = document.getElementById('radio-progress-bar');
        }
        RadioPlayer.prototype.GetState = function () {
            return this.state;
        };
        RadioPlayer.prototype.GetCurSong = function () {
            return this.playlist[this.index];
        };
        RadioPlayer.prototype.GetWidth = function () {
            return this.bar;
        };
        RadioPlayer.prototype.GetPlaylist = function () {
            return this.playlist;
        };
        RadioPlayer.prototype.SetState = function (state) {
            this.state = state;
        };
        RadioPlayer.prototype.SetCurSong = function (index) {
            this.index = index;
        };
        RadioPlayer.prototype.SetProgressBar = function (curtime, maxtime) {
            this.progress.style.width = (curtime * this.bar / maxtime).toString() + "px";
        };
        RadioPlayer.prototype.SetPlaylist = function (songs) {
            this.playlist = songs;
        };
        RadioPlayer.prototype.PreviousSong = function () {
            var lenght = this.playlist.length;
            if (this.index == 0) {
                this.index = lenght - 1;
            }
            else {
                this.index = this.index - 1;
            }
        };
        RadioPlayer.prototype.NextSong = function () {
            var lenght = this.playlist.length;
            if (this.index == lenght - 1) {
                this.index = 0;
            }
            else {
                this.index = this.index + 1;
            }
        };
        return RadioPlayer;
    }());
    exports.RadioPlayer = RadioPlayer;
});
