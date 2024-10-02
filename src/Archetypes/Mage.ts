import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.nextInstanceCount();
  }

  static createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
  
  static nextInstanceCount(): void {
    Mage._createdInstances += 1;
  }
}