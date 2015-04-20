PRS.Preloader = function(game) {
    this.game = game;
};
PRS.Preloader.prototype = {
    preload: function() {
        /* gfx */

        /* portraits */
        this.load.spritesheet('epee_portrait', 'assets/gfx/avatar-mistress-epee.png', 128, 175);
        this.load.spritesheet('sgt_portrait', 'assets/gfx/avatar-sgt-butterball.png', 128, 175);
        this.load.spritesheet('arch_portrait', 'assets/gfx/avatar-archibald.png', 128, 175);
        this.load.spritesheet('marv_portrait', 'assets/gfx/avatar-marv.png', 128, 175);
        this.load.spritesheet('papa_portrait', 'assets/gfx/avatar-papa.png', 128, 175);
        this.load.spritesheet('hero_portrait', 'assets/gfx/avatar-slater.png', 128, 175);

        /* hands */
        this.load.spritesheet('slater_hand', 'assets/gfx/hands-slater.png', 376, 152);
        this.load.spritesheet('sgt_hand', 'assets/gfx/hands-sgt-butterball.png', 376, 152);
        this.load.spritesheet('papa_hand', 'assets/gfx/hands-papa.png', 376, 152);
        this.load.spritesheet('epee_hand', 'assets/gfx/hands-mistress-epee.png', 376, 152);
        this.load.spritesheet('marv_hand', 'assets/gfx/hands-marv.png', 376, 152);
        this.load.spritesheet('arch_hand', 'assets/gfx/hands-archibald.png', 376, 152);

        /* background */
        this.load.image('background', 'assets/gfx/stage-fight.png');
        this.load.image('background-intro', 'assets/gfx/stage-intro.png');
        this.load.image('background-title', 'assets/gfx/stage-title.png');

        /* gui */
        this.load.spritesheet('button_next', 'assets/gfx/button-next.png', 131, 53);
        this.load.spritesheet('button_retry', 'assets/gfx/button-retry.png', 131, 53);
        this.load.spritesheet('stage-markers', 'assets/gfx/stage-markers.png', 70, 61);
        this.load.spritesheet('button-pause', 'assets/gfx/button-pause.png', 35, 35);
        this.load.spritesheet('names', 'assets/gfx/stage-names.png', 184, 36);
        this.load.spritesheet('button_rock', 'assets/gfx/button-rock.png', 90, 62);
        this.load.spritesheet('button_paper', 'assets/gfx/button-paper.png', 90, 62);
        this.load.spritesheet('button_scissor', 'assets/gfx/button-scissor.png', 90, 62);
        this.load.spritesheet('button_start', 'assets/gfx/button-start.png', 131, 53);

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
        this.load.audio('title', 'assets/sfx/title.mp3');
        this.load.audio('yay', 'assets/sfx/yay.mp3');
        this.load.audio('boo', 'assets/sfx/boo.mp3');
        this.load.audio('tie', 'assets/sfx/tie.mp3');
        this.load.audio('fight', 'assets/sfx/fight.mp3');

        this.bar = this.game.add.sprite(310, 280, "preloader");
        this.load.setPreloadSprite(this.bar);
    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};
