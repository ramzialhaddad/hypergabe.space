define(["require", "exports", "./Csong"], function (require, exports, Csong_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioPlayer = /** @class */ (function () {
        function RadioPlayer() {
            this.state = 0;
            this.currentsong = new Csong_1.Song("NULL", "NULL", "NULL");
        }
        RadioPlayer.prototype.GetState = function () {
            return this.state;
        };
        RadioPlayer.prototype.GetCurSong = function () {
            return this.currentsong;
        };
        RadioPlayer.prototype.SetState = function (state) {
            this.state = state;
        };
        RadioPlayer.prototype.SetCurSong = function (Song) {
            this.currentsong = Song;
        };
        return RadioPlayer;
    }());
    exports.RadioPlayer = RadioPlayer;
});
