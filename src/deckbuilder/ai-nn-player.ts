import {Player} from './player';
import {Game} from './game';
import {Card} from './cards/card';
import {CardType} from './cards/cardType';
// import * as tf from '@tensorflow/tfjs';
import {Sequential} from '@tensorflow/tfjs';

export class AiNNPlayer extends Player {

  // model: Sequential;

  constructor(id?: number) {
    super(id);
    this.name = 'Nueral Network AI ' + this.name;

    // this.model = tf.sequential();
    // this.model.add(tf.layers.dens`e({units: 10, inputShape: [17, 1], activation: 'relu'}));
    // this.model.add(tf.layers.dense({units: 6, inputShape: [10, 1], activation: 'relu'}));
    // this.model.add(tf.layers.dense({units: 3, inputShape: [6, 1]}));
  }

  public async go(game: Game) {
    this.playHand(game);

    // this.model.predict(this.getInputs(game)).print();

    this.drawHand();
  }

  numberOfCardsInArrayOfType(array: Array<Card>, type: CardType) {
    return array.filter((card) => card.type === type).length;
  }

  getWalletOfPlayerWithId(id: number, game: Game) {
    return game.couch.players.filter((player) => player.id = id)[0].wallet;
  }

  // getInputs(game: Game) {
  //   const inputs: number[] = [
  //       game.bank.money,
  //       this.getWalletOfPlayerWithId(1, game),
  //       this.getWalletOfPlayerWithId(2, game),
  //       this.getWalletOfPlayerWithId(3, game),
  //       this.getWalletOfPlayerWithId(4, game),
  //       this.numberOfCardsInArrayOfType(game.gameboard.getAvailableCards(this), CardType.TAKE_ONE_COIN),
  //       this.numberOfCardsInArrayOfType(game.gameboard.getAvailableCards(this), CardType.TAKE_TWO_COINS),
  //       this.numberOfCardsInArrayOfType(game.gameboard.getAvailableCards(this), CardType.TAKE_THREE_COINS),
  //       this.numberOfCardsInArrayOfType(this.discardPile, CardType.TAKE_ONE_COIN),
  //       this.numberOfCardsInArrayOfType(this.discardPile, CardType.TAKE_TWO_COINS),
  //       this.numberOfCardsInArrayOfType(this.discardPile, CardType.TAKE_THREE_COINS),
  //       this.numberOfCardsInArrayOfType(this.hand, CardType.TAKE_ONE_COIN),
  //       this.numberOfCardsInArrayOfType(this.hand, CardType.TAKE_TWO_COINS),
  //       this.numberOfCardsInArrayOfType(this.hand, CardType.TAKE_THREE_COINS),
  //       this.numberOfCardsInArrayOfType(this.deck, CardType.TAKE_ONE_COIN),
  //       this.numberOfCardsInArrayOfType(this.deck, CardType.TAKE_TWO_COINS),
  //       this.numberOfCardsInArrayOfType(this.deck, CardType.TAKE_THREE_COINS),
  //     ];
  //   return tf.tensor2d(inputs, [17, 1]);
  //   // return tf.tensor2d([1], [1, 1]);
  // }
}
