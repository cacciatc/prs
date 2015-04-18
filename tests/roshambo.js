describe('roshambo is the engine that decides matches', function(){
    it('should choose the right winners', function(){
        expect(roshambo(ROCK, SCISSORS)     === ROCK);
        expect(roshambo(ROCK, PAPER)        === PAPER);
        expect(roshambo(ROCK, ROCK)         === ROCK);
        expect(roshambo(SCISSORS, SCISSORS) === SCISSORS);
        expect(roshambo(SCISSORS, PAPER)    === SCISSORS);
        expect(roshambo(SCISSORS, ROCK)     === ROCK);
        expect(roshambo(PAPER, SCISSORS)    === SCISSORS);
        expect(roshambo(PAPER, PAPER)       === PAPER);
        expect(roshambo(PAPER, ROCK)        === PAPER);
    });
});