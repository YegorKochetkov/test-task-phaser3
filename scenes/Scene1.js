class Scene1 extends Phaser.Scene {
  constructor() {
    super("Scene1");
  }

  init (data) {
    this.gameData = data;
  }

  create() {
    this.nextScene = 2;

    // // background smooth clear tint
    // this.background = this.add
    //   .image(-350, -7, "background-home")
    //   .setOrigin(0, 0);

    // this.backgroundTint = this.add
    //   .image(-350, -7, "background-home")
    //   .setOrigin(0, 0)
    //   .setTint(0x666666);

    // this.tweens.timeline({
    //   tweens: [{
    //     targets: [this.backgroundTint],
    //     alpha: 0,
    //     duration: 600,
    //   }],
    // });
  
    // girl change dress at scene start
    this.girl = this.add.sprite(110, 32, "girl-shy")
      .setOrigin(0,0);

    this.girlInDress1 = this.add
      .sprite(110, 32, "girl-joy-dress1")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress2 = this.add
      .sprite(110, 32, "girl-joy-dress2")
      .setOrigin(0,0)
      .setAlpha(0);
    
    // show the girl depending on the player's choice
    if (this.gameData === "1") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress1,
          alpha: 1,
          duration: 300,
        }],
      });
    } else {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress2,
          alpha: 1,
          duration: 300,
        }],
      });
    }

    // selection icons change
    this.prevChoice1 = this.add
      .image(165, 708, "dress-1")
      .setOrigin(0.5, 0.5);

    this.prevChoice2 = this.add
      .image(435, 708, "dress-2")
      .setOrigin(0.5, 0.5);

    this.choice1 = this.add
      .image(165, 708, "bag-1")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.choice2 = this.add
      .image(435, 708, "bag-2")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.tweens.timeline({
      tweens: [{
        targets: [this.prevChoice1, this.prevChoice2],
        scale: 0,
        duration: 100,
      }],
    });
    
    this.tweens.timeline({
      tweens: [{
        targets: [this.choice1, this.choice2],
        scale: 1,
        duration: 500,
        delay: 100,
      }],
    });

    // tooltip and progressbar changing
    this.tooltip = this.add
      .image(300, -110, "tooltip")
      .setOrigin(0.5, 0.5)
      .setScale(.5);

    this.text = this.add.text(300, -110, "Choose your bag",
      { fontFamily: '"Nunito Sans", "Times New Roman", serif',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.05,
        color: "#ffffff"
      })
      .setOrigin(0.5, 0.5);

    this.progressbarEmpty = this.add
      .image(300, -50, "progressbar-0")
      .setOrigin(0.5, 0.5);

    this.progressbar1 = this.add
      .image(300, 20, "progressbar-1")
      .setOrigin(0.5, 0.5)
      .setAlpha(0);

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbarEmpty,
        y: 20,
        duration: 400,
        repeat: 0,
        delay: 300,
      }]
    })

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbarEmpty,
        alpha: 0,
        delay: 700,
      }]
    })

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbar1,
        alpha: 1,
        duration: 300,
        delay: 700,
      }]
    })

    // hint pointer animation
    this.pointer = this.add.image(130, 1200, "pointer");
    this.pointer.setOrigin(0, 0).setScale(.7);
    
    this.showHint = this.scene.get("Tutorial").showHint;

    setTimeout(() => {
      this.progressbar1.setAlpha(0);
      this.isHintAnimation = true;
      this.isShowHint = true;
    }, 2000);

    // action on user`s choice
    this.onChoice = this.scene.get("Tutorial").onChoice;

    this.choice1.setInteractive().on('pointerdown', () => this.onChoice(this.choice1));
    this.choice2.setInteractive().on('pointerdown', () => this.onChoice(this.choice2));
  }

  update() {
    this.isHintAnimation && this.showHint(this.pointer, this.choice1, this.choice2);
  }
}