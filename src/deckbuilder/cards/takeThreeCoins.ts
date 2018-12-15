import {Card} from './card';
import {Player} from '../player';
import {Game} from '../game';
import {CardType} from './cardType';

export class TakeThreeCoins implements Card {
  text = 'Take three Coins';
  cost = 3;
  type = CardType.TAKE_THREE_COINS;

  play(player: Player, game: Game) {
    player.wallet = player.wallet + 3;
    game.bank.withdraw(3);
  }
}
