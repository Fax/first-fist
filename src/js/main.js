import GameState from 'states/GameState';
import BootState from 'states/BootState';
import PreloaderState from 'states/PreloaderState';

class Game extends Phaser.Game {

	constructor() {
    super(500, 500, Phaser.AUTO, 'content', null);
    this.state.add('boot', BootState);
    this.state.add('preloader', PreloaderState);
		this.state.add('GameState', GameState, false);
		this.state.start('boot');
	}

}

 new Game();