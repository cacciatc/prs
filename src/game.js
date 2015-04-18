PRS.Game = function(game) {
    this.game = game;
};
PRS.Game.prototype = {
    data: { },
    create: function() {
        console.log("In game state");

        /* create ai */
        this.data.ai = AI.create_rockman();

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

var ROCK     = 1;
var PAPER    = 2;
var SCISSORS = 3;

var roshambo = function(a, b) {
    if (b === SCISSORS && a === ROCK) {
        return a;
    }

    if (a === SCISSORS && b === ROCK) {
        return b;
    }

    if (a >= b) {
        return a;
    } 

    return b;
}

var engine = function(game) {
    var hero = game.data.hero;
    var ai   = game.data.ai;

    shoot_ai =    function(move) {
        game.data.ai_shot = move;
        this.shoot_result();
    };

    shoot_user = function(move) {
        game.data.user_shot = move;
        this.shoot_result();
    };

    shoot_result = function() {
        if (game.data.ai_shot   === undefined) return;
        if (game.data.user_shot === undefined) return;

        // tie game
        if (game.data.ai_shot === game.data.user_shot) {
            game.data.resultSet.push("TIE");
            hero.tieShoot();
            ai.tieShoot();
            return;
        }

        // there is a winner
        var winner = roshambo(game.data.user_shot, game.data.ai_shot);
        game.data.resultSet.push(winner);

        if (winner === game.data.user_shot) {
            hero.winShoot();
            ai.winShoot();
        }
        else
        {
            hero.winShoot();
            ai.winShoot();
        }
};
}


