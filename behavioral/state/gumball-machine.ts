import {
  HasQuarterState,
  NoQuarterState,
  SoldOutState,
  SoldState,
  State,
} from "./state";

export class GumballMachine {
  private count: number;
  private state: State;

  private soldOutState: State;
  private noQuarterState: State;
  private hasQuarterState: State;
  private soldState: State;

  constructor(numberGumballs: number) {
    this.count = numberGumballs;

    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);

    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  insertQuarter(): void {
    this.state.insertQuarter();
  }

  ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  turnCrack(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: State): void {
    this.state = state;
  }

  getState(): State {
    return this.state;
  }

  getHasQuartertState(): State {
    return this.hasQuarterState;
  }

  getNoQuartertState(): State {
    return this.noQuarterState;
  }

  getSoldState(): State {
    return this.soldState;
  }

  getSoldOutState(): State {
    return this.soldOutState;
  }

  getCount(): number {
    return this.count;
  }

  releaseBall(): void {
    console.log("A gumball comes rolling out the slot...");
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }
}
