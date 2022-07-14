window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      width: 600,
      height: 900
    },
    title: "My Fantasy: Make Your Story",
    scene: [Intro, Tutorial, Scene1, Scene2, Scene3, Scene4],
    transparent: true
  }

  var game = new Phaser.Game(config);
};
