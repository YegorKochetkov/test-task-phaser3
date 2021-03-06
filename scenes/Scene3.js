class Scene3 extends Phaser.Scene {
  constructor() {
    super("Scene3");
  }

  init (data) {
    this.gameData = data;
  }

  create() {
    this.nextScene = 4;
  
    // girl change dress at scene start
    if (this.gameData.startsWith("11")) {
      this.girl = this.add
        .sprite(110, 32, "girl-dress1-bag1")
        .setOrigin(0,0)
    } 
    
    if (this.gameData.startsWith("12")) {
      this.girl = this.add
        .sprite(110, 32, "girl-dress1-bag2")
        .setOrigin(0,0)
    }
    
    if (this.gameData.startsWith("21")) {
      this.girl = this.add
        .sprite(110, 32, "girl-dress2-bag1")
        .setOrigin(0,0)
    }
    
    if (this.gameData.startsWith("22")) {
      this.girl = this.add
        .sprite(110, 32, "girl-dress2-bag2")
        .setOrigin(0,0)
    }

    // getting ready to show the selected character
    this.girlInDress1 = this.add
      .sprite(110, 32, "girl-1")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress2 = this.add
      .sprite(110, 32, "girl-2")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress3 = this.add
      .sprite(110, 32, "girl-3")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress4 = this.add
      .sprite(110, 32, "girl-4")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress5 = this.add
      .sprite(110, 32, "girl-5")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress6 = this.add
      .sprite(110, 32, "girl-6")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress7 = this.add
      .sprite(110, 32, "girl-7")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress8 = this.add
      .sprite(110, 32, "girl-8")
      .setOrigin(0,0)
      .setAlpha(0);
    
    // show the girl depending on the player's choice
    switch (true) {
      case this.gameData.startsWith("111"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress1,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("112"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress2,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("121"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress3,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("122"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress4,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("211"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress5,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("212"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress6,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("221"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress7,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("222"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress8,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      default: this.add.text(10, 10, "Something wrong...");
    }

    // selection icons change
    this.prevChoice1 = this.add
      .image(165, 708, "accessory-1")
      .setOrigin(0.5, 0.5);

    this.prevChoice2 = (this.gameData === "211" || this.gameData === "212")
      ? this.add
          .image(435, 708, "accessory-3")
          .setOrigin(0.5, 0.5)
      : this.add
          .image(435, 708, "accessory-2")
          .setOrigin(0.5, 0.5)
    
    this.choice1 = this.add
      .image(165, 708, "beach-2")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.choice2 = this.add
      .image(435, 708, "beach-1")
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

    this.text = this.add.text(300, -110, "Choose your place",
      { fontFamily: '"Nunito Sans", "Times New Roman", serif',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.05,
        color: "#ffffff"
      })
      .setOrigin(0.5, 0.5);
  
    this.progressbar2 = this.add
      .image(300, -50, "progressbar-2")
      .setOrigin(0.5, 0.5);

    this.progressbar3 = this.add
      .image(300, 20, "progressbar-3")
      .setOrigin(0.5, 0.5)
      .setAlpha(0);

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbar2,
        y: 20,
        duration: 400,
        repeat: 0,
        delay: 300,
      }]
    })

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbar2,
        alpha: 0,
        delay: 700,
      }]
    })

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbar3,
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
      this.progressbar3.setAlpha(0);
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