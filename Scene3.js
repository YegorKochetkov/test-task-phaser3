class Scene3 extends Phaser.Scene {
  constructor() {
    super("Scene3");
  }

  init (data) {
    this.gameData = data;
  }

  preload() {
  }

  create() {
    this.nextScene = 4;

    this.background = this.add
      .image(-350, -7, "background-home")
      .setOrigin(0, 0);
  
    // girl change dress at scene start
    if (this.gameData.startsWith("1")) {
      this.girl = this.add
        .sprite(110, 32, "prevGirl-1")
        .setOrigin(0,0)
    } else {
      this.girl = this.add
        .sprite(110, 32, "prevGirl-2")
        .setOrigin(0,0)
    }

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
    
    this.tweens.timeline({
      tweens: [{
        targets: this.girl,
        alpha: 0,
        duration: 300,
      }],
    });
    
    // show the girl depending on the player's choice
    if (this.gameData === "111") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress1,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "112") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress2,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "121") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress3,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "122") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress4,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "211") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress5,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "212") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress6,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "221") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress7,
          alpha: 1,
          duration: 300,
        }],
      });
    }
    
    if (this.gameData === "222") {
      this.tweens.timeline({
        tweens: [{
          targets: this.girlInDress8,
          alpha: 1,
          duration: 300,
        }],
      });
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
    this.currText = "place";

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

    this.progressbar2 = this.add
      .image(40, 10, "progressbar-2")
      .setOrigin(0, 0);

    this.progressbar3 = this.add
      .image(40, 10, "progressbar-3")
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
        targets: this.progressbar2,
        y: 10,
        duration: 300,
        repeat: 0,
        delay: 100,
      }]
    })

    this.tweens.timeline({
      tweens: [{
        targets: this.progressbar3,
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