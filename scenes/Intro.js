class Intro extends Phaser.Scene {
  constructor() {
    super("Intro");
  }

  preload() {
    // boot progress
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    
    const loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: "Loading...",
        style: {
          font: "20px monospace",
          fill: "#ffffff"
        }
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: "0%",
        style: {
          font: "18px monospace",
          fill: "#ffffff"
        }
    });

    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: "",
        style: {
          font: "18px monospace",
          fill: "#ffffff"
        }
    });
    assetText.setOrigin(0.5, 0.5);

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(50, 270, 500, 50);

    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(50, 270, 500 * value, 50);
    });

    this.load.on("fileprogress", function (file) {
        assetText.setText("Loading file: " + file.key);
    });

    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

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

    // for scene 1
    this.load.image("girl-joy-dress1", "assets/girl-joy-dress1.png");
    this.load.image("girl-joy-dress2", "assets/girl-joy-dress2.png");

    this.load.image("bag-1", "assets/bag-1.png");
    this.load.image("bag-2", "assets/bag-2.png");

    this.load.image("progressbar-0", "assets/progressbar-empty.png");
    this.load.image("progressbar-1", "assets/progressbar-1.png");

    // for scene 2
    this.load.image("girl-dress1-bag1", "assets/girl-dress1-bag1.png");
    this.load.image("girl-dress1-bag2", "assets/girl-dress1-bag2.png");
    this.load.image("girl-dress2-bag1", "assets/girl-dress2-bag1.png");
    this.load.image("girl-dress2-bag2", "assets/girl-dress2-bag2.png");

    this.load.image("accessory-1", "assets/accessory-1.png");
    this.load.image("accessory-2", "assets/accessory-2.png");
    this.load.image("accessory-3", "assets/accessory-3.png");

    this.load.image("progressbar-2", "assets/progressbar-2.png");

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
    
    // for scene4
    this.load.image("background-day", "assets/background-day.jpg");
    this.load.image("background-evening", "assets/background-evening.jpg");
    this.load.image("Paul-phrase-2", "assets/Paul-phrase-2.png");
    this.load.image("play-now", "assets/play-now.png");
    this.load.image("link-tint", "assets/tint.png");
  }

  create() {
    // adapt game size to screen
    window.addEventListener("resize", () => this.resize());
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
      .setOrigin(0, 0);

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