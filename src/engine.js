var engine = function(game) {
    var hero = game.data.hero;
    var ai   = game.data.ai;

    var roundOver = true;
    var roundWinner = '';

    startRound = function() {
        if (roundOver) {
            game.data.ai_shot   = null;
            game.data.hero_shot = null;
            roundOver = false;
        }
    };

    shoot_ai = function(move) {
        game.data.ai_shot = move;
        this.shoot_result();
    };

    shoot_user = function(move) {
        game.data.hero_shot = move;
        this.shoot_result();
    };

    shoot_result = function() {
        if (game.data.ai_shot   == null) return;
        if (game.data.hero_shot == null) return;

        // tie game
        if (game.data.ai_shot === game.data.hero_shot) {
            //console.debug(game.data.resultSet);
            game.data.resultSet.push("TIE");
            this.roundWinner = "TIE";
            hero.tieShoot();
            ai.tieShoot();
        }
        else
        {
            // there is a winner
            var winner = roshambo(game.data.hero_shot, game.data.ai_shot);
            game.data.resultSet.push(winner);

            if (winner === game.data.hero_shot) {
                hero.winShoot();
                this.roundWinner = "HERO";
                ai.loseShoot();
            }
            else
            {
                hero.loseShoot();
                this.roundWinner = "AI";
                ai.winShoot();
            }
        }

        roundOver = true;

        //console.log("roundOver: " + roundOver);
        //console.log(hero);
        //console.log(hero.getHealth);
        //console.log(hero.getHealth());
        //console.log("winner: " + this.roundWinner);
        console.log("Hero: " + hero.getHealth());
        console.log("AI: " + ai.getHealth());
        
    };

    return {
        shoot_ai:     shoot_ai,
        shoot_user:   shoot_user,
        shoot_result: shoot_result,
        hasRoundStarted: function(){ return !roundOver; },
        hasRoundEnded:   function(){ return roundOver; },
        startRound:   startRound,
    }
}


