var character = function() {
    var health = 100;
    var next_shoot = null;

    return {
        tieShoot:  function(){},
        winShoot:  function(){},
        loseShoot: function(){
            health = health - 15;
        },
        getHealth: function(){
            return health;
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
    return [ROCK, PAPER, SCISSORS, ROCK, ROCK][Math.floor(Math.random() * 5)];
  };
  return c;
};

var scissorman = function(){
  var c = character();
  c.nextShoot = function(gs) {
    return [ROCK, PAPER, SCISSORS, SCISSORS, SCISSORS][Math.floor(Math.random() * 5)];
  };
  return c;
};

var paperman = function(){
  var c = character();
  c.nextShoot = function(gs) {
    return [ROCK, PAPER, SCISSORS, PAPER, PAPER][Math.floor(Math.random() * 5)];
  };
  return c;
};
