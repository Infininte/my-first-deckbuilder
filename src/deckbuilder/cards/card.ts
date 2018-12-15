import {Player} from '../player';
import {Game} from '../game';
import {CardType} from './cardType';

export interface Card {
  text: string;
  cost: number;
  type: CardType;

  play(player: Player, game: Game);
}
