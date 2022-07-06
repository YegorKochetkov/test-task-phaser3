class Tutorial extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    this.load.image("background-home", "assets/background-home.jpg");
    this.load.image("girl-shy", "assets/girl-shy.png");
    this.load.image("tooltip", "assets/tooltip.png");
    this.load.image("dress-1", "assets/dress-1.png");
    this.load.image("dress-2", "assets/dress-2.png");
    this.load.image("pointer", "assets/pointer.png");
  }

  create() {
    this.background = this.add.image(-350, 0, "background-home");
    this.background.setOrigin(0, 0).setTint(0x444444).setAlpha(0);

    this.girl = this.add.image(120, 35, "girl-shy");
    this.girl.setOrigin(0, 0).setAlpha(0);

    this.dress1 = this.add.image(40, 570, "dress-1");
    this.dress1.setOrigin(0, 0);

    this.dress2 = this.add.image(310, 570, "dress-2");
    this.dress2.setOrigin(0, 0);

    this.tooltip = this.add.image(60, 10, "tooltip");
    this.tooltip.setOrigin(0, 0).setScale(.5);

    this.pointer = this.add.image(130, 680, "pointer");
    this.pointer.setOrigin(0, 0).setScale(.7);

    this.text1 = this.add.text(200, 15, "Choose your dress",
      { fontFamily: '"Nunito Sans", "Times New Roman", serif',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.05,
        color: "#ffffff"
      });

    this.tweens.timeline({
      tweens: [{
          targets: [this.girl, this.background],
          alpha: 1,
          duration: 300,
      }],
    });
  }
}