class Intro extends Phaser.Scene {
  constructor() {
    super("Intro");
  }

  preload() {
    // for intro
    this.load.image("man-flirty", "assets/man-flirty.png");
    this.load.image("man-joy", "assets/man-joy.png");

    this.load.image("girl-default", "assets/girl-default-regular-cloth.png");
    this.load.image("girl-surprised", "assets/girl-surprised-regular-cloth.png");

    this.load.image("Paul-phrase-1", "assets/Paul-phrase-1.png");
    this.load.image("Lexy-phrase-1", "assets/Lexy-phrase-1.png");

    this.load.image("background-home", "assets/background-home.jpg");

    // for tutorial
    this.load.image("girl-shy", "assets/girl-shy-regular-cloth.png");
    this.load.image("girl-joy", "assets/girl-joy-regular-cloth.png");

    this.load.image("dress-1", "assets/dress-1.png");
    this.load.image("dress-2", "assets/dress-2.png");

    this.load.image("tooltip", "assets/tooltip.png");
    this.load.image("pointer", "assets/pointer.png");
  }

  create() {
    // adapt game size to screen
    window.addEventListener('resize', () => this.resize());
    this.resize();

    this.background = this.add
      .image(-350, 0, "background-home")
      .setOrigin(0, 0)
      .setTint(0x666666);

    this.man = this.add
      .sprite(-10, -200, "man-flirty")
      .setScale(.9)
      .setOrigin(0,0);

    this.man.flipX = true;

    this.girl = this.add
      .sprite(-900, -230, "girl-default")
      .setScale(.55)
      .setOrigin(0,0);

    this.manPhrase = this.add
      .image(480, 380, "Paul-phrase-1")
      .setScale(0);

    this.girlPhrase = this.add
      .image(100, 380, "Lexy-phrase-1")
      .setScale(0);

    this.anims.create({
      key: "man-talk",
      frames: [
        { key: "man-flirty", duration: 80 },
        { key: "man-joy", duration: 80 },
      ],
      frameRate: 8,
      repeat: 1,
    });

    this.anims.create({
      key: "girl-talk",
      frames: [
        { key: "girl-default", duration: 80 },
        { key: "girl-surprised", duration: 80 },
      ],
      frameRate: 8,
      repeat: 1,
    });

    // man talk animation
    this.tweens.timeline({
      tweens: [{
        targets: this.manPhrase,
        scale: .38,
        x: 300,
        y: 500,
        ease: "Linear",
        duration: 400,
        delay: 200,
        onStart: () => this.man.play("man-talk"),
      }]
    });

    this.tweens.timeline({
      tweens: [{
        targets: [this.man, this.manPhrase],
        delay: 1200,
        x: 900,
        duration: 300,
      }],
    });

    // girl talk animation
    this.tweens.timeline({
      tweens: [{
        targets: this.girl,
        delay: 1200,
        x: -30,
        duration: 300,
      }],
    });

    this.tweens.timeline({
      tweens: [{
        targets: this.girlPhrase,
        scale: .36,
        x: 300,
        y: 500,
        ease: "Linear",
        duration: 400,
        delay: 1500,
        onStart: () => this.girl.play("girl-talk"),
      }]
    });

    this.tweens.timeline({
      tweens: [{
        targets: [this.girlPhrase, this.girl],
        duration: 500,
        alpha: 1,
        delay: 2500,
        onComplete: () => this.scene.start("Tutorial"),
      }]
    });
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvas = this.game.canvas;
    const wratio = width / height;
    const ratio = this.game.config.width / this.game.config.height;
    
    if (wratio < ratio) {
        canvas.style.width = width + "px";
        canvas.style.height = (width / ratio) + "px";
    } else {
        canvas.style.width = (height * ratio) + "px";
        canvas.style.height = height + "px";
    }
  }
}