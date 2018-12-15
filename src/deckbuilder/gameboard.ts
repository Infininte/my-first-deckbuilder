import {Card} from './cards/card';
import {CardType} from './cards/cardType';
import {TakeOneCoin} from './cards/takeOneCoin';
import {TakeTwoCoins} from './cards/takeTwoCoins';
import {MakeAnOpponentDropACoin} from './cards/makeAnOpponentDropACoin';
import {Player} from './player';
import {TakeThreeCoins} from './cards/takeThreeCoins';

export class Gameboard {
  cards = [];

  constructor() {
    this.cards = this.cards.concat(this.createCards(CardType.TAKE_ONE_COIN, 10));
    this.cards = this.cards.concat(this.createCards(CardType.TAKE_TWO_COINS, 10));
    this.cards = this.cards.concat(this.createCards(CardType.TAKE_THREE_COINS, 10));
    // this.cards = this.cards.concat(this.createCards(CardType.MAKE_AN_OPPONENT_DROP_A_COIN, 10));
  }

  public getAvailableCards(player: Player) {
    const affordableCards = this.cards.filter((card: Card) => player.wallet >= card.cost);
    console.log('Affordable cards');
    console.log(affordableCards);
    return affordableCards;
  }

  public purchaseCard(type: CardType, player: Player) {
    const index = this.cards.findIndex( (card: Card) => card.type === type);

    if (index < 0) {
      throw Error('You can\'t buy a card that doesn\'t exist');
    }

    const cardToPurchase: Card = this.cards.splice(index, 1)[0];
    player.wallet -= cardToPurchase.cost;
    return cardToPurchase;
  }

  private createCards(type: CardType, amount: number): Array<Card> {
    const toReturn = new Array<Card>();
    for (let i = 0; i < amount; i++) {
      toReturn.push(this.getCard(type));
    }
    return toReturn;
  }

  private getCard(type: CardType): Card {
    if (type === CardType.TAKE_ONE_COIN) {
      return new TakeOneCoin();
    }
    if (type === CardType.TAKE_TWO_COINS) {
      return new TakeTwoCoins();
    }
    if (type === CardType.TAKE_THREE_COINS) {
      return new TakeThreeCoins();
    }
    if (type === CardType.MAKE_AN_OPPONENT_DROP_A_COIN) {
      return new MakeAnOpponentDropACoin();
    }
  }
}
