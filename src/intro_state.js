PRS.Intro = function(game) {};

PRS.Intro.prototype = {
    create: function() {
        console.log("In intro");

        var background = this.game.add.sprite(0, 0, 'background-intro');

        var grp = this.game.add.group();

        this.hero_name = this.game.add.sprite(90, 330, 'names', 0); 
		this.enemy_name = this.game.add.sprite(800-128-125, 330, 'names', this.game.match.stage);

        this.next_btn = this.game.add.button(332, 410, 'button_next', function() {
        	var t2 = this.game.add.tween(this.hero_portrait);
			t2.to({y:-500}, 1000, Phaser.Easing.Quartic.In);
	        t2.start();

	        var t3 = this.game.add.tween(this.enemy_portrait);
			t3.to({y:-500}, 1000, Phaser.Easing.Quartic.In);
	        t3.start();

	        var t4 = this.game.add.tween(this.hero_name);
			t4.to({x:-500}, 800, Phaser.Easing.Quartic.In, false, 200);
	        t4.start();

	        var t5 = this.game.add.tween(this.enemy_name);
			t5.to({x:1300}, 800, Phaser.Easing.Quartic.In, false, 200);
	        t5.start();

	        var t = this.game.add.tween(grp);

        	t.to({alpha:0.0}, 2000, Phaser.Easing.Quartic.In);
        		var fight = this.game.add.audio('fight');
        		fight.play();
        		t.onComplete.add(function() { this.game.state.start('Game'); }, this);
        	t.start();
		}, this, 1, 0, 2);

		grp.add(background);
        grp.add(this.next_btn);

        this.hero_portrait = this.game.add.sprite(60, 150, 'hero_portrait', 0);
        this.enemy_portrait = this.game.add.sprite(800-128-60, 150, this.game.match.enemy_portrait, 0);

        this.dialog = this.game.add.text(
            250, 
            400,
            this.dialog[this.game.match_index],
            {
                font: "24px monospace", 
                fill: "#ffffff", 
                align: "justify",
                wordWrap: true, 
                wordWrapWidth: 300
            }
        );
        var dialog_mask = this.game.add.graphics(250,50).beginFill(0xffffff).drawRect(0,0,300,383);
        this.dialog.mask = dialog_mask;

        var dialog_tween = this.game.add.tween(this.dialog);
        dialog_tween.to({y: 1-this.dialog.height}, 30000);
        dialog_tween.start();

        // access match assets to display different text
        //this.game.state.start('Game');
    }
};

PRS.Intro.prototype.dialog = [
  "Srg. Butterball:\n\nSo yer finally here! I know what yer after MAGGOT!! If you " +
  "think you can get yer filthy hands on the scroll, you got another thing " +
  "comin! You probably thought this would be EASY huh?! Well I’ve got some news " +
  "for you soldier!! I’M WHAT THE ROCK’S COOKING!!! HA! GET IT?! ROCKS?!\n\n" +
  "Slater:\n\nWhy are you yelling? I’m right in front of you... Jeez… Let’s just " +
  "get this over with…",
  
  "Papa Papyrus:\n\nHmm… What a strappin young lad… Back ‘n my day we didn’t have any of this " +
  "new-fangled te’nology. Just paper! Maybe crayons if you were lucky… But look at " +
  "you! Playin your vidya games and making your ludum dares. Why not ludum truths ey?! " +
  "I’ll show ya some truths!\n\n" +
  "Slater:\n\nMy eyes… You’re so pasty. Just get out of my way old man… I’ll make this fast.",
  
  "scissors one",
  "no scissors guy",
  "hard boss",
];