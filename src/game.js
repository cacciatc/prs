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

        /* stop keys from propagating */
        this.game.input.keyboard.addKeyCapture([ 
            Phaser.Keyboard.R, 
            Phaser.Keyboard.S, 
            Phaser.Keyboard.P 
        ]);
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
    },
    wallCollision: function() {},
    handleOrientation: function(e) {},
    finishLevel: function() {}
};