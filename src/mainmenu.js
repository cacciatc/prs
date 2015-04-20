PRS.MainMenu = function(game) {
	this.game = game;
};
PRS.MainMenu.prototype = {
    create: function() {

    	if(this.game.titlemusic != null && this.game.titlemusic.isPlaying) {
    		this.game.titlemusic.stop();
    	}
    	
    	this.game.titlemusic = this.game.add.audio('title');
        this.game.titlemusic.loop = true;
        this.game.titlemusic.volume = 1.0;
        this.game.titlemusic.play();

        var grp = this.game.add.group();
        var background = this.game.add.sprite(0, 0, 'background-title');
        grp.add(background);

        this.next_btn = this.game.add.button(335, 380, 'button_start', function() {
        	var t3 = this.game.add.tween(grp);
			t3.to({alpha:0.0}, 700, Phaser.Easing.Quartic.Out, false, 300);
	    	t3.onComplete.add(function() {
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