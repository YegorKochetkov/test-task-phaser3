class Tutorial extends Phaser.Scene {
  constructor() {
    super("Tutorial");
  }

  preload() {
    // for scene 1
    this.load.image("girl-joy-dress1", "assets/girl-joy-dress1.png");
    this.load.image("girl-joy-dress2", "assets/girl-joy-dress2.png");

    this.load.image("bag-1", "assets/bag-1.png");
    this.load.image("bag-2", "assets/bag-2.png");

    this.load.image("progressbar-0", "assets/progressbar-empty.png");
    this.load.image("progressbar-1", "assets/progressbar-1.png");
  }

  create() {
    this.nextScene = 1;
    this.gameData = "";

    this.backgroundTint = this.add
      .image(-350, 0, "background-home")
      .setOrigin(0, 0)
      .setTint(0x666666);

    // create talking girl animation from different images
    this.girl = this.add
      .sprite(-30, -230, "girl-surprised")
      .setScale(.55)
      .setOrigin(0,0);
      
    this.girlShy = this.add
      .sprite(110, 32, "girl-shy")
      .setOrigin(0,0)
      .setAlpha(0);
        
    this.tweens.timeline({
      tweens: [{
        targets: this.girl,
        y: -148,
        x: 24,
        scale: .47,
        duration: 400,
        delay: 100,
        onComplete: () => (
          this.girl.setAlpha(0),
          this.girlShy.setAlpha(1)
        )
      }],
    });

    // selection icons appearance
    this.choice1 = this.add
      .image(165, 708, "dress-1")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.choice2 = this.add
      .image(435, 708, "dress-2")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.tweens.timeline({
      tweens: [{
        targets: this.choice1,
        scale: 1,
        duration: 500,
        delay: 100,
      }],
    });

    this.tweens.timeline({
      tweens: [{
        targets: this.choice2,
        scale: 1,
        duration: 500,
        delay: 300,
        onStart: () => this.isShowHint = true,
      }],
    });

    // hint appearance
    this.isShowHint = false;
    this.isHintAnimation = true;

    // tooltip, text and pointer are hidden 
    this.tooltip = this.add
      .image(0, 0, "tooltip")
      .setOrigin(0, 0)
      .setScale(.5);


    this.pointer = this.add
      .image(130, 1200, "pointer")
      .setOrigin(0, 0)
      .setScale(.7);

    this.text = this.add.text(0, 0, "Choose your dress",
    { fontFamily: '"Nunito Sans", "Times New Roman", serif',
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 33,
      letterSpacing: -0.05,
      color: "#ffffff"
    });

    Phaser.Display.Align.In.Center(this.text, this.add.zone(300, -110, 600, 900));
    Phaser.Display.Align.In.Center(this.tooltip, this.add.zone(540, -110, 600, 900));
    
    // action on user`s choice
    this.choice1.setInteractive().on('pointerdown',
      () => this.onChoice(this.choice1));
    this.choice2.setInteractive().on('pointerdown',
      () => this.onChoice(this.choice2));
  }

  update() {
    //show hint
    this.isHintAnimation && this.showHint(this.pointer, this.choice1, this.choice2);
  }

  // action on user`s choice: save choice and start new scene
  onChoice(choice) {
    this.isShowHint = false,
    this.isHintAnimation = false,
    this.pointer.setAlpha(0),
    this.tweens.timeline({
      tweens: [{
        targets: [this.text, this.tooltip],
        y: -110,
        duration: 400,
      }]
    }),
    this.tweens.timeline({
      tweens: [{
        targets: choice,
        scale: .95,
        duration: 200,
        yoyo: true,
        repeat: 0,
        onComplete: () => {
          this.gameData = choice === this.choice1 ? this.gameData + 1 : this.gameData + 2;
          
          return this.scene
          .start("Scene" + this.nextScene, this.gameData)
        }
      }],
    })
  }

  // hint animation
  showHint(...args) {
    if (this.text.y !== 15 && this.isShowHint === true) {
      this.tweens.timeline({
        tweens: [{
          targets: this.text,
          y: 16,
          duration: 200,
          delay: 100,
        }],
      });
    }

    if (this.pointer.y !== 680 && this.isShowHint === true) {
      this.tweens.timeline({
        tweens: [{
          targets: this.pointer,
          y: 680,
          duration: 200,
          delay: 100,
        }],
      });
    }

    if (this.tooltip.y !== 10 && this.isShowHint === true) {
      this.tweens.timeline({
        tweens: [{
          targets: this.tooltip,
          y: 10,
          duration: 200,
          delay: 100,
          onComplete: () => this.isShowHint = false
        }],
      });
    }
  
    if (this.pointer.y === 680 && this.pointer.x === 130) {
      this.tweens.add({
        targets: this.pointer,
        x: 420,
        ease: 'Linear',
        duration: 600,
        repeat: 0,
        delay: 300,
      });
    } else if (this.pointer.x === 420) {
      this.tweens.add({
        targets: this.pointer,
        x: 130,
        ease: 'Linear',
        duration: 600,
        repeat: 0,
        delay: 300,
      });
    }

    if (this.pointer.y === 680 && this.pointer.x === 420) {
      this.tweens.timeline({
        tweens: [{
          targets: this.choice2,
          scale: .95,
          duration: 150,
          repeat: 0,
        }],
      });
    } else {
      this.tweens.timeline({
        tweens: [{
          targets: this.choice2,
          scale: 1,
          duration: 150,
          repeat: 0,
        }],
      });
    }
    
    if (this.pointer.y === 680 && this.pointer.x === 130) {
      this.tweens.timeline({
        tweens: [{
          targets: this.choice1,
          scale: .95,
          duration: 150,
          yoyo: true,
          repeat: 0,
        }],
      });
    } else {
      this.tweens.timeline({
        tweens: [{
          targets: this.choice1,
          scale: 1,
          duration: 150,
          repeat: 0,
        }],
      });
    }
  }
}