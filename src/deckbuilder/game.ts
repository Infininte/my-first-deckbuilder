import {Couch} from './couch';
import {Bank} from './bank';
import {Gameboard} from './gameboard';
import {Player} from './player';

export class Game {
  public bank: Bank;
  public gameboard: Gameboard;
  public couch: Couch;
  private self: Game;

  constructor() {
    this.bank = new Bank(40);
    this.gameboard = new Gameboard();
    this.couch = new Couch(3, 1);
  }

  public start() {
    this.loop(this);
  }

  public async loop(self: Game) {
    console.log('Looping...');
    if (this.isDone()) {
      return;
    }
    await this.baseGame();
    setTimeout(() => {
      self.loop(self);
    }, 500);
  }

  public async baseGame() {
    for (let i = 0; i < this.couch.players.length; i++) {
      if (this.isDone()) {
        break;
      }
      await this.couch.players[i].go(this);
    }
  }

  public isDone(): boolean {
    const done = this.bank.money === 0 || this.couch.players.length === 0;
    console.log('Game is done: ' + done);
    return done;
  }

  private getWinners() {
    const allWalletValues = this.couch.players.map((player: Player) => player.wallet);
    const biggestWallet = Math.max(...allWalletValues);
    const winners = this.couch.players.filter((player: Player) => player.wallet === biggestWallet);
    return winners;
  }
}
