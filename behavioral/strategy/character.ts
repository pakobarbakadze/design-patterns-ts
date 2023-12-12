import {
  AxeBehavior,
  BowAndArrowBehavior,
  SwordBehavior,
  WeaponBehavior,
} from "./weapon-behavior";

export abstract class Character {
  protected weaponBehavior: WeaponBehavior | null = null;

  public fight(): void {
    this.weaponBehavior?.useWeapon();
  }

  public setBehavior(behavior: WeaponBehavior) {
    this.weaponBehavior = behavior;
  }
}

export class King extends Character {
  constructor() {
    super();
    this.weaponBehavior = new SwordBehavior();
  }
}

export class Queen extends Character {
  constructor() {
    super();
    this.weaponBehavior = new BowAndArrowBehavior();
  }
}
export class Knight extends Character {
  constructor() {
    super();
    this.weaponBehavior = new SwordBehavior();
  }
}
export class Troll extends Character {
  constructor() {
    super();
    this.weaponBehavior = new AxeBehavior();
  }
}
