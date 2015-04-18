describe('character', function(){
    it('should maintain its own health', function(){
        var c = new character();

        // characters always start with 100 health
        expect(c.getHealth() == 100);

        c.loseShoot();

        // default losing the shoot causes 15 dmg.
        // The number is not important, so long as dmg >= 1.
        expect(c.getHealth() < 100);
    });

    it('should be extensible', function(){
        var c = new rockman();

        // characters always start with 100 health
        expect(c.getHealth() == 100);

        c.loseShoot();

        // default losing the shoot causes 15 dmg.
        // The number is not important, so long as dmg >= 1.
        expect(c.getHealth() < 100);
    });
});