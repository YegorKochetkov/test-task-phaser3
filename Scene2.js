class Scene2 extends Phaser.Scene {
  constructor() {
    super("Scene2");
  }

  init (data) {
    this.gameData = data;
  }

  preload() { 
    //scene 3
    this.load.image("girl-1", "assets/girl-dress1-bag1-accessory1.png");
    this.load.image("girl-2", "assets/girl-dress1-bag1-accessory2.png");
    this.load.image("girl-3", "assets/girl-dress1-bag2-accessory1.png");
    this.load.image("girl-4", "assets/girl-dress1-bag2-accessory2.png");
    this.load.image("girl-5", "assets/girl-dress2-bag1-accessory1.png");
    this.load.image("girl-6", "assets/girl-dress2-bag1-accessory2.png");
    this.load.image("girl-7", "assets/girl-dress2-bag2-accessory1.png");
    this.load.image("girl-8", "assets/girl-dress2-bag2-accessory2.png");

    this.load.image("beach-1", "assets/beach-1.png");
    this.load.image("beach-2", "assets/beach-2.png");

    this.load.image("progressbar-3", "assets/progressbar-3.png");
    this.load.image("progressbar-3", "assets/progressbar-3.png");
  }

  create() {
    this.nextScene = 3;

    this.background = this.add
      .image(-350, -7, "background-home")
      .setOrigin(0, 0);
  
    // girl change dress at scene start
    this.girl = this.gameData.startsWith("1")
      ? this.add
          .sprite(110, 32, "girl-joy-dress1")
          .setOrigin(0,0)
      : this.add
          .sprite(110, 32, "girl-joy-dress2")
          .setOrigin(0,0);

    // getting ready to show the selected character
    this.girlInDress1 = this.add
      .sprite(110, 32, "girl-dress1-bag1")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress2 = this.add
      .sprite(110, 32, "girl-dress1-bag2")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress3 = this.add
      .sprite(110, 32, "girl-dress2-bag1")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress4 = this.add
      .sprite(110, 32, "girl-dress2-bag2")
      .setOrigin(0,0)
      .setAlpha(0);
        
    // show the girl depending on the player's choice
    // show the girl depending on the player's choice
    switch (true) {
      case this.gameData.startsWith("11"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress1,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("21"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress3,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      case this.gameData.startsWith("22"):
        this.tweens.timeline({
          tweens: [{
            targets: this.girlInDress4,
            alpha: 1,
            duration: 300,
          }],
        });
      break;

      default: this.add.text(10, 10, "Something wrong...");
    }

    // selection icons change
    this.prevChoice1 = this.add
      .image(165, 708, "bag-1")
      .setOrigin(0.5, 0.5);

    this.prevChoice2 = this.add
      .image(435, 708, "bag-2")
      .setOrigin(0.5, 0.5);

    this.choice1 = this.add
      .image(165, 708, "accessory-1")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.choice2 = this.gameData[0] === "2" 
      ? this.add
          .image(435, 708, "accessory-3")
          .setOrigin(0.5, 0.5)
          .setScale(0)
      : this.add
          .image(435, 708, "accessory-2")
          .setOrigin(0.5, 0.5)
          .setScale(0)

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
    this.currText = "accessory";

    this.text = this.add.text(200, -110, `Choose your ${this.currText}`,
      { fontFamily: '"Nunito Sans", "Times New Roman", serif',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.05,
        color: "#ffffff"
      });

    this.tooltip = this.add
      .image(60, -90, "tooltip")
      .setOrigin(0, 0)
      .setScale(.5);

    this.progressbar1 = this.add
      .image(40, 10, "progressbar-1")
      .setOrigin(0, 0);

    this.progressbar2 = this.add
      .image(40, 10, "progressbar-2")
      .setOrigin(0, 0)
      .setAlpha(0);

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbar1,
        y: 10,
        duration: 300,
        repeat: 0,
        delay: 100,
      }]
    })

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbar2,
        alpha: 1,
        duration: 300,
        delay: 400,
      }]
    })

    // action on user`s choice
    this.onChoice = this.scene.get("Tutorial").onChoice;

    this.choice1.setInteractive().on('pointerdown', () => this.onChoice(this.choice1));
    this.choice2.setInteractive().on('pointerdown', () => this.onChoice(this.choice2));

    // hint pointer animation
    this.pointer = this.add.image(130, 1200, "pointer");
    this.pointer.setOrigin(0, 0).setScale(.7);
    
    this.isShowHint = false;

    this.prevChoice1.setInteractive().on('pointerdown', () => (
      this.isShowHint = !this.isShowHint
    ));

    this.prevChoice2.setInteractive().on('pointerdown', () => (
      this.isShowHint = !this.isShowHint
    ));
  }

  update() {
    this.isShowHint && this.showHint(this.pointer, this.prevChoice1, this.prevChoice2);
  }
}