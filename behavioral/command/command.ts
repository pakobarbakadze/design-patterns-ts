import { GarageDoor, Light } from "./vendor";

interface Command {
  execute(): void;
}

class NoCommand implements Command {
  execute(): void {
    console.log("There is no command on that slot");
  }
}

class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }
}

class GarageDoorOpenCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.up();
  }
}

class GarageDoorCloseCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.down();
  }
}

export {
  Command,
  NoCommand,
  Light,
  LightOnCommand,
  LightOffCommand,
  GarageDoorOpenCommand,
  GarageDoorCloseCommand,
};
