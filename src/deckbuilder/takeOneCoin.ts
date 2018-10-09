import {Card} from './card';
import {Player} from './player';
import {Game} from './game';
import {CardType} from './cardType';

export class TakeOneCoin implements Card {
  text = 'Take one Coin';
  cost = 1;
  type = CardType.TAKE_ONE_COIN;

  play(player: Player, game: Game) {
    console.log('Player ' + player.name + ' played "Take One Coin"');
    player.wallet = player.wallet + 1;
    game.bank.withdraw(1);
  }
}
