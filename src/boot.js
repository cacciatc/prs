var PRS = {
    _WIDTH: 800,
    _HEIGHT: 500
};
PRS.Boot = function(game) {};
PRS.Boot.prototype = {
    preload: function() {
        //this.load.image('preloaderBg', 'img/loading-bg.png');
        //this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function() {
        console.log("In boot");
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};