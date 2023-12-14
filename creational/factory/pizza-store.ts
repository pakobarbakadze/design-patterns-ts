import {
  ChicagoStyleCheesePizza,
  ChicagoStylePepperoniPizza,
  NYStyleCheesePizza,
  NYStylePepperoniPizza,
  Pizza,
} from "./pizza";

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
    } else if (type === PizzaType.PEPPERONI) {
      return new NYStylePepperoniPizza();
    } else return new Pizza();
  }
}

class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    if (type === PizzaType.CHEESE) {
      return new ChicagoStyleCheesePizza();
    } else if (type === PizzaType.PEPPERONI) {
      return new ChicagoStylePepperoniPizza();
    } else return new Pizza();
  }
}

export { NYPizzaStore, ChicagoPizzaStore };
