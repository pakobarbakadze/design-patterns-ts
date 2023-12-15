import {
  GarageDoorCloseCommand,
  GarageDoorOpenCommand,
  Light,
  LightOffCommand,
  LightOnCommand,
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

console.log(remote.toString());

remote.onButtonWasPushed(0);
remote.onButtonWasPushed(1);
remote.onButtonWasPushed(2);

remote.offButtonWasPushed(0);
remote.offButtonWasPushed(1);
remote.offButtonWasPushed(2);
