import { Espresso, HouseBlend } from "./beverage";
import { Milk, Mocha } from "./condiment";

const espresso = new Espresso();
console.log(`${espresso.getDescription()}: $${espresso.cost()}`);

let houseBland = new HouseBlend();
houseBland = new Mocha(houseBland);
houseBland = new Mocha(houseBland);
houseBland = new Milk(houseBland);
console.log(`${houseBland.getDescription()}: $${houseBland.cost()}`);
