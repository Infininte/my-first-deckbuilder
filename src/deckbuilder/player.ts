import {Game} from './game';
import {Card} from './card';
import {TakeOneCoin} from './takeOneCoin';

export class Player {
  id: number;
  name: string;
  wallet: number;
  deck: Array<Card> = [];
  discardPile: Array<Card> = [];
  hand: Array<Card> = [];

  constructor() {
    this.name = 'Player ' + this.id;
    this.createStartingDeck();
    this.drawHand();
  }

  private createStartingDeck(): void {
    this.deck.push(new TakeOneCoin());
    this.deck.push(new TakeOneCoin());
    this.deck.push(new TakeOneCoin());
    this.deck.push(new TakeOneCoin());
  }

  public async go(game: Game) {
    console.log(this.name);
    this.playHand(game);
    this.drawHand();
  }

  private playHand(game: Game): void {
    this.hand.forEach((card) => {
      card.play(this, game);
      this.discardPile.push(card);
    });
    this.hand = [];
  }

  private drawHand(): void {
    this.drawOne();
    this.drawOne();
  }

  private drawOne(): void {
    if (this.deck.length === 0) {
      this.shuffleDiscardIntoDeck();
    }
    this.hand.push(this.deck.pop());
  }

  private shuffleDiscardIntoDeck(): void {
    this.discardPile.forEach((card) => {
      this.deck.push(card);
    });
    this.discardPile = [];
  }
}
