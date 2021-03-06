function GUI() {
	this.rock_sprite_btn  	 = null;
	this.paper_sprite_btn 	 = null;
	this.scissors_sprite_btn = null;

	this.hero_portrait		 = null;
	this.hero_portrait_mask  = null;

	this.enemy_portrait		 = null;
	this.enemy_portrait_mask = null;

	this.hero_name 			 = null;
	this.enemy_name			 = null;

	this.stage				 = null;

	this.hero_ouch			 = null;
	this.enemy_ouch			 = null;

	this.enemy_hand			 = null;
	this.hero_hand			 = null;

	this.hero_health		 = null;
	this.enemy_health		 = null;

	this.tink1				 = null;
	this.tink2				 = null;

	this.tie_sound			 = null;

	this.pause				 = null;

	this.r_pressed = false;
	this.s_pressed = false;
	this.p_pressed = false;

	this._shake_tween = null;
	this.shake = function(game, portrait) {
		if(this._shake_tween!= null && this._shake_tween.isRunning)
			return;

		this._shake_tween  = game.add.tween(portrait);

    	this._shake_tween
	    	.to({x:"-10"}, 50, Phaser.Easing.Bounce.InOut)
	    	.to({x:"+20"}, 50, Phaser.Easing.Bounce.InOut)
	    	.to({x:"-20"}, 50, Phaser.Easing.Bounce.InOut)
	    	.to({x:"+20"}, 50, Phaser.Easing.Bounce.InOut)
	    	.to({x:"-20"}, 50, Phaser.Easing.Bounce.InOut)
	    	.to({x:"+10"}, 50, Phaser.Easing.Bounce.InOut)
    		.onComplete.add(function () {
    			portrait.play('normal');
    		}, this);

    	this._shake_tween.start();
	};

	this._shake_enemy_tween = null;
	this.shake_hands = function(game) {
		this._shake_enemy_tween  = game.add.tween(this.enemy_hand);
		this._shake_hero_tween  = game.add.tween(this.hero_hand);

		var tink1 = game.add.audio('tink1');
		var tink2 = game.add.audio('tink2');

		if (Math.random() < 0.5) {
			var tmp = tink1;
			tink1 = tink2;
			tink2 = tmp;
		}

		var hero_hand = this.hero_hand;

		var shake1 = function(tween){
			var r1 = Math.random()*50;
			var r2 = Math.random()*50;
			var r3 = Math.random()*50;

			tween
	    	.to({y:"-" + (30 + r1)}, 70, Phaser.Easing.Circular.In)
	    	.to({y:"+" + (30 + r1)}, 70, Phaser.Easing.Circular.In)
	    	.to({y:"-" + (30 + r2)}, 70, Phaser.Easing.Circular.In, false, 250) // 210 = 70 * 3
	    	.to({y:"+" + (30 + r2)}, 70, Phaser.Easing.Circular.In)
	    	.to({y:"-" + (30 + r3)}, 70, Phaser.Easing.Circular.In, false, 250) // 600 = 70 * 5 + 250
	    	.to({y:"+" + (30 + r3)}, 70, Phaser.Easing.Circular.In); // 920 = 70 * 6 + 250 * 2

			return tween;
		};
		var shake1Sound = function(){
			/* Just play the sound. Timing has to match shake1(); */ 
	    	game.time.events.add(210,  function(){ tink2.play(); });
	    	game.time.events.add(600, function(){ tink1.play(); });
	    	//game.time.events.add(920, function(){ tink1.play(); });
		};

		var shake2 = function(tween){
			var r1 = Math.random()*50;
			var r2 = Math.random()*50;
			var r3 = Math.random()*50;
			tween
	    	.to({y:"-" + (30 + r1)}, 100, Phaser.Easing.Circular.In)
	    	.to({y:"+" + (30 + r1)}, 100, Phaser.Easing.Circular.In)
	    	.to({y:"-" + (30 + r2)}, 100, Phaser.Easing.Circular.In, false, 500)
	    	.to({y:"+" + (30 + r2)}, 100, Phaser.Easing.Circular.In)
	    	.to({y:"-" + (30 + r3)}, 100, Phaser.Easing.Circular.In, false, 500)
	    	.to({y:"+" + (30 + r3)}, 100, Phaser.Easing.Circular.In);
			return tween;
		};

		shake1Sound();
    	shake1(this._shake_enemy_tween).start();
    	shake1(this._shake_hero_tween).start();

    	return this._shake_enemy_tween;
	};

	this.hurt_portrait = function(game, portrait) {
		/* change face */
		portrait.play('hurt', 1, false);

		/* shake portrait for 3 sec */
		this.shake(game, portrait);
	};

	this._health_tween = null;
	this.reduce_health = function(game, health, amt) {
		if(this._health_tween!= null && this._health_tween.isRunning)
			return;

		this._health_tween = game.add.tween(health);

		var per = amt/100;
		if(per > 1) {
			per = 1;
		}
		else if(per < 0) {
			per = 0;
		}

		this._health_tween.to({width:per}, 500, Phaser.Easing.Elastic.Out);
		this._health_tween.start();
	};
};

