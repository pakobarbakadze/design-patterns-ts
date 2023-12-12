import {
  AxeBehavior,
  BowAndArrowBehavior,
  SwordBehavior,
  WeaponBehavior,
} from "./weapon-behavior";

abstract class Character {
  protected weaponBehavior: WeaponBehavior | null = null;

  public fight(): void {
    this.weaponBehavior?.useWeapon();
  }

  public setBehavior(behavior: WeaponBehavior) {
    this.weaponBehavior = behavior;
  }
}

class King extends Character {
  constructor() {
    super();
    this.weaponBehavior = new SwordBehavior();
  }
}

class Queen extends Character {
  constructor() {
    super();
    this.weaponBehavior = new BowAndArrowBehavior();
  }
}
class Knight extends Character {
  constructor() {
    super();
    this.weaponBehavior = new SwordBehavior();
  }
}
class Troll extends Character {
  constructor() {
    super();
    this.weaponBehavior = new AxeBehavior();
  }
}

export { King, Queen, Knight, Troll };
