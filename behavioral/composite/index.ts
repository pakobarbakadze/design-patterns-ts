import Menu from "./menu";
import MenuItem from "./menu-item";
import Waitress from "./waitress";

const pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
const dinnerMenu = new Menu("DINNER MENU", "Launch");
const cafeMenu = new Menu("CAFE MENU", "Dinner");
const dessertMenu = new Menu("DESSERT MENU", "Dessert of course!");

const allMenus = new Menu("ALL MENUS", "All menus combined");

allMenus.add(pancakeHouseMenu);
allMenus.add(dinnerMenu);
allMenus.add(cafeMenu);

dinnerMenu.add(new MenuItem("Pasta", "Pasta description", true, 2.89));

dinnerMenu.add(dessertMenu);

dessertMenu.add(new MenuItem("Apple pie", "Apple pie description", true, 1.59));

const waitress = new Waitress(allMenus);
waitress.printMenu();
