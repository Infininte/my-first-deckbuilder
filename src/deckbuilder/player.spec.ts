import {Player} from './player';
import {Card} from './card';
import {TakeOneCoin} from './takeOneCoin';

let player;
describe('Player', () => {
  beforeEach(() => {
    player = new Player();
  });

  describe('constructor', () => {
    it('should name player', () => {
      expect(player.name).toBeDefined();
    });
    it('should create a starting deck', () => {
      expect(player.deck).toBeDefined();
      expect(player.deck.length + player.hand.length).toBe(4);
    });
    it('should draw a starting hand', () => {
      expect(player.hand).toBeDefined();
      expect(player.hand.length).toBe(2);
    });
  });

  describe('go', () => {
    let firstCard, secondCard;
    beforeEach(() => {
      firstCard = new TakeOneCoin();
      secondCard = new TakeOneCoin();
      spyOn(TakeOneCoin.prototype, 'play').and.stub();
    });
    it('should play each card in hand', () => {
      player.hand = [firstCard, secondCard];
      player.go();
      expect(firstCard.play).toHaveBeenCalled();
      expect(secondCard.play).toHaveBeenCalled();
    });
    it('should discard all played cards', () => {
      player.discardPile = [];
      player.hand = [firstCard, secondCard];
      player.go();
      expect(player.discardPile.length).toBe(2);
      expect(player.discardPile[0]).toBe(firstCard);
      expect(player.discardPile[1]).toBe(secondCard);
    });
    it('should draw a new hand', () => {
      player.deck = [firstCard, secondCard];
      player.go();
      expect(player.hand.length).toBe(2);
      expect(player.hand[1]).toBe(firstCard);
      expect(player.hand[0]).toBe(secondCard);
    });
  });
});
