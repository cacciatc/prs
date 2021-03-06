var character = function() {
    var health = 100;
    var next_shoot = null;

    return {
        tieShoot:  function(){},
        winShoot:  function(){},
        loseShoot: function(){
            health = health - 20;
        },
        getHealth: function(){
            return health;
        },
        setHealth: function(h) {
        	health = h;
        },
        tell: function(gs) { 
          if (!next_shoot){
            next_shoot = this.nextShoot(gs);
          }
          return next_shoot;
        },
        shoot: function(gs) {
          if (!next_shoot){
            next_shoot = this.nextShoot(gs);
          }

          var result = next_shoot;
          next_shoot = null; // this getter resets its value
          return result;
        },
    }
}

var rockman = function(){
  var c = character();
  c.nextShoot = function(gs) {
    return [ROCK, PAPER, SCISSORS, ROCK, ROCK, ROCK][Math.floor(Math.random() * 6)];
  };
  return c;
};

var scissorman = function(){
  var c = character();
  c.nextShoot = function(gs) {
    return [ROCK, PAPER, SCISSORS, SCISSORS, SCISSORS, SCISSORS][Math.floor(Math.random() * 6)];
  };
  return c;
};

var paperman = function(){
  var c = character();
  c.nextShoot = function(gs) {
    return [ROCK, PAPER, SCISSORS, PAPER, PAPER, PAPER][Math.floor(Math.random() * 6)];
  };
  return c;
};

var archibald = function(){
  var c = character();
  c.nextShoot = function(gs) {
    return [ROCK, PAPER][Math.floor(Math.random() * 2)];
  };
  return c;
};

var marv = function(){
  var c = character();
  c.nextShoot = function(gs) {
    return [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)];
  };
  return c;
};
