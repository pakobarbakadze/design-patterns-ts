import { ChicagoPizzaStore, NYPizzaStore, PizzaType } from "./pizza-store";

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

const nyPizza = nyStore.orderPizza(PizzaType.CHEESE);
console.log("<----------------------------->");
const chicagoPizza = chicagoStore.orderPizza(PizzaType.CHEESE);
console.log("<----------------------------->");
const nyPepperoniPizza = nyStore.orderPizza(PizzaType.PEPPERONI);