/* button positions */
GUI.ROCK_BTN_X 		= 220;
GUI.PAPER_BTN_X 	= 354;
GUI.SCISSORS_BTN_X 	= 485;

GUI.ROCK_BTN_Y 		= 430;
GUI.PAPER_BTN_Y 	= 430;
GUI.SCISSORS_BTN_Y 	= 430;

/* portrait positions */
GUI.HERO_AVATAR_X = 20;
GUI.HERO_AVATAR_Y = 5;

GUI.ENEMY_AVATAR_X = 650;
GUI.ENEMY_AVATAR_Y = 5;

/* combatant names */
GUI.HERO_NAME_X = 160;
GUI.HERO_NAME_Y = 63;
GUI.HERO_NAME 	= "SLATER";

GUI.ENEMY_NAME_X = 600;
GUI.ENEMY_NAME_Y = 63;

GUI.STAGE_X 	 = 363;
GUI.STAGE_Y		 = 0;

GUI.ENEMY_HAND_X = 420;
GUI.ENEMY_HAND_Y = 200;

GUI.HERO_HEALTH_X = 161;
GUI.HERO_HEALTH_Y = 34;

GUI.ENEMY_HEALTH_X = 461;
GUI.ENEMY_HEALTH_Y = 34;

GUI.PAUSE_X = 15;
GUI.PAUSE_Y = 450;

/* given a game object add gui elements */
GUI.prototype.generate = function(game, match, data) {
	/* add button sprites */
	this.rock_sprite_btn = game.add.button(GUI.ROCK_BTN_X, GUI.ROCK_BTN_Y, 'button_rock', function() {
		this.r_pressed = true;
	}, this, 1, 0, 2);

	this.paper_sprite_btn = game.add.button(GUI.PAPER_BTN_X, GUI.PAPER_BTN_Y, 'button_paper', function() {
		this.p_pressed = true;
	}, this, 1, 0, 2);

	this.scissor_sprite_btn = game.add.button(GUI.SCISSORS_BTN_X, GUI.SCISSORS_BTN_Y, 'button_scissor', function() {
		this.s_pressed = true;
	}, this, 1, 0, 2);

	/* add portraits */
	this.hero_portrait = game.add.sprite(GUI.HERO_AVATAR_X, -500, 'hero_portrait', 0);

	this.hero_portrait.animations.add('normal',[0]);
	this.hero_portrait.animations.add('hurt',  [1]);

	this.enemy_portrait = game.add.sprite(GUI.ENEMY_AVATAR_X, -500, match.enemy_portrait, 0);

	this.enemy_portrait.animations.add('normal',[0]);
	this.enemy_portrait.animations.add('hurt',  [1]);

	var t2 = game.add.tween(this.hero_portrait);
	t2.to({y:GUI.HERO_AVATAR_Y}, 2000, Phaser.Easing.Quartic.Out);
    t2.start();

    var t3 = game.add.tween(this.enemy_portrait);
	t3.to({y:GUI.ENEMY_AVATAR_Y}, 2000, Phaser.Easing.Quartic.Out);
    t3.start();

	this.hero_name = game.add.sprite(GUI.HERO_NAME_X, GUI.HERO_NAME_Y, 'names', 0); 
	this.enemy_name = game.add.sprite(GUI.ENEMY_NAME_X, GUI.ENEMY_NAME_Y, 'names', match.stage);

	var tmpx = GUI.ENEMY_AVATAR_X - this.enemy_name.width - 20;
	this.enemy_name.x = tmpx;

	this.stage = game.add.sprite(GUI.STAGE_X, GUI.STAGE_Y, 'stage-markers', match.stage - 1);

	this.hero_ouch  = game.add.audio('slater_ow');
	this.enemy_ouch = game.add.audio(match.enemy_ouch);

	this.tink 		= game.add.audio('tink');

	/* hands */
	this.enemy_hand = game.add.sprite(GUI.ENEMY_HAND_X, GUI.ENEMY_HAND_Y, match.enemy_hand, 0);
	this.enemy_hand.animations.add('rock', [0]);
	this.enemy_hand.animations.add('paper', [1]);
	this.enemy_hand.animations.add('scissors', [2]);

	this.hero_hand = game.add.sprite(0, 200, 'slater_hand', 0);
	this.hero_hand.animations.add('rock', [0]);
	this.hero_hand.animations.add('paper', [1]);
	this.hero_hand.animations.add('scissors', [2]);

	/* health bars */
	this.hero_health = game.add.graphics(GUI.HERO_HEALTH_X, GUI.HERO_HEALTH_Y);
	this.hero_health.beginFill(0x38b449);
	this.hero_health.drawRect(0, 0, 176, 21);

	this.enemy_health = game.add.graphics(GUI.ENEMY_HEALTH_X, GUI.ENEMY_HEALTH_Y);
	this.enemy_health.beginFill(0x38b449);
	this.enemy_health.drawRect(0, 0, 176, 21);

	this.pause = game.add.button(GUI.PAUSE_X, GUI.PAUSE_Y, 'button-pause', function() {
		game.is_paused = !game.is_paused;
	}, this, 1, 0, 2);

	data.everything.add(this.enemy_hand);
	data.everything.add(this.hero_hand);
	data.everything.add(this.hero_health);
	data.everything.add(this.enemy_health);

	this.tie_sound = game.add.audio("tie");
};

GUI.prototype.win_hero = function(game) {
	game.time.events.add(600,  function() {
		this.enemy_portrait.play('hurt', 1, false);
    }, this);
};
GUI.prototype.win_enemy = function(game) {
	game.time.events.add(600,  function() {
		this.hero_portrait.play('hurt', 1, true);
    }, this);
};

/* called when hero loses a round */
GUI.prototype.hurt_hero = function(game, amt) {
	this.hurt_portrait(game, this.hero_portrait);
	if(this.hero_ouch != null && !this.hero_ouch.isPlaying)
		this.hero_ouch.play();

	this.reduce_health(game, this.hero_health, amt);
};

/* called when hero loses a round */
GUI.prototype.hurt_enemy = function(game, amt) {
	this.hurt_portrait(game, this.enemy_portrait);
	if(this.enemy_ouch != null && !this.enemy_ouch.isPlaying)
		this.enemy_ouch.play();

	this.reduce_health(game, this.enemy_health, amt)
};

/* called to start the reveal */
GUI.prototype.reveal = function(game) {
	/* end the waiting tweens */

	return this.shake_hands(game);
};

/* called when there is a tie */
GUI.prototype.tie = function(game) {
	this.hero_portrait.play('hurt', 1, false);
	this.enemy_portrait.play('hurt', 1, false);

   game.time.events.add(1500,  function() {
    	this.hero_portrait.play('normal', 1, false);
		this.enemy_portrait.play('normal', 1, false);
    }, this);

 	this.tie_sound.play();
};

/* probably only needed for touch/mouse clicks */
GUI.prototype.update = function() {

};

GUI.prototype.hero_hand_anim = function(move) {
	var a = "";
	if(move == ROCK) {
		a = "rock";
	}
	else if(move == PAPER) {
		a = "paper";
	}
	else if(move == SCISSORS) {
		a = "scissors";
	}
	this.hero_hand.play(a);
};

GUI.prototype.enemy_hand_anim = function(move) {
	var a = "";
	if(move == ROCK) {
		a = "rock";
	}
	else if(move == PAPER) {
		a = "paper";
	}
	else if(move == SCISSORS) {
		a = "scissors";
	}
	this.enemy_hand.play(a);
};

GUI.prototype.rock_pressed = function() {
	var tmp = this.r_pressed;
	this.r_pressed = false;
	return tmp;
};

GUI.prototype.scissors_pressed = function() {
	var tmp = this.s_pressed;
	this.s_pressed = false;
	return tmp;
};

GUI.prototype.paper_pressed = function() {
	var tmp = this.p_pressed;
	this.p_pressed = false;
	return tmp;
};
