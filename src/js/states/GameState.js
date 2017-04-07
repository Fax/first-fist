import RainbowText from 'objects/RainbowText';

export default class GameState extends Phaser.State {

  create() {
    console.log("GameStarted");
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
    let text = new RainbowText(this.game, center.x,
      center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
     var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

		text.anchor.set(0.5);
	}

}

