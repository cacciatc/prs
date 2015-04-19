PRS.Preloader = function(game) {
    this.game = game;
};
PRS.Preloader.prototype = {
    preload: function() {
        //this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
        //this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
        //this.load.setPreloadSprite(this.preloadBar);

        //this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);
        //this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);

        /* font */
        this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        /* gfx */

        /* portraits */
        this.load.spritesheet('hero_portrait', 'assets/gfx/avatar.png', 381, 438);
        this.load.image('hero_portrait_box', 'assets/gfx/avatar-box.png');

        this.load.spritesheet('enemy_portrait', 'assets/gfx/avatar-sprite.png', 381, 438);
        this.load.image('enemy_portrait_box', 'assets/gfx/avatar-box.png');

        /* hands */
        this.load.image('hand', 'assets/gfx/hand.png');

        /* background */
        this.load.image('background', 'assets/gfx/level.png');

        /* gui */
        //this.load.spritesheet('input_buttons', 'assets/gfx/input_buttons.png', 64, 64);
        //this.load.spritesheet('next_button', 'assets/gfx/next_buttons.png', 64, 64);

        /* sfx */
        this.load.audio('murray_ow', 'assets/sfx/murrayow.mp3');
        this.load.audio('papa_ow', 'assets/sfx/papaow.mp3');
    },
    create: function() {
        console.log("In preloader");
        this.game.state.start('MainMenu');
    }
};