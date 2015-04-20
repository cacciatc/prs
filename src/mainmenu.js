PRS.MainMenu = function(game) {
	this.game = game;
};
PRS.MainMenu.prototype = {
    create: function() {

    	this.music = this.game.add.audio('title');
        this.music.loop = true;
        this.music.volume = 1.0;
        this.music.play();

        var grp = this.game.add.group();
        var background = this.game.add.sprite(0, 0, 'background-title');
        grp.add(background);

        this.next_btn = this.game.add.button(335, 380, 'button_start', function() {
        	var t3 = this.game.add.tween(grp);
			t3.to({alpha:0.0}, 700, Phaser.Easing.Quartic.Out, false, 300);
	    	t3.onComplete.add(function() {
        		this.music.stop();
				this.game.state.start('Intro');
	    	}, this);
	    	t3.start();
		}, this, 1, 0, 2);

		grp.add(this.next_btn);

		grp.alpha = 0.0;
		var t2 = this.game.add.tween(grp);
		t2.to({alpha:1.0}, 700, Phaser.Easing.Quartic.In);
	    t2.start();
    }
};