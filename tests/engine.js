describe('engine watches each round and updates the game accordingly', function(){
    
    var dummyHero = new character();
    var dummyAI   = new AI();
    var dummyGame = {
        data: {
            hero: dummyHero,
            ai:   dummyAI,
        }
    };
    
    it('accepts a Game', function(){
        var e = engine(dummyGame);
    });

    it('handles ties', function(){
        spyOn(dummyHero.tieShoot);
        spyOn(dummyAI.tieShoot);

        var e = engine(dummyGame);
        e.shoot_ai(ROCK);
        e.shoot_user(ROCK);

    });

});