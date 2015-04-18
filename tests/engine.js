describe('engine watches each round and updates the game accordingly', function(){
    
    var dummyHero = {};
    var dummyAI   = {};
    var dummyGame = {};

    beforeEach(function(){
        dummyHero = new character();

        dummyAI   = new AI();

        dummyGame = {
            data: {
                resultSet: [],
                hero: dummyHero,
                ai:   dummyAI,
            }
        };

        spyOn(dummyHero, 'tieShoot');
        spyOn(dummyAI,   'tieShoot');
        spyOn(dummyHero, 'winShoot');
        spyOn(dummyAI,   'winShoot');
        spyOn(dummyHero, 'loseShoot');
        spyOn(dummyAI,   'loseShoot');
    });
    
    it('accepts a Game', function(){
        var e = engine(dummyGame);
    });

    it('handles ties', function(){
        var e = engine(dummyGame);
        e.shoot_ai(ROCK);
        e.shoot_user(ROCK);

        expect(dummyHero.tieShoot).toHaveBeenCalled();
        expect(dummyAI.tieShoot).toHaveBeenCalled();
    });

    it('handles hero wins', function(){
        var e = engine(dummyGame);
        e.shoot_ai(ROCK);
        e.shoot_user(PAPER);

        expect(dummyHero.winShoot).toHaveBeenCalled();
        expect(dummyAI.loseShoot).toHaveBeenCalled();
    });

    it('handles hero losses', function(){
        var e = engine(dummyGame);
        e.shoot_ai(SCISSORS);
        e.shoot_user(PAPER);

        expect(dummyHero.loseShoot).toHaveBeenCalled();
        expect(dummyAI.winShoot).toHaveBeenCalled();

        expect(dummyHero.winShoot).not.toHaveBeenCalled();
        expect(dummyAI.loseShoot).not.toHaveBeenCalled();
    });

    it('handles Round State', function(){
        var e = engine(dummyGame);
        expect(e.isRoundOver() == false);
        e.shoot_ai(ROCK);
        e.shoot_user(ROCK);
        expect(e.isRoundOver() == true);

    });
});