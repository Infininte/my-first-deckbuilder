import {CardType} from './cards/cardType';
import {Card} from './cards/card';
import {Gameboard} from './gameboard';
import {before, describe} from 'selenium-webdriver/testing';
import {Player} from './player';
import {TakeOneCoin} from './cards/takeOneCoin';
import {Game} from './game';

describe('Gameboard', () => {
  describe('constructor', () => {
    // it('should populate the deck with cards', () => {
    //   const instance = new Gameboard();
    //   expect(containsCards(instance.cards, CardType.TAKE_ONE_COIN, 10));
    //   expect(containsCards(instance.cards, CardType.TAKE_TWO_COINS, 10));
    //   expect(containsCards(instance.cards, CardType.MAKE_AN_OPPONENT_DROP_A_COIN, 10));
    // });
  });

  describe('getAvailableCards', () => {
    let player, instance;
    beforeEach(() => {
      player = new Player();
      instance = new Gameboard();
      instance.cards = [];
    });
    it('should return cards that cost less than what the player has in his wallet', () => {
      player.wallet = 3;
      instance.cards.push(new EmptyCard('', 2));
      instance.cards.push(new EmptyCard('', 1));
      instance.cards.push(new EmptyCard('', 0));

      const result: Array<Card> = instance.getAvailableCards(player);

      expect(result).toEqual(instance.cards);
    });
  });
});

function containsCards(cards: Array<Card>, type: CardType, amount: number): boolean {
  return cards.filter((card: Card) => card.type === type).length === amount;
}

class EmptyCard implements Card {
  public text = '';
  public cost = 0;
  public type = CardType.TAKE_ONE_COIN;

  constructor(text?: string, cost?: number, type?: CardType) {
    this.text = text;
    this.cost = cost;
    this.type = type;
  }

  play(player: Player, game: Game) {}
}
