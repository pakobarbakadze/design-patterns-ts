export default abstract class MenuComponent {
  public add(menuComponent: MenuComponent): void {
    throw new Error("Unsupported");
  }

  public remove(menuComponent: MenuComponent): void {
    throw new Error("Unsupported");
  }

  public getChild(i: number): MenuComponent {
    throw new Error("Unsupported");
  }

  public getName(): string {
    throw new Error("Unsupported");
  }

  public getDescription(): string {
    throw new Error("Unsupported");
  }

  public getPrice(): number {
    throw new Error("Unsupported");
  }

  public isVegetarian(): boolean {
    throw new Error("Unsupported");
  }

  public print(): void {
    throw new Error("Unsupported");
  }
}
