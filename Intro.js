class Intro extends Phaser.Scene {
  constructor() {
    super("loadGame");
  }

  preload() {
    this.load.image("background-home", "assets/background-home.jpg");
    this.load.image("man-start", "assets/man-start.png");
    this.load.image("girl-start", "assets/girl-start.png");
    this.load.image("Paul-phrase-1", "assets/Paul-phrase-1.png");
    this.load.image("Lexy-phrase-1", "assets/Lexy-phrase-1.png");
  }

  create() {
    this.background = this.add.image(-350, 0, "background-home");
    this.background.setOrigin(0, 0).setTint(0x444444);

    this.man = this.add.image(0, 0, "man-start");
    this.man.setOrigin(0, 0);

    this.girl = this.add.image(900, 0, "girl-start");
    this.girl.setOrigin(0, 0);
    this.load.image("girl-shy", "assets/girl-shy.png");

    this.manPhrase = this.add.image(480, 380, "Paul-phrase-1").setScale(0);
    this.girlPhrase = this.add.image(100, 380, "Lexy-phrase-1").setScale(0);

    this.tweens.timeline({
      tweens: [{
          targets: this.manPhrase,
          scale: .38,
          x: 300,
          y: 500,
          ease: 'Linear',
          duration: 400,
          delay: 200,
      }]
    });

    this.tweens.timeline({
      tweens: [{
          targets: [this.man, this.manPhrase],
          delay: 1200,
          x: -900,
          duration: 300,
      }],
    });

    this.tweens.timeline({
      tweens: [{
          targets: this.girl,
          delay: 1200,
          x: 70,
          duration: 300,
      }],
    });

    this.tweens.timeline({
      tweens: [{
          targets: this.girlPhrase,
          scale: .36,
          x: 300,
          y: 500,
          ease: 'Linear',
          duration: 400,
          delay: 1500,
      }]
    });

    this.tweens.timeline({
      tweens: [{
          targets: [this.girlPhrase, this.girl, this.background, this.pointer],
          duration: 300,
          alpha: 0,
          delay: 2500,
          onComplete: () => this.scene.start("playGame"),
      }]
    });

    // this.scene.start("playGame");
  }
}