PRS.Game = function(game) {
    this.game = game;
};
PRS.Game.prototype = {
    data: { },
    engine: null,
    create: function() {
        /* maybe load this in a previous state */
        this.data.music = this.game.add.audio('music');
        this.data.music.loop = true;
        this.data.music.volume = 0.7;
        this.data.music.play();

        this.data.everything = this.game.add.group();

        var background = this.game.add.sprite(0, 0, 'background');

        this.data.everything.add(background);
        this.data.everything.alpha = 0.0;

        var t = this.game.add.tween(this.data.everything);

        t.to({alpha:1.0}, 1000, Phaser.Easing.Quartic.Out);
        t.start();

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
        this.data.gui.generate(this.game, this.game.match, this.data);
        
        this.data.nobodyIsShooting = true;
        
        this.data.resultSet = [];

        this.game.is_paused = false;
        this.game.is_done = false;
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
                var mt1 = this.game.add.tween(this.data.music);
                this.data.gui.win_hero(this.game);

                mt1.to({volume:0.0}, 700);
                mt1.onComplete.add(function() {
                    this.data.music.stop();
                }, this);
                mt1.start();

                var yay = this.game.add.audio('yay');
                var mt2 = this.game.add.tween(yay);
                yay.volume = 0.0;
                yay.play();
                mt2.to({volume:1.0}, 300, Phaser.Easing.Linear.Out, false, 500);
                mt2.start();

                (new MatchOverGUI()).generate(this.game, false);
                this.game.is_done = true;
            } else if (this.data.hero.getHealth() < 0) {
                var mt1 = this.game.add.tween(this.data.music);
                this.data.gui.win_enemy(this.game);

                mt1.to({volume:0.0}, 700);
                mt1.onComplete.add(function() {
                    this.data.music.stop();
                }, this);
                mt1.start();

                var yay = this.game.add.audio('boo');
                var mt2 = this.game.add.tween(yay);
                yay.volume = 0.0;
                yay.play();
                mt2.to({volume:1.0}, 300, Phaser.Easing.Linear.Out, false, 500);
                mt2.start();

                (new MatchOverGUI()).generate(this.game, true);
                this.game.is_done = true;
            }
        }
    },

    update: function() {
        if(this.game.is_done)
            return;

        if(this.game.is_paused) {
            this.game.input.keyboard.enabled = false;
            this.game.world.alpha = 0.7;
            if(this.data.music.isPlaying) {
                this.data.music.stop();
            }
            return;
        }
        else {
            this.game.input.keyboard.enabled = true;
            this.game.world.alpha = 1.0;
            if(!this.data.music.isPlaying) {
                this.data.music.play();
            }
        }

        // Read the justDown getter here so it gets 
        // reset on every loop rather than stack up.
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
