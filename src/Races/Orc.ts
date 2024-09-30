import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static _createdInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.nextInstanceCount();
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  static nextInstanceCount(): void {
    Orc._createdInstances += 1;
  }
}