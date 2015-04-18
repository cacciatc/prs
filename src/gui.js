function GUI() {
	this.rock_sprite_btn  	 = null;
	this.paper_sprite_btn 	 = null;
	this.scissors_sprite_btn = null;

	this.hero_portrait		 = null;
	this.hero_portrait_box   = null;
};

/* button positions */
GUI.ROCK_BTN_X 		= 300;
GUI.PAPER_BTN_X 	= 400;
GUI.SCISSORS_BTN_X 	= 500;

GUI.ROCK_BTN_Y 		= 450;
GUI.PAPER_BTN_Y 	= 450;
GUI.SCISSORS_BTN_Y 	= 450;

/* given a game object add gui elements */
GUI.prototype.generate = function(game) {
	/* add button sprites */
	/*
	this.rock_sprite_btn 	 = game.add.sprite(GUI.ROCK_BTN_X, GUI.ROCK_BTN_Y, 'input-buttons', 0);
	this.paper_sprite_btn 	 = game.add.sprite(GUI.PAPER_BTN_X, GUI.PAPER_BTN_Y, 'input-buttons', 1);
	this.scissors_sprite_btn = game.add.sprite(GUI.SCISSORS_BTN_X, GUI.SCISSORS_BTN_Y), 'input-buttons', 2);
	*/

	/* add portraits */

};

/* probably only needed for touch/mouse clicks */
GUI.prototype.update = function() {

};