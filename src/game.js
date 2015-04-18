PRS.Game = function(game) {
    this.game = game;
};
PRS.Game.prototype = {
    data: { },
    create: function() {
        console.log("In game state");

        /* create ai */
        this.data.ai = AI.create_rockman();

        /* create input handler */
        this.data.input_handler = new InputHandler();
        this.data.input_handler.bind(Phaser.Keyboard.R, function() { console.log("rock"); });
    },
    initLevels: function() {},
    showLevel: function(level) {},
    updateCounter: function() {},
    managePause: function() {},
    manageAudio: function() {},
    update: function() {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.R)) {
            this.data.input_handler.rock();
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.P)) {
            this.data.input_handler.paper();
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            this.data.input_handler.scissors();
        }
    },
    wallCollision: function() {},
    handleOrientation: function(e) {},
    finishLevel: function() {}
};