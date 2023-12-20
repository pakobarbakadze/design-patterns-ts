import { TurkeyAdapter } from "./adapter";
import { Duck, MallardDuck } from "./duck";
import { WildTurkey } from "./turkey";

const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

console.log("The Turkey says...");
turkey.gobble();
turkey.fly();

console.log("\nThe Duck says...");
testDuck(duck);

console.log("\nThe TurkeyAdapter says...");
testDuck(turkeyAdapter);

function testDuck(duck: Duck) {
  duck.quack();
  duck.fly();
}
