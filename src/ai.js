// AI interface
// factory methods
// next_move(game_state)
// next_tell(game_state)

function AI() {

};

AI.ROCK  	= 1;
AI.PAPER 	= 2;
AI.SCISSORS = 3;

AI.create_rockman = function() {
	var ai = new AI();

	// setup ai here
	return ai;
};

/* returns the next move given game state gs */
AI.prototype.next_move = function(gs) {
	return AI.ROCK;
};

/* returns the next tell given game state gs */
AI.prototype.next_tell = function(gs) {
	return AI.ROCK;
};