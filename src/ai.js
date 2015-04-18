var character = function() {
    var health = 100;

    return {
        tieShoot:  function(){},
        winShoot:  function(){},
        loseShoot: function(){
            this.health = this.health - 15;
        },
        getHealth: function(){
            return this.health;
        }
    }
}

var AI = function(){};

AI.prototype = character();

var rockman = function(){};
rockman.prototype  = AI;
rockman.tell  = function(gs) { return ROCK; }
rockman.shoot = function(gs) { gs.engine.shoot_ai(ROCK); }

var scissorman = function(){};
scissorman.prototype  = AI;
scissorman.tell  = function(gs) { return SCISSORS; }
scissorman.shoot = function(gs) { gs.engine.shoot_ai(SCISSORS); }

var paperman = function(){};
paperman.prototype  = AI;
paperman.tell  = function(gs) { return PAPER; }
paperman.shoot = function(gs) { gs.engine.shoot_ai(PAPER); }