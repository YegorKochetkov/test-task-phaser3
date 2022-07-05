class Tutorial extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    this.load.image("background-home", "assets/background-home.jpg");
    this.load.image("man-joy-summer-cloth", "assets/man-joy-summer-cloth.png");
  }


  create() {
    this.background = this.add.image(-350, 0, "background-home");
    this.background.setOrigin(0, 0);
    
    this.man = this.add.image(0, -180, "man-joy-summer-cloth").setScale(.9);
    this.man.setOrigin(0, 0);
    this.man.flipX=true;

    this.add.text(20, 20, "Playing game",
      {font: "25px Arial", fill: "yellow"});
  }
}