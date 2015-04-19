PRS.Game = function(game) {
    this.game = game;
};
PRS.Game.prototype = {
    data: { },
    engine: null,
    create: function() {
        console.log("In game state");

        var background = this.game.add.sprite(0, 0, 'background');

        /* create ai */
        this.data.ai   = this.game.match.ai;
        this.data.hero = new character();

        /* setup input */
        this.data.r_key = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
        this.data.s_key = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
        this.data.p_key = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

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
        
        this.data.nobodyIsShooting = true;
        
        this.data.resultSet = [];

        this.game.is_paused = false;
    },
    initLevels: function() {},
    showLevel: function(level) {},
    updateCounter: function() {},
    managePause: function() {},
    manageAudio: function() {},

    fireShoot: function(move) {
        this.data.nobodyIsShooting = false;

        var tween = this.data.gui.reveal(this.game);
        tween.onComplete.add(function(){
            this.engine.shoot_user(move);
            // AI just shoots when user does
            var m2 = this.data.ai.shoot(this);
            this.engine.shoot_ai(m2);

            this.data.gui.hero_hand_anim(move);
            this.data.gui.enemy_hand_anim(m2);

            this.finishRound();

            this.game.time.events.add(1500,  function() {
                this.data.gui.hero_hand_anim(ROCK);
                this.data.gui.enemy_hand_anim(ROCK);

                this.data.nobodyIsShooting = true;
                this.engine = new engine(this);
                this.engine.startRound();
            }, this);

        }, this);
    },

    finishRound: function(){
        if (this.engine.hasRoundEnded()) {
            console.log("roundWinner" + this.engine.roundWinner);
            
            if (this.engine.roundWinner == 'HERO') {
                this.data.gui.hurt_enemy(this.game, this.data.ai.getHealth());
            } else if (this.engine.roundWinner == 'AI') {
                this.data.gui.hurt_hero(this.game, this.data.hero.getHealth());
            } else {
                this.data.gui.tie(this.game);
            }

            if (this.data.ai.getHealth() < 0) {
                console.log('you win');
                (new MatchOverGUI()).generate(this.game);

            } else if (this.data.hero.getHealth() < 0) {
                console.log('you lose');
                (new MatchOverGUI()).generate(this.game);

            } else {
                //this.data.nobodyIsShooting = true;
                //this.engine = new engine(this);
                //this.engine.startRound();
            }
        }
    },

    update: function() {
        // Read the justDown getter here so it gets 
        // reset on every loop rather than stack up.
        if(this.game.is_paused) {
            this.game.input.keyboard.enabled = false;
            this.game.world.alpha = 0.7;
            return;
        }
        else {
            this.game.input.keyboard.enabled = true;
            this.game.world.alpha = 1.0;
        }

        var rPress = this.data.r_key.justDown;
        var pPress = this.data.p_key.justDown;
        var sPress = this.data.s_key.justDown;

        if (this.engine.hasRoundStarted() && this.data.nobodyIsShooting) {

            if (rPress) {
                this.fireShoot(ROCK);
            }
            else if (pPress) {
                this.fireShoot(PAPER);
            }
            else if (sPress) {
                this.fireShoot(SCISSORS);
            }            
        }


        this.data.gui.update();
    },
};
