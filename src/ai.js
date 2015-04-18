var character = function() {
    var health = 100;

    return {
        tieShoot:  function(){},
        winShoot:  function(){},
        loseShoot: function(){
            health = health - 15;
        },
        getHealth: function(){
            return health;
        }
    }
}

var rockman = function(){};
rockman.prototype  = character();
rockman.prototype.tell  = function(gs) { return ROCK; }
rockman.prototype.shoot = function(gs) { return ROCK; }

var scissorman = function(){};
scissorman.prototype  = character();
scissorman.prototype.tell  = function(gs) { return SCISSORS; }
scissorman.prototype.shoot = function(gs) { return SCISSORS; }

var paperman = function(){};
paperman.prototype  = character();
paperman.prototype.tell  = function(gs) { return PAPER; }
paperman.prototype.shoot = function(gs) { return PAPER; }