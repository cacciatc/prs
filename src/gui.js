function GUI() {
	this.rock_sprite_btn  	 = null;
	this.paper_sprite_btn 	 = null;
	this.scissors_sprite_btn = null;

	this.hero_portrait		 = null;
	this.hero_portrait_box   = null;

	this.enemy_portrait		 = null;
	this.enemy_portrait_box  = null;
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
GUI.HERO_AVATAR_Y = 20;

GUI.ENEMY_AVATAR_X = 600;
GUI.ENEMY_AVATAR_Y = 20;

/* given a game object add gui elements */
GUI.prototype.generate = function(game, match) {
	/* add button sprites */
	/*
	this.rock_sprite_btn 	 = game.add.sprite(GUI.ROCK_BTN_X, GUI.ROCK_BTN_Y, 'input_buttons', 0);
	this.paper_sprite_btn 	 = game.add.sprite(GUI.PAPER_BTN_X, GUI.PAPER_BTN_Y, 'input_buttons', 1);
	this.scissors_sprite_btn = game.add.sprite(GUI.SCISSORS_BTN_X, GUI.SCISSORS_BTN_Y), 'input_buttons', 2);
	*/

	/* add portraits */
	this.hero_portrait_box = game.add.sprite(GUI.HERO_AVATAR_Y, GUI.HERO_AVATAR_X, 'hero_portrait_box');
	this.hero_portrait 	   = game.add.sprite(GUI.HERO_AVATAR_Y, GUI.HERO_AVATAR_X, 'hero_portrait');

	this.enemy_portrait_box = game.add.sprite(GUI.ENEMY_AVATAR_X, GUI.ENEMY_AVATAR_Y, match.enemy_portrait_box);
	this.enemy_portrait 	= game.add.sprite(GUI.ENEMY_AVATAR_X, GUI.ENEMY_AVATAR_Y, match.enemy_portrait);

	/* shouldn't have to be scaled in the end */
	this.hero_portrait_box.scale.x = 0.5;
	this.hero_portrait_box.scale.y = 0.5;

	this.hero_portrait.scale.x = 0.5;
	this.hero_portrait.scale.y = 0.5;

	this.enemy_portrait_box.scale.x = 0.5;
	this.enemy_portrait_box.scale.y = 0.5;

	this.enemy_portrait.scale.x = 0.5;
	this.enemy_portrait.scale.y = 0.5;
};

/* called when hero loses a round */
GUI.prototype.hurt_hero = function() {

};

/* called when hero loses a round */
GUI.prototype.hurt_enemy = function() {

};

/* probably only needed for touch/mouse clicks */
GUI.prototype.update = function() {

};