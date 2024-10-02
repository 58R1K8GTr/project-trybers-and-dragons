import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.nextInstanceCount();
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }

  get energyType(): EnergyType { return this._energyType; }

  static nextInstanceCount(): void {
    Necromancer._createdInstances += 1;
  }
}