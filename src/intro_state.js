PRS.Intro = function(game) {};
PRS.Intro.prototype = {
    create: function() {
        console.log("In intro");

        var background = this.game.add.sprite(0, 0, 'background');

        var grp = this.game.add.group();

        this.next_btn = this.game.add.button(350, 250, 'button-pause', function() {
        	var t2 = this.game.add.tween(this.hero_portrait);
			t2.to({y:-500}, 1000, Phaser.Easing.Quartic.In);
	        t2.start();

	        var t3 = this.game.add.tween(this.enemy_portrait);
			t3.to({y:-500}, 1000, Phaser.Easing.Quartic.In);
	        t3.start();

	        var t = this.game.add.tween(grp);

        	t.to({alpha:0.0}, 2000, Phaser.Easing.Quartic.In);
        		t.onComplete.add(function() { this.game.state.start('Game'); }, this);
        	t.start();
		}, this, 1, 0, 2);

		grp.add(background);
        grp.add(this.next_btn);

        this.hero_portrait = this.game.add.sprite(60, 150, 'hero_portrait', 0);
        this.enemy_portrait = this.game.add.sprite(800-128-60, 150, this.game.match.enemy_portrait, 0);

        // access match assets to display different text
        //this.game.state.start('Game');
    }
};