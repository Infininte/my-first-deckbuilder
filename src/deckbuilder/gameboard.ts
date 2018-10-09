import {Card} from './card';
import {CardType} from './cardType';
import {TakeOneCoin} from './takeOneCoin';
import {TakeTwoCoins} from './takeTwoCoins';
import {MakeAnOpponentDropACoin} from './makeAnOpponentDropACoin';

export class Gameboard {
  cards = [];

  constructor() {
    this.cards = this.cards.concat(this.createCards(CardType.TAKE_ONE_COIN, 10));
    this.cards = this.cards.concat(this.createCards(CardType.TAKE_TWO_COINS, 10));
    this.cards = this.cards.concat(this.createCards(CardType.MAKE_AN_OPPONENT_DROP_A_COIN, 10));
    // console.log(this.createCards(CardType.TAKE_ONE_COIN, 10));
  }

  createCards(type: CardType, amount: number): Array<Card> {
    const toReturn = new Array<Card>();
    for (let i = 0; i < amount; i++) {
      toReturn.push(this.getCard(type));
    }
    return toReturn;
  }

  getCard(type: CardType): Card {
    if (type === CardType.TAKE_ONE_COIN) {
      return new TakeOneCoin();
    }
    if (type === CardType.TAKE_TWO_COINS) {
      return new TakeTwoCoins();
    }
    if (type === CardType.MAKE_AN_OPPONENT_DROP_A_COIN) {
      return new MakeAnOpponentDropACoin();
    }
  }
}
