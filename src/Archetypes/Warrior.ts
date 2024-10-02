import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType = 'stamina';
  constructor(name: string) {
    super(name);
    Warrior.nextInstanceCount();
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static nextInstanceCount(): void {
    Warrior._createdInstances += 1;
  }
}