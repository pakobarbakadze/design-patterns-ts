import MenuComponent from "./menu-component";

export default class MenuItem extends MenuComponent {
  private name: string;
  private description: string;
  private vegetarian: boolean;
  private price: number;

  constructor(
    name: string,
    description: string,
    vegetairan: boolean,
    price: number
  ) {
    super();

    this.name = name;
    this.description = description;
    this.vegetarian = vegetairan;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getPrice(): number {
    return this.price;
  }

  public isVegetarian(): boolean {
    return this.vegetarian;
  }

  public print(): void {
    console.log(
      ` ${this.getName()} ${
        this.isVegetarian() ? ", (v)" : ""
      }, ${this.getPrice()}`
    );
    console.log(`   -- ${this.getDescription()}`);
  }
}
