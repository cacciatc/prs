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
            enemy_portrait:     'enemy_portrait'
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
        }
        else if (this.data.p_key.justDown) {
            console.log("paper");
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

var engine = function(game) {
    var hero = game.data.hero;
    var ai   = game.data.ai;

    var roundOver = false;

    startRound = function() {
        if (roundOver) {
            data.ai_shot   = null;
            data.hero_shot = null;
        }
    };

    shoot_ai =    function(move) {
        game.data.ai_shot = move;
        this.shoot_result();
    };

    shoot_user = function(move) {
        game.data.hero_shot = move;
        this.shoot_result();
    };

    shoot_result = function() {
        if (game.data.ai_shot   === null) return;
        if (game.data.hero_shot === null) return;

        // tie game
        if (game.data.ai_shot === game.data.hero_shot) {
            //console.debug(game.data.resultSet);
            game.data.resultSet.push("TIE");
            hero.tieShoot();
            ai.tieShoot();
            roundOver = true;
            return;
        }

        // there is a winner
        var winner = roshambo(game.data.hero_shot, game.data.ai_shot);
        game.data.resultSet.push(winner);

        if (winner === game.data.hero_shot) {
            hero.winShoot();
            ai.loseShoot();
        }
        else
        {
            hero.loseShoot();
            ai.winShoot();
        }

        roundOver = true;
    };

    return {
        shoot_ai:     shoot_ai,
        shoot_user:   shoot_user,
        shoot_result: shoot_result,
        isRoundOver:  function(){ return this.roundOver; },
        startRound: startRound,
    }
}


