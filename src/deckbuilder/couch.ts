import {Player} from './player';

export class Couch {
  players = new Array<Player>();

  constructor(numberOfPlayers: number) {
    console.log('Preparing players');
    const newPlayers = this.createPlayers(numberOfPlayers);
    console.log('Players created!');
    newPlayers.forEach((player) => this.players.push(player));
    console.log(this.players);
  }

  createPlayers(amount: number): Array<Player> {
    const toReturn = new Array<Player>();
    for (let i = 0; i < amount; i++) {
      toReturn.push(new Player());
    }
    return toReturn;
  }

  getOpponents(currentPlayer: Player) {
    return this.players.filter((player: Player) => currentPlayer.id !== player.id);
  }
}
