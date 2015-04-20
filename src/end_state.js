PRS.EndState = function(game) {};

PRS.EndState.prototype = {
    create: function() {
		if(!this.game.titlemusic.isPlaying) {
			this.game.titlemusic.play();
		}

        var background = this.game.add.sprite(0, 0, 'background-intro');

        var grp = this.game.add.group();

		this.text1 = this.game.add.sprite(226, 60, this.game.match.text1);
		this.text2 = this.game.add.sprite(226, 260, this.game.match.text2);

		this.text1.alpha = 0;
		this.text2.alpha = 0;

        this.next_btn = this.game.add.button(332, 410, 'button_retry', function() {
	        var t = this.game.add.tween(grp);

        	t.to({alpha:0.0}, 2000, Phaser.Easing.Quartic.In);
        	    this.game.titlemusic.stop();
        	    this.game.match_index = 0;
        	    this.game.match = this.game.matches[0];
        		t.onComplete.add(function() { this.game.state.start('MainMenu'); }, this);
        	t.start();
		}, this, 1, 0, 2);
		this.next_btn.alpha = 0;

		grp.add(background);
        grp.add(this.next_btn);
        grp.add(this.text1);
		grp.add(this.text2);

		grp.alpha = 0;

        grp.alpha = 0.0;
		var g2 = this.game.add.tween(grp);
		g2.to({alpha:1.0}, 700, Phaser.Easing.Quartic.In);
	    g2.start(); 

		var t1_tween = this.game.add.tween(this.text1);
		t1_tween.to({alpha:1.0}, 600, Phaser.Easing.Quartic.In, false, 1500);
		t1_tween.onComplete.add(function() {

			var t2_tween = this.game.add.tween(this.text2);
			t2_tween.to({alpha:1.0}, 600, Phaser.Easing.Quartic.In, false, 4000);
			t2_tween.onComplete.add(function() {
				var t3_tween = this.game.add.tween(this.next_btn);
				t3_tween.to({alpha:1.0}, 600, Phaser.Easing.Quartic.In, false, 2000);
				t3_tween.start();
			}, this);
			t2_tween.start();
		}, this);
		t1_tween.start();
    }
};