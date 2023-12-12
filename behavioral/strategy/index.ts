import { King, Knight, Queen, Troll } from "./character";
import { SwordBehavior } from "./weapon-behavior";

const kingDavit = new King();
kingDavit.fight();

const queenTamar = new Queen();
queenTamar.fight();

const knight = new Knight();
knight.fight();

const troll = new Troll();
troll.fight();

queenTamar.setBehavior(new SwordBehavior());
queenTamar.fight();
