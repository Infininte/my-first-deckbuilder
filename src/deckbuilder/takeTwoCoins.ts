import {Card} from './card';
import {Player} from './player';
import {Game} from './game';
import {CardType} from './cardType';

export class TakeTwoCoins implements Card {
  text = 'Take two Coins';
  cost = 2;
  type = CardType.TAKE_TWO_COINS;

  play(player: Player, game: Game) {
    player.wallet = player.wallet + 2;
    game.bank.withdraw(2);
  }
}
