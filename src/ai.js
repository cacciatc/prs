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