class Scene2 extends Phaser.Scene {
  constructor() {
    super("Scene2");
  }

  init (data) {
    this.gameData = data;
  }

  preload() { 
    this.gameData[0] === "1" && this.load.image("prevGirl-1", "assets/girl-joy-dress1.png");
    this.gameData[0] === "2" && this.load.image("prevGirl-2", "assets/girl-joy-dress2.png");

    this.load.image("girl-dress1-bag1", "assets/girl-dress1-bag1.png");
    this.load.image("girl-dress1-bag2", "assets/girl-dress1-bag2.png");
    this.load.image("girl-dress2-bag1", "assets/girl-dress2-bag1.png");
    this.load.image("girl-dress2-bag2", "assets/girl-dress2-bag2.png");

    this.load.image("bag-1", "assets/bag-1.png");
    this.load.image("bag-2", "assets/bag-2.png");

    this.load.image("accessory-1", "assets/accessory-1.png");
    this.load.image("accessory-2", "assets/accessory-2.png");
    this.load.image("accessory-3", "assets/accessory-3.png");

    this.load.image("background-home", "assets/background-home.jpg");

    this.load.image("tooltip", "assets/tooltip.png");

    this.load.image("progressbar-1", "assets/progressbar-1.png");
    this.load.image("progressbar-2", "assets/progressbar-2.png");

    this.load.image("pointer", "assets/pointer.png");
  }

  create() {
    this.nextScene = 3;

    this.background = this.add.image(-350, -7, "background-home")
      .setOrigin(0, 0);
  
    // girl change dress at scene start
    this.girl = this.gameData[0] === "1"
      ? this.add.sprite(110, 32, "prevGirl-1")
          .setOrigin(0,0)
      : this.add.sprite(110, 32, "prevGirl-2")
          .setOrigin(0,0)

    this.girlInDress1 = this.add.sprite(110, 32, "girl-dress1-bag1")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress2 = this.add.sprite(110, 32, "girl-dress1-bag2")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress3 = this.add.sprite(110, 32, "girl-dress2-bag1")
      .setOrigin(0,0)
      .setAlpha(0);

    this.girlInDress4 = this.add.sprite(110, 32, "girl-dress2-bag2")
      .setOrigin(0,0)
      .setAlpha(0);
    
    this.tweens.timeline({
      tweens: [{
        targets: this.girl,
        alpha: 0,
        duration: 300,
      }],
    });
    
    if (this.gameData === "11") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress1,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "12") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress2,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "21") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress3,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "22") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress4,
          alpha: 1,
          duration: 300,
        }],
      });
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

    this.choice2 = this.gameData === "21" 
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

    // this.tweens.timeline({
    //   tweens: [{
    //     targets: [this.tooltip, this.text],
    //     y: 10,
    //     duration: 300,
    //     repeat: 0,
    //   }]
    // })

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

      // this.tweens.timeline({
    //   tweens: [{
    //     targets: [this.pointer],
    //     y: 680,
    //     duration: 600,
    //     delay: 600,
    //     onComplete: () => this.isShowHint = true,
    //   }],
    // });

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

  // showHint(...args) {
  //   if (this.isShowHint && this.pointer.y === 680 && this.pointer.x === 130) {
  //     this.tweens.add({
  //       targets: this.pointer,
  //       x: 420,
  //       ease: 'Linear',
  //       duration: 700,
  //       repeat: 0,
  //       delay: 300,
  //     });
  //   } else if (this.pointer.x === 420) {
  //     this.tweens.add({
  //       targets: this.pointer,
  //       x: 130,
  //       ease: 'Linear',
  //       duration: 700,
  //       repeat: 0,
  //       delay: 300,
  //     });
  //   }

  //   if (this.pointer.y === 680 && this.pointer.x === 420) {
  //     this.tweens.timeline({
  //       tweens: [{
  //         targets: this.prevChoice2,
  //         scale: .95,
  //         duration: 150,
  //         repeat: 0,
  //       }],
  //     });
  //   } else {
  //     this.tweens.timeline({
  //       tweens: [{
  //         targets: this.prevChoice2,
  //         scale: 1,
  //         duration: 150,
  //         repeat: 0,
  //       }],
  //     });
  //   }
    
  //   if (this.pointer.y === 680 && this.pointer.x === 130) {
  //     this.tweens.timeline({
  //       tweens: [{
  //         targets: this.prevChoice1,
  //         scale: .95,
  //         duration: 150,
  //         yoyo: true,
  //         repeat: 0,
  //       }],
  //     });
  //   } else {
  //     this.tweens.timeline({
  //       tweens: [{
  //         targets: this.prevChoice1,
  //         scale: 1,
  //         duration: 150,
  //         repeat: 0,
  //       }],
  //     });
  //   }
  // }
}