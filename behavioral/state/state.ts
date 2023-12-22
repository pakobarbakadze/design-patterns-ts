import { GumballMachine } from "./gumball-machine";

export interface State {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
}

export class NoQuarterState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You inserted a quarter");
    this.gumballMachine.setState(this.gumballMachine.getHasQuartertState());
  }

  ejectQuarter(): void {
    console.log("You haven't inserted a quarter");
  }

  turnCrank(): void {
    console.log("You turned, but there's no quarter");
  }

  dispense(): void {
    console.log("You need to pay first");
  }
}

export class SoldOutState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You cant insert a quarter, the machine is sold out");
  }

  ejectQuarter(): void {
    console.log("There is not quarter injected");
  }

  turnCrank(): void {
    console.log("You turned the crank but there are not gumballs");
  }

  dispense(): void {
    console.log("No gumball dispended");
  }
}

export class HasQuarterState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You can't insert another quarter");
  }

  ejectQuarter(): void {
    console.log("Quarter returned");
    this.gumballMachine.setState(this.gumballMachine.getNoQuartertState());
  }

  turnCrank(): void {
    console.log("You turned...");
    this.gumballMachine.setState(this.gumballMachine.getSoldState());
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }
}

export class SoldState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("Please wait we are already giving you a gumball");
  }

  ejectQuarter(): void {
    console.log("You already turned the crank");
  }

  turnCrank(): void {
    console.log("Turning twice doesn't get ypu another gumball");
  }

  dispense(): void {
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuartertState());
    } else {
      console.log("Oops, out of gumballs!");
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}
