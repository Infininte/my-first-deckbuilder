import {Player} from './player';
import {Game} from './game';
import {Card} from './cards/card';

export class AiPlayer extends Player {

  constructor(id?: number) {
    super(id);
    this.name = 'AI ' + this.name;
  }

  public async go(game: Game) {
    this.playHand(game);

    const totalDeckSize = this.deck.length + this.hand.length + this.discardPile.length;

    if (totalDeckSize < 5) {
      console.log(this.name + ' total deck is less than 5');
      const availableCards: Array<Card> = game.gameboard.getAvailableCards(this);
      if (availableCards.length > 0) {
        const boughtCard = game.gameboard.purchaseCard(availableCards[0].cost, this);
        console.log('Buying a card!:');
        console.log(boughtCard);
        this.discardPile.push(boughtCard);
      }
    }

    this.drawHand();
  }
}
