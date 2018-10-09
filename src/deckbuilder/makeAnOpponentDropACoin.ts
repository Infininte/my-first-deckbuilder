import {Card} from './card';
import {Player} from './player';
import {Game} from './game';
import {CardType} from './cardType';

export class MakeAnOpponentDropACoin implements Card {
  text = 'Make an opponent drop a Coin';
  cost = 1;
  type = CardType.MAKE_AN_OPPONENT_DROP_A_COIN;

  play(player: Player, game: Game) {
    const opponents = game.couch.getOpponents(player);
    opponents[0].wallet -= 1;
  }
}
