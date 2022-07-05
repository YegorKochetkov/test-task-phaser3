window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    scene: [Intro, Tutorial],
  }

  var game = new Phaser.Game(config);
};
