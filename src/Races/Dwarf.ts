import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static _createdInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.nextInstanceCount();
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  static nextInstanceCount(): void {
    Dwarf._createdInstances += 1;
  }
}