export default class BootState extends Phaser.State {
  preload() {
    console.log("Booting");
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');
  }
  create() {
    this.game.state.start('preloader');
  }
}