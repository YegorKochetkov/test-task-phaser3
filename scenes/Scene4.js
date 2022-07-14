class Scene4 extends Phaser.Scene {
  constructor() {
    super("Scene4");
  }

  init (data) {
    this.gameData = data;
  }

  create() {
    const placeChoice = this.gameData[this.gameData.length - 1];

    placeChoice === "1"
      ? document.body.classList.add("background-day")
      : document.body.classList.add("background-evening");
    
    this.man = this.add
      .sprite(615, -145, "man-joy")
      .setScale(.75)
      .setOrigin(0,0);

    this.man.flipX = true;

    this.anims.create({
      key: "man-talk",
      frames: [
        { key: "man-flirty", duration: 80 },
        { key: "man-joy", duration: 80 },
      ],
      frameRate: 8,
      repeat: 0,
    });

    // show selected girl
    switch (true) {
      case this.gameData.startsWith("111"):
        this.girl = this.add
          .sprite(110, 32, "girl-1")
          .setOrigin(0,0);
        break;

      case this.gameData.startsWith("112"):
        this.girl = this.add
          .sprite(110, 32, "girl-2")
          .setOrigin(0,0);
        break;

      case this.gameData.startsWith("121"):
        this.girl = this.add
          .sprite(110, 32, "girl-3")
          .setOrigin(0,0);
        break;

      case this.gameData.startsWith("122"):
        this.girl = this.add
          .sprite(110, 32, "girl-4")
          .setOrigin(0,0);
        break;

      case this.gameData.startsWith("211"):
        this.girl = this.add
          .sprite(110, 32, "girl-5")
          .setOrigin(0,0);
        break;

      case this.gameData.startsWith("212"):
        this.girl = this.add
          .sprite(110, 32, "girl-6")
          .setOrigin(0,0);
        break;

      case this.gameData.startsWith("221"):
        this.girl = this.add
          .sprite(110, 32, "girl-7")
          .setOrigin(0,0);
        break;

      case this.gameData.startsWith("222"):
        this.girl = this.add
          .sprite(110, 32, "girl-8")
          .setOrigin(0,0);
        break;

      default: this.add.text(10, 10, "Something wrong...");
    }

    this.tweens.timeline({
      tweens: [{
        targets: this.girl,
        x: 5,
        y: 55,
        ease: "Linear",
        duration: 400,
      }]
    });

    this.tweens.timeline({
      tweens: [{
        targets: this.man,
        x: 115,
        ease: "Linear",
        duration: 400,
      }]
    });

    // man talk animation
    this.manPhrase = this.add
      .image(480, 380, "Paul-phrase-2")
      .setScale(0);

    this.tweens.timeline({
      tweens: [{
        targets: this.manPhrase,
        scale: .5,
        x: 300,
        y: 450,
        ease: "Linear",
        duration: 400,
        delay: 500,
        onStart: () => this.man.play("man-talk"),
      }]
    });

    this.link = this.add
      .image(300, 1000, "play-now")
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on('pointerdown', () => this.getGame());
    
    // remove phrase and show link to game
    this.tweens.timeline({
      tweens: [{
        targets: [this.link],
        ease: "Linear",
        duration: 200,
        delay: 1900,
        y: 800,
        onStart: () => document.body.classList.add("tint")
      }]
    });
  
    this.tweens.timeline({
      tweens: [{
        targets: this.manPhrase,
        alpha: 0,
        ease: "Linear",
        duration: 100,
        delay: 1900,
      }]
    });
  }

  // send user to app store
  getGame() {
    const url = "https://apps.apple.com/us/app/id1491717191";

    this.tweens.timeline({
      tweens: [{
        targets: this.link,
        scale: .95,
        duration: 100,
        yoyo: true,
        repeat: 0,
        onComplete: () => window.open(url, "_blank")
      }],
    })
  }  
}