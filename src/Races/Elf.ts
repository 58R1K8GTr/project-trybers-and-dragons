import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.nextInstanceCount();
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  static nextInstanceCount(): void {
    Elf._createdInstances += 1;
  }
}