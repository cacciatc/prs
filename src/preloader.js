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
        this.load.spritesheet('epee_portrait', 'assets/gfx/avatar-mistress-epee.png', 128, 175);
        this.load.spritesheet('sgt_portrait', 'assets/gfx/avatar-sgt-butterball.png', 128, 175);
        this.load.spritesheet('arch_portrait', 'assets/gfx/avatar-archibald.png', 128, 175);
        this.load.spritesheet('marv_portrait', 'assets/gfx/avatar-marv.png', 128, 175);
        this.load.spritesheet('papa_portrait', 'assets/gfx/avatar-papa.png', 128, 175);
        this.load.spritesheet('hero_portrait', 'assets/gfx/avatar-slater.png', 128, 175);

        /* hands */
        this.load.image('hand', 'assets/gfx/hand.png');
        this.load.spritesheet('slater_hand', 'assets/gfx/hands-slater.png', 376, 152);
        this.load.spritesheet('sgt_hand', 'assets/gfx/hands-sgt-butterball.png', 376, 152);

        /* background */
        this.load.image('background', 'assets/gfx/level-3.png');

        /* gui */
        //this.load.spritesheet('input_buttons', 'assets/gfx/input_buttons.png', 64, 64);
        //this.load.spritesheet('next_button', 'assets/gfx/next_buttons.png', 64, 64);
        this.load.spritesheet('stage-markers', 'assets/gfx/stage-markers.png', 70, 61);
        this.load.spritesheet('button-pause', 'assets/gfx/button-pause.png', 35, 35);

        /* sfx */
        this.load.audio('murray_ow', 'assets/sfx/murrayow.mp3');
        this.load.audio('papa_ow', 'assets/sfx/papaow.mp3');
        this.load.audio('sgt_ow', 'assets/sfx/butterballow3.mp3');
        this.load.audio('epee_ow', 'assets/sfx/epeeow.mp3');
        this.load.audio('arch_ow', 'assets/sfx/archibaldow.mp3');
        this.load.audio('slater_ow', 'assets/sfx/slaterow.mp3');
        this.load.audio('tink1', 'assets/sfx/newtink2.mp3');
        this.load.audio('tink2', 'assets/sfx/newtink3.mp3');

        this.load.audio('music', 'assets/sfx/song.mp3');
        this.load.audio('yay', 'assets/sfx/yay.mp3');
    },
    create: function() {
        console.log("In preloader");
        this.game.state.start('MainMenu');
    }
};
