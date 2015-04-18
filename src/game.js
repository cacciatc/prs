PRS.Game = function(game) {
    this.game = game;
};
PRS.Game.prototype = {
    data: { },
    create: function() {
        console.log("In game state");

        /* create ai */
        this.data.ai = new rockman();

        /* setup input */
        this.data.r_key = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
        this.data.s_key = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.data.p_key = this.game.input.keyboard.addKey(Phaser.Keyboard.P);

        this.engine = engine(this);

        /* stop keys from propagating */
        this.game.input.keyboard.addKeyCapture([ 
            Phaser.Keyboard.R, 
            Phaser.Keyboard.S, 
            Phaser.Keyboard.P 
        ]);

        /* match object to generated per level */
        var match = {
            enemy_portrait_box: 'enemy_portrait_box',
            enemy_portrait:     'enemy_portrait',
            enemy_name:         'PAPA PAPYRUS'
        };

        /* create the GUI */
        this.data.gui = new GUI();
        this.data.gui.generate(this.game, match);

        this.data.resultSet = [];
    },
    initLevels: function() {},
    showLevel: function(level) {},
    updateCounter: function() {},
    managePause: function() {},
    manageAudio: function() {},
    update: function() {
        if (this.data.r_key.justDown) {
            console.log("rock");
            this.data.gui.hurt_hero(this.game);
        }
        else if (this.data.p_key.justDown) {
            console.log("paper");
            this.data.gui.hurt_enemy(this.game);
        }
        else if (this.data.s_key.justDown) {
            console.log("scissors");
        }

        this.data.gui.update();
    },

    wallCollision: function() {},
    handleOrientation: function(e) {},
    finishLevel: function() {},
};

