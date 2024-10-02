import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.nextInstanceCount();
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static nextInstanceCount(): void {
    Ranger._createdInstances += 1;
  }
}