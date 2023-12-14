import { ChicagoStyleCheesePizza, NYStyleCheesePizza, Pizza } from "./pizza";

export enum PizzaType {
  CHEESE,
  VEGGIE,
  CLAM,
  PEPPERONI,
}

abstract class PizzaStore {
  public orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: PizzaType): Pizza;
}

class NYPizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    if (type === PizzaType.CHEESE) {
      return new NYStyleCheesePizza();
    } else return new Pizza();
  }
}

class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    if (type === PizzaType.CHEESE) {
      return new ChicagoStyleCheesePizza();
    } else return new Pizza();
  }
}

export { NYPizzaStore, ChicagoPizzaStore };
