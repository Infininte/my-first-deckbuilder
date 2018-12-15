import {Player} from './player';
import {AiPlayer} from './ai-player';

export class Couch {
  players = new Array<Player>();

  constructor(numberOfPlayers: number, numberOfAiPlayers: number = 0) {
    console.log('Preparing players');
    const newPlayers = this.createPlayers(numberOfPlayers, numberOfAiPlayers);
    console.log('Players created!');
    newPlayers.forEach((player) => this.players.push(player));
    console.log(this.players);
  }

  createPlayers(amountOfPlayers: number, amountOfAi: number = 0): Array<Player> {
    const toReturn = new Array<Player>();
    for (let i = 0; i < amountOfPlayers; i++) {
      toReturn.push(new Player(toReturn.length + 1));
    }
    for (let i = 0; i < amountOfAi; i++) {
      toReturn.push(new AiPlayer(toReturn.length + 1));
    }
    return toReturn;
  }

  getOpponents(currentPlayer: Player) {
    return this.players.filter((player: Player) => currentPlayer.id !== player.id);
  }
}
