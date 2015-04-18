// AI interface
// factory methods
// next_move(game_state)
// next_tell(game_state)

var character = function() {
    return {
        tieShoot:  function(){},
        winShoot:  function(){},
        loseShoot: function(){},
    }
}

var AI = function(){};

AI.prototype = character();

var rockman = function(){};
rockman.prototype  = AI;
rockman.tell  = function(gs) { return ROCK; }
rockman.shoot = function(gs) { gs.engine.shoot_ai(ROCK); }