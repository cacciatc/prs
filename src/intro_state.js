PRS.Intro = function(game) {};

PRS.Intro.prototype = {
    create: function() {
        var background = this.game.add.sprite(0, 0, 'background-intro');

        var grp = this.game.add.group();
        var grp2 = this.game.add.group();

        this.hero_name = this.game.add.sprite(90, 330, 'names', 0); 
		this.enemy_name = this.game.add.sprite(800-128-125, 330, 'names', this.game.match.stage);

		this.text1 = this.game.add.sprite(226, 60, this.game.match.text1);
		this.text2 = this.game.add.sprite(226, 260, this.game.match.text2);

		this.text1.alpha = 0;
		this.text2.alpha = 0;

		if(!this.game.titlemusic.isPlaying) {
			this.game.titlemusic.play();
		}

        this.next_btn = this.game.add.button(332, 410, 'button_next', function() {
        	var t2 = this.game.add.tween(this.hero_portrait);
			t2.to({y:-500}, 1000, Phaser.Easing.Quartic.In);
	        t2.start();

	        var t3 = this.game.add.tween(this.enemy_portrait);
			t3.to({y:-500}, 1000, Phaser.Easing.Quartic.In);
	        t3.start();

	        var t4 = this.game.add.tween(this.hero_name);
			t4.to({x:-500}, 800, Phaser.Easing.Quartic.In, false, 200);
	        t4.start();

	        var t5 = this.game.add.tween(this.enemy_name);
			t5.to({x:1300}, 800, Phaser.Easing.Quartic.In, false, 200);
	        t5.start();

	        var t = this.game.add.tween(grp);

        	t.to({alpha:0.0}, 2000, Phaser.Easing.Quartic.In);
        	    this.game.titlemusic.stop();
        		var fight = this.game.add.audio('fight');
        		fight.volume = 0.5;
        		fight.play();
        		t.onComplete.add(function() { this.game.state.start('Game'); }, this);
        	t.start();
		}, this, 1, 0, 2);
		this.next_btn.alpha = 0;

		grp.add(background);
        grp.add(this.next_btn);
        grp.add(this.text1);
		grp.add(this.text2);

        grp2.add(grp);

        this.hero_portrait = this.game.add.sprite(60, 150, 'hero_portrait', 0);
        this.enemy_portrait = this.game.add.sprite(800-128-60, 150, this.game.match.enemy_portrait, 0);

        grp2.add(this.hero_portrait);
        grp2.add(this.enemy_portrait);
        grp2.add(this.hero_name);
        grp2.add(this.enemy_name);

        grp2.alpha = 0.0;
		var t2 = this.game.add.tween(grp2);
		t2.to({alpha:1.0}, 700, Phaser.Easing.Quartic.In);
	    t2.start();

	    var p1_tween = this.game.add.tween(this.enemy_portrait.scale);
		p1_tween
			.to({x:1.1, y:1.1}, 300, Phaser.Easing.Circular.Out, false, 1300)
			.to({x:1.0, y:1.0}, 300, Phaser.Easing.Circular.Out);
		p1_tween.start();

		var t1_tween = this.game.add.tween(this.text1);
		t1_tween.to({alpha:1.0}, 600, Phaser.Easing.Quartic.In, false, 1500);
		t1_tween.onComplete.add(function() {
			var p2_tween = this.game.add.tween(this.hero_portrait.scale);
			p2_tween
				.to({x:1.1, y:1.1}, 300, Phaser.Easing.Circular.Out, false, 3000)
				.to({x:1.0, y:1.0}, 300, Phaser.Easing.Circular.Out);
			p2_tween.start();


			var t2_tween = this.game.add.tween(this.text2);
			t2_tween.to({alpha:1.0}, 600, Phaser.Easing.Quartic.In, false, 3000);
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