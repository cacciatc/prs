PRS.Preloader = function(game) {};
PRS.Preloader.prototype = {
    preload: function() {
        //this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
        //this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
        //this.load.setPreloadSprite(this.preloadBar);

        //this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);
        //this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);

        /* gfx */

        /* portraits */
        this.load.spritesheet('hero_portrait', 'assets/gfx/avatar.png', 381, 438);
        this.load.image('hero_portrait_box', 'assets/gfx/avatar-box.png');

        this.load.spritesheet('enemy_portrait', 'assets/gfx/avatar-sprite.png', 381, 438);
        this.load.image('enemy_portrait_box', 'assets/gfx/avatar-box.png');

        /* gui */
        //this.load.spritesheet('input_buttons', 'assets/gfx/input_buttons.png', 64, 64);

        /* sfx */
    },
    create: function() {
        console.log("In preloader");
        this.game.state.start('MainMenu');
    }
};