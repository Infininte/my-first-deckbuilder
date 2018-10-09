import {Player} from './player';

let player;
describe('Player', () => {
  describe('constructor', () => {
    it('should name player', () => {
      player = new Player();
      expect(player.name).toBeDefined();
    });
  });
});
