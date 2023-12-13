import { Beverage } from "./beverage";

abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
}

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Milk`;
  }

  public cost(): number {
    return this.beverage.cost() + 0.5;
  }
}

export { Mocha, Milk };
