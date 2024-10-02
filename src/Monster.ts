import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  
  public receiveDamage(attackPoints: number): number {
    const lifePoints = this._lifePoints - attackPoints;
    this._lifePoints = lifePoints <= 0 ? -1 : lifePoints;
    return this._lifePoints;
  }
  
  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}