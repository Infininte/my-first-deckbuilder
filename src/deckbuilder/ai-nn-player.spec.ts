import {AiNNPlayer} from './ai-nn-player';
import {TakeOneCoin} from './cards/takeOneCoin';
import {TakeTwoCoins} from './cards/takeTwoCoins';
import {TakeThreeCoins} from './cards/takeThreeCoins';
import {CardType} from './cards/cardType';

describe('AiNNPlayer', () => {
  describe('numberOfCardsInArrayOfType', () => {
    it('should return the correct number of cards', () => {
      const instance = new AiNNPlayer();
      const array = [new TakeOneCoin(), new TakeTwoCoins(), new TakeThreeCoins(), new TakeThreeCoins(), new TakeThreeCoins()];

      expect(instance.numberOfCardsInArrayOfType(array, CardType.TAKE_ONE_COIN)).toEqual(1);
      expect(instance.numberOfCardsInArrayOfType(array, CardType.TAKE_TWO_COINS)).toEqual(1);
      expect(instance.numberOfCardsInArrayOfType(array, CardType.TAKE_THREE_COINS)).toEqual(3);
    });
  });
});
