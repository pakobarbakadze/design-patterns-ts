class Pizza {
  protected name: string = "Standart";
  protected dough: string = "Standart";
  protected sauce: string = "Standart";
  protected toppings: string[] = [];

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log("Tossing dough...");
    console.log("Adding sauce...");
    console.log("Adding toppings:");
    this.toppings.forEach((topping) => console.log(` ${topping}`));
  }

  public bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  public cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }

  public box(): void {
    console.log("Place pizza in official PizzaStore box");
  }

  public getName(): string {
    return this.name;
  }
}

class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "NY Style Sauce and Cheese Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";

    this.toppings.push("Grated Reggiano Cheese");
  }
}

class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago Style Deep Dish Cheese Pizza";
    this.dough = "Extra Thick Crust Dough";
    this.sauce = "Plum Tomato Sauce";

    this.toppings.push("Shredded Mozzarella Cheese");
  }

  public cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}

export { Pizza, NYStyleCheesePizza, ChicagoStyleCheesePizza };
