interface WeaponBehavior {
  useWeapon(): void;
}

class KnifeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used knife.");
  }
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used bow and arrow.");
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used axe.");
  }
}

class SwordBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Used sword.");
  }
}

export {
  WeaponBehavior,
  AxeBehavior,
  BowAndArrowBehavior,
  KnifeBehavior,
  SwordBehavior,
};
