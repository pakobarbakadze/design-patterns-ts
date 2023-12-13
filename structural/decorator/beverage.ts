abstract class Beverage {
  protected description: string = "Unknown Beverage";

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  public cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  public cost(): number {
    return 0.89;
  }
}

export { Beverage, Espresso, HouseBlend };
