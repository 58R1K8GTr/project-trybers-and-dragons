import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, private _player2: Fighter) {
    super(player1);
  }

  public fight(): number {
    this.player.attack(this._player2);
    if (this._player2.lifePoints === -1) {
      return 1;
    }

    this._player2.attack(this.player);
    if (this.player.lifePoints === -1) {
      return -1;
    }
    
    return this.fight();
  }
}