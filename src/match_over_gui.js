function MatchOverGUI() {
	this.next_btn = null;
};

MatchOverGUI.prototype.generate = function(game) {
	this.next_btn = game.add.button(game.world.centerX - 95, 250, 'button-pause', function() {
		game.match_index++;
		game.match = game.matches[game.match_index];
		game.state.start('Intro');
	}, this, 1, 0, 2);
};