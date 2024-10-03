import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player1: Fighter,
    private _monsters: (SimpleFighter | Fighter)[],
  ) {
    super(player1);
  }

  private oneFight(opponent: (SimpleFighter | Fighter)): number {
    this.player.attack(opponent);
    if (opponent.lifePoints === -1) { return 1; }
    opponent.attack(this.player);
    if (this.player.lifePoints === -1) { return -1; }
    return this.oneFight(opponent);
  }

  public fight(): number {
    let resultBattle = 1;
    this._monsters.forEach((opponent) => {
      resultBattle = this.oneFight(opponent);
      if (resultBattle === -1) { return resultBattle; }
    });
    return resultBattle;
  }
}