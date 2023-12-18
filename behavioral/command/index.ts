import {
  GarageDoorCloseCommand,
  GarageDoorOpenCommand,
  Light,
  LightOffCommand,
  LightOnCommand,
  MacroCommand,
} from "./command";
import { RemoteControl } from "./remote";
import { GarageDoor } from "./vendor";

const remote = new RemoteControl();

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
remote.setCommand(0, lightOn, lightOff);

const garageDoor = new GarageDoor();
const garageDoorUp = new GarageDoorOpenCommand(garageDoor);
const garageDoorDown = new GarageDoorCloseCommand(garageDoor);
remote.setCommand(1, garageDoorUp, garageDoorDown);

const onMacroCommand = new MacroCommand([lightOn, garageDoorUp]);
const offMacroCommand = new MacroCommand([lightOff, garageDoorDown]);
remote.setCommand(2, onMacroCommand, offMacroCommand);

console.log(remote.toString());

console.log("--- On commands ---");
remote.onButtonWasPushed(0);
remote.onButtonWasPushed(1);
console.log("--- Pushing macro on ---");
remote.onButtonWasPushed(2);
remote.onButtonWasPushed(3);
console.log("\n");

console.log("--- Off commands ---");
remote.offButtonWasPushed(0);
remote.offButtonWasPushed(1);
console.log("--- Pushing macro off ---");
remote.offButtonWasPushed(2);
remote.offButtonWasPushed(3);
console.log("\n");
