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

var rockman = function(){
   var c = character();
   c.tell  = function(gs) { return ROCK; }
   c.shoot = function(gs) { return ROCK; }
   return c;
};

var scissorman = function(){
   var c = character();
   c.tell  = function(gs) { return SCISSORS; }
   c.shoot = function(gs) { return SCISSORS; }
   return c;
};

var paperman = function(){
   var c = character();
   c.tell  = function(gs) { return PAPER; }
   c.shoot = function(gs) { return PAPER; }
   return c;
};
