class Intro extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background-home", "assets/background-home.jpg");
    this.load.image("man-joy-summer-cloth", "assets/man-joy-summer-cloth.png");
    this.load.image("girl-surprised-regular-cloth", "assets/girl-surprised-regular-cloth.png");
    this.load.image("Paul-phrase-1", "assets/Paul-phrase-1.png");
    this.load.image("Lexy-phrase-1", "assets/Lexy-phrase-1.png");
  }

  create() {
    this.background = this.add.image(-350, 0, "background-home");
    this.background.setOrigin(0, 0).setTint(0x444444);

    this.man = this.add.image(0, -180, "man-joy-summer-cloth").setScale(.9);
    this.man.setOrigin(0, 0);
    this.man.flipX=true;

    this.girl = this.add.image(900, -220, "girl-surprised-regular-cloth").setScale(.55);
    this.girl.setOrigin(0, 0);

    this.manPhrase = this.add.image(480, 380, "Paul-phrase-1").setScale(0);
    this.girlPhrase = this.add.image(100, 380, "Lexy-phrase-1").setScale(0);

    this.tweens.timeline({
      tweens: [{
          targets: this.manPhrase,
          scale: .38,
          x: 300,
          y: 500,
          ease: 'Linear',
          duration: 300,
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
          x: -20,
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
          duration: 300,
          delay: 1500,
      }]
    });


    // setTimeout(() => {
    //   this.scene.start("playGame");
    // }, 10000);
  }

  update() {
  }
}