function MatchOverGUI() {
	this.next_btn = null;
};

MatchOverGUI.prototype.generate = function(game, retry) {
	var btn = retry ? 'button_retry' : 'button_next';

	this.next_btn = game.add.button(game.world.centerX - (131/2), 150, btn, function() {
		if(retry) {
			game.state.start('Game');
		}
		else {
			game.match_index++;
			game.match = game.matches[game.match_index];
			game.state.start('Intro');
		}
	}, this, 1, 0, 2);
};