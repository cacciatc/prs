var PRS = {
    _WIDTH: 800,
    _HEIGHT: 500
};
PRS.Boot = function(game) {};
PRS.Boot.prototype = {
    preload: function() {
        this.load.image('preloader', 'assets/gfx/stage-preloader.png');
    },
    create: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};