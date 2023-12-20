abstract class CaffeineBeverage {
  public prepareReceipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  public abstract brew(): void;

  public abstract addCondiments(): void;

  public boilWater(): void {
    console.log("Boiling watter");
  }

  public pourInCup(): void {
    console.log("Pouring into cup");
  }
}

export class Tea extends CaffeineBeverage {
  public brew(): void {
    console.log("Stepping the tea");
  }

  public addCondiments(): void {
    console.log("Adding Lemon");
  }
}

export class Coffee extends CaffeineBeverage {
  public brew(): void {
    console.log("Dripping Coffee through filter");
  }

  public addCondiments(): void {
    console.log("Adding Sugar and Milk");
  }
}
