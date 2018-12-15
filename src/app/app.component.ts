import {Component, OnInit} from '@angular/core';
import {Game} from '../deckbuilder/game';
import {CardType} from '../deckbuilder/cards/cardType';
import {Card} from '../deckbuilder/cards/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My first deck builder';
  game = new Game();

  constructor() {}

  ngOnInit(): void {
    console.log(this.game);
    console.log('Starting game');
    this.game.start();
    console.log('Game is started');
  }

  countTakeOneCoin(): number {
    return this.countCardsOfType(CardType.TAKE_ONE_COIN);
  }
  countTakeTwoCoins(): number {
    return this.countCardsOfType(CardType.TAKE_TWO_COINS);
  }
  countMakeAnOpponentDropACoin(): number {
    return this.countCardsOfType(CardType.MAKE_AN_OPPONENT_DROP_A_COIN);
  }

  private countCardsOfType(type: CardType): number {
    return this.game.gameboard.cards.filter((card: Card) => card.type === type).length;
  }
}
