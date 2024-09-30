import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static _createdInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.nextInstanceCount();
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  static nextInstanceCount(): void {
    Halfling._createdInstances += 1;
  }
}