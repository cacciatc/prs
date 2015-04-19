function GUI() {
	this.rock_sprite_btn  	 = null;
	this.paper_sprite_btn 	 = null;
	this.scissors_sprite_btn = null;

	this.hero_portrait		 = null;
	this.hero_portrait_box   = null;
	this.hero_portrait_mask  = null;

	this.enemy_portrait		 = null;
	this.enemy_portrait_box  = null;
	this.enemy_portrait_mask = null;

	this.hero_name 			 = null;
	this.enemy_name			 = null;

	this.stage				 = null;

	this.hero_ouch			 = null;
	this.enemy_ouch			 = null;

	this.enemy_hand			 = null;

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

    	this._shake_enemy_tween
	    	.to({y:"-30"}, 100, Phaser.Easing.Circular.In)
	    	.to({y:"+30"}, 100, Phaser.Easing.Circular.In)
	    	.to({y:"-30"}, 100, Phaser.Easing.Circular.In, false, 500)
	    	.to({y:"+30"}, 100, Phaser.Easing.Circular.In)
	    	.to({y:"-30"}, 100, Phaser.Easing.Circular.In, false, 500)
	    	.to({y:"+30"}, 100, Phaser.Easing.Circular.In);

    	this._shake_enemy_tween.start();
	};

	this.hurt_portrait = function(game, portrait) {
		/* change face */
		portrait.play('hurt', 1, false);

		/* shake portrait for 3 sec */
		this.shake(game, portrait);
	};
};

/* button positions */
GUI.ROCK_BTN_X 		= 300;
GUI.PAPER_BTN_X 	= 400;
GUI.SCISSORS_BTN_X 	= 500;

GUI.ROCK_BTN_Y 		= 450;
GUI.PAPER_BTN_Y 	= 450;
GUI.SCISSORS_BTN_Y 	= 450;

/* portrait positions */
GUI.HERO_AVATAR_X = 20;
GUI.HERO_AVATAR_Y = 5;

GUI.ENEMY_AVATAR_X = 640;
GUI.ENEMY_AVATAR_Y = 5;

/* combatant names */
GUI.HERO_NAME_X = 160;
GUI.HERO_NAME_Y = 63;
GUI.HERO_NAME 	= "MURRAY";

GUI.ENEMY_NAME_X = 600 - 60;
GUI.ENEMY_NAME_Y = 63;

GUI.STAGE_X 	 = 390;
GUI.STAGE_Y		 = 5;

GUI.ENEMY_HAND_X = 420;
GUI.ENEMY_HAND_Y = 200;

/* given a game object add gui elements */
GUI.prototype.generate = function(game, match) {
	/* add button sprites */
	/*
	this.rock_sprite_btn 	 = game.add.sprite(GUI.ROCK_BTN_X, GUI.ROCK_BTN_Y, 'input_buttons', 0);
	this.paper_sprite_btn 	 = game.add.sprite(GUI.PAPER_BTN_X, GUI.PAPER_BTN_Y, 'input_buttons', 1);
	this.scissors_sprite_btn = game.add.sprite(GUI.SCISSORS_BTN_X, GUI.SCISSORS_BTN_Y), 'input_buttons', 2);
	*/

	/* add portraits */
	this.hero_portrait_box  = game.add.sprite(GUI.HERO_AVATAR_X, GUI.HERO_AVATAR_Y, 'hero_portrait_box');
	this.hero_portrait 	    = game.add.sprite(GUI.HERO_AVATAR_X, GUI.HERO_AVATAR_Y, 'hero_portrait', 0);

	/* setup mask */
	this.hero_portrait_mask = game.add.graphics(GUI.HERO_AVATAR_X, GUI.HERO_AVATAR_Y);
    this.hero_portrait_mask.beginFill(0xffffff);
    this.hero_portrait_mask.drawRect(5, 5, 160, 300);

    this.hero_portrait.mask = this.hero_portrait_mask; 

	this.hero_portrait.animations.add('normal',[0]);
	this.hero_portrait.animations.add('hurt',  [0]);

	this.enemy_portrait_box = game.add.sprite(GUI.ENEMY_AVATAR_X, GUI.ENEMY_AVATAR_Y, match.enemy_portrait_box);
	this.enemy_portrait 	= game.add.sprite(GUI.ENEMY_AVATAR_X, GUI.ENEMY_AVATAR_Y, match.enemy_portrait, 0);

	/* setup mask */
	this.enemy_portrait_mask = game.add.graphics(GUI.ENEMY_AVATAR_X, GUI.ENEMY_AVATAR_Y);
    this.enemy_portrait_mask.beginFill(0xffffff);
    this.enemy_portrait_mask.drawRect(5, 5, 160, 300);

    this.enemy_portrait.mask = this.enemy_portrait_mask;

	this.enemy_portrait.animations.add('normal',[0]);
	this.enemy_portrait.animations.add('hurt',  [1]);

	/* add combatant names */
	var name_style = { font: "34px Amatic SC", fill: "#ffffff", align: "center" };

	this.hero_name = game.add.text(GUI.HERO_NAME_X, GUI.HERO_NAME_Y, GUI.HERO_NAME, name_style);
	this.hero_name = game.add.text(GUI.ENEMY_NAME_X, GUI.ENEMY_NAME_Y, match.enemy_name, name_style);

	/* add stage text */
	var stage_style = { font: "55px Amatic SC", fill: "#ffffff", align: "center" };

	this.stage = game.add.text(GUI.STAGE_X, GUI.STAGE_Y, match.stage, stage_style);

	this.hero_ouch  = game.add.audio('murray_ow');
	this.enemy_ouch = game.add.audio(match.enemy_ouch);

	/* hands */
	this.enemy_hand = game.add.sprite(GUI.ENEMY_HAND_X, GUI.ENEMY_HAND_Y, 'hand', 0);

	/* shouldn't have to be scaled in the end */
	this.hero_portrait_box.scale.x = 0.35;
	this.hero_portrait_box.scale.y = 0.35;

	this.hero_portrait.scale.x = 0.35;
	this.hero_portrait.scale.y = 0.35;

	this.enemy_portrait_box.scale.x = 0.35;
	this.enemy_portrait_box.scale.y = 0.35;

	this.enemy_portrait.scale.x = 0.35;
	this.enemy_portrait.scale.y = 0.35;
};

/* called when hero loses a round */
GUI.prototype.hurt_hero = function(game) {
	this.hurt_portrait(game, this.hero_portrait);
	if(this.hero_ouch != null && !this.hero_ouch.isPlaying)
		this.hero_ouch.play();
};

/* called when hero loses a round */
GUI.prototype.hurt_enemy = function(game) {
	this.hurt_portrait(game, this.enemy_portrait);
	if(this.enemy_ouch != null && !this.enemy_ouch.isPlaying)
		this.enemy_ouch.play();
};

/* called to start the reveal */
GUI.prototype.reveal = function(game) {
	//game.add.tween(this.enemy_hand).to( { y: "-100", x:"50" }, 2000, Phaser.Easing.Linear.None, true);
	//game.add.tween(this.enemy_hand).to( { angle: 45 }, 2000, Phaser.Easing.Linear.None, true);
	this.shake_hands(game);
};

/* called when there is a tie */
GUI.prototype.tie = function(game) {
	this.hero_portrait.play('hurt', 1, false);
	this.enemy_portrait.play('hurt', 1, false);

   game.time.events.add(2000,  function() {
    	this.hero_portrait.play('normal', 1, false);
		this.enemy_portrait.play('normal', 1, false);
    }, this);
};

/* probably only needed for touch/mouse clicks */
GUI.prototype.update = function() {

};