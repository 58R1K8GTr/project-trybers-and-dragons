export default abstract class Race {
  static _createdInstances = 0;
  constructor(private _name: string, private _dexterity: number) {}

  get name(): string { return this._name; }
  get dexterity(): number { return this._dexterity; }
  static createdRacesInstances(): number { throw new Error('Not implemented'); }
  abstract get maxLifePoints(): number;
}