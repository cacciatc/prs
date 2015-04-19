PRS.Game = function(game) {
    this.game = game;
};
PRS.Game.prototype = {
    data: { },
    engine: null,
    create: function() {
        console.log("In game state");

        /* create ai */
        this.data.ai   = new rockman();
        this.data.hero = new character();

        /* setup input */
        this.data.r_key = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
        this.data.s_key = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.data.p_key = this.game.input.keyboard.addKey(Phaser.Keyboard.P);

        this.engine = new engine(this);
        this.engine.startRound();

        /* stop keys from propagating */
        this.game.input.keyboard.addKeyCapture([ 
            Phaser.Keyboard.R, 
            Phaser.Keyboard.S, 
            Phaser.Keyboard.P 
        ]);

        /* create the GUI */
        this.data.gui = new GUI();
        this.data.gui.generate(this.game, this.game.match);

        this.data.resultSet = [];
    },
    initLevels: function() {},
    showLevel: function(level) {},
    updateCounter: function() {},
    managePause: function() {},
    manageAudio: function() {},
    update: function() {

        var roundJustRan = false;

        if (!this.engine.isRoundOver()) {
            // AI just shoots when user does
            if (this.data.r_key.justDown) {
                console.debug("R");
                this.engine.shoot_user(ROCK);
                this.engine.shoot_ai(this.data.ai.shoot(this));
            }
            else if (this.data.p_key.justDown) {
                console.debug("P");
                this.engine.shoot_user(PAPER);
                this.engine.shoot_ai(this.data.ai.shoot(this));
            }
            else if (this.data.s_key.justDown) {
                console.debug("S");
                this.engine.shoot_user(SCISSORS);
                this.engine.shoot_ai(this.data.ai.shoot(this));
            }
            roundJustRan = true;
        }

        if (roundJustRan && this.engine.isRoundOver()) {
            console.log("roundWinner" + this.engine.roundWinner);
            
            if (this.engine.roundWinner == 'HERO') {
                this.data.gui.hurt_enemy(this.game);
            } else if (this.engine.roundWinner == 'AI') {
                this.data.gui.hurt_hero(this.game);
            } else {
                this.data.gui.tie(this.game);
            }

            if (this.data.ai.getHealth() < 0) {
                console.log('you win');
            } else if (this.data.hero.getHealth() < 0) {
                console.log('you lose');
            } else {
                this.engine = new engine(this);
                this.engine.startRound();
            }
        }

        this.data.gui.update();
    },
};
