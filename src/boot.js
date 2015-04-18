var Maze = {
    _WIDTH: 800,
    _HEIGHT: 600
};
Maze.Boot = function(game) {};
Maze.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBg', 'img/loading-bg.png');
        this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};