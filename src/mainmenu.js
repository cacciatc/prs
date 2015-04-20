PRS.MainMenu = function(game) {
	this.game = game;
};
PRS.MainMenu.prototype = {
    create: function() {

    	this.music = this.game.add.audio('title');
        this.music.loop = true;
        this.music.volume = 1.0;
        this.music.play();

        var background = this.game.add.sprite(0, 0, 'background-title');

        this.next_btn = this.game.add.button(335, 380, 'button_start', function() {
        	this.music.stop();
			this.game.state.start('Intro');
		}, this, 1, 0, 2);
    }
};