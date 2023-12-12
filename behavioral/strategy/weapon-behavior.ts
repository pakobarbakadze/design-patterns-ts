export interface WeaponBehavior {
  useWeapon(): void;
}

export class KnifeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used knife.");
  }
}

export class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used bow and arrow.");
  }
}

export class AxeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used axe.");
  }
}

export class SwordBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used sword.");
  }
}
