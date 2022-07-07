class Tutorial extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    this.load.image("background-home", "assets/background-home.jpg");
    this.load.image("girl-default", "assets/girl-default-regular-cloth.png");
    this.load.image("girl-shy", "assets/girl-shy-regular-cloth.png");
    this.load.image("girl-joy", "assets/girl-joy-regular-cloth.png");
    this.load.image("tooltip", "assets/tooltip.png");
    this.load.image("dress-1", "assets/dress-1.png");
    this.load.image("dress-2", "assets/dress-2.png");
    this.load.image("pointer", "assets/pointer.png");
  }

  create() {
    this.background = this.add.image(-350, -10, "background-home")
      .setOrigin(0, 0);
    this.backgroundTint = this.add.image(-350, -10, "background-home")
      .setOrigin(0, 0)
      .setTint(0x666666);

    this.girl = this.add.sprite(-30, -230, "girl-surprised")
      .setScale(.55)
      .setOrigin(0,0);
    
    this.anims.create({
      key: "girl-shy",
      frames: [
        { key: "girl-surprised", duration: 600 },
        { key: "girl-shy" },
      ],
      frameRate: 8,
      repeat: 0,
    });
  

    this.dress1 = this.add.image(165, 708, "dress-1");
    this.dress1.setOrigin(0.5, 0.5).setScale(0);

    this.dress2 = this.add.image(435, 708, "dress-2");
    this.dress2.setOrigin(0.5, 0.5).setScale(0);

    this.tooltip = this.add.image(60, -110, "tooltip");
    this.tooltip.setOrigin(0, 0).setScale(.5);

    this.pointer = this.add.image(130, 1200, "pointer");
    this.pointer.setOrigin(0, 0).setScale(.7);

    this.text1 = this.add.text(200, -110, "Choose your dress",
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
          targets: [this.girl],
          y: -130,
          x: 20,
          scale: .48,
          duration: 500,
          delay: 100,
          onStart: () => this.girl.play("girl-shy"),
      }],
    });

    this.tweens.timeline({
      tweens: [{
          targets: [this.tooltip],
          y: 10,
          duration: 500,
          delay: 100,
      }],
    });

    this.tweens.timeline({
      tweens: [{
          targets: [this.text1],
          y: 15,
          duration: 500,
          delay: 100,
      }],
    });

    this.tweens.timeline({
      tweens: [{
          targets: [this.dress1],
          scale: 1,
          duration: 500,
          delay: 600,
      }],
    });

    this.tweens.timeline({
      tweens: [{
          targets: [this.dress2],
          scale: 1,
          duration: 500,
          delay: 1100,
      }],
    });

    this.tweens.timeline({
      tweens: [{
          targets: [this.pointer],
          y: 680,
          duration: 600,
          delay: 1200,
      }],
    });

    // this.tweens.timeline({
    //   tweens: [{
    //       targets: [this.girl],
    //       alpha: 1,
    //       duration: 0,
    //   }],
    // });

    this.tweens.timeline({
      tweens: [{
          targets: [this.backgroundTint],
          alpha: 0,
          duration: 1600,
      }],
    });
  }
}