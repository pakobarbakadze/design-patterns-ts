import { Command, NoCommand } from "./command";

class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];

  constructor() {
    const noCommand = new NoCommand();
    this.onCommands = new Array(7).fill(noCommand);
    this.offCommands = new Array(7).fill(noCommand);
  }

  public setCommand(
    slot: number,
    onCommand: Command,
    offCommand: Command
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  public toString(): string {
    let lines: string = "";

    for (let i = 0; i < 7; i++) {
      lines =
        lines +
        `[slot ${i}] ${this.onCommands[i]?.constructor.name} ${this.offCommands[i]?.constructor.name}\n`;
    }

    return lines;
  }
}

export { RemoteControl };
