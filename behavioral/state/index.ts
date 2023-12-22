import { GumballMachine } from "./gumball-machine";

const gumballMachine = new GumballMachine(10);

console.log("\n ---------");
console.log(gumballMachine);

console.log("\n ---------");
gumballMachine.insertQuarter();
gumballMachine.turnCrack();

console.log("\n ---------");
console.log(gumballMachine);
