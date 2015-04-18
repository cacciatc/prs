var engine = function(game) {
    var hero = game.data.hero;
    var ai   = game.data.ai;

    var roundOver = false;

    startRound = function() {
        if (roundOver) {
            data.ai_shot   = null;
            data.hero_shot = null;
        }
    };

    shoot_ai =    function(move) {
        game.data.ai_shot = move;
        this.shoot_result();
    };

    shoot_user = function(move) {
        game.data.hero_shot = move;
        this.shoot_result();
    };

    shoot_result = function() {
        if (game.data.ai_shot   === null) return;
        if (game.data.hero_shot === null) return;

        // tie game
        if (game.data.ai_shot === game.data.hero_shot) {
            //console.debug(game.data.resultSet);
            game.data.resultSet.push("TIE");
            hero.tieShoot();
            ai.tieShoot();
            roundOver = true;
            return;
        }

        // there is a winner
        var winner = roshambo(game.data.hero_shot, game.data.ai_shot);
        game.data.resultSet.push(winner);

        if (winner === game.data.hero_shot) {
            hero.winShoot();
            ai.loseShoot();
        }
        else
        {
            hero.loseShoot();
            ai.winShoot();
        }

        roundOver = true;
    };

    return {
        shoot_ai:     shoot_ai,
        shoot_user:   shoot_user,
        shoot_result: shoot_result,
        isRoundOver:  function(){ return this.roundOver; },
        startRound: startRound,
    }
}


