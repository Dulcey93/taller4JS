import { Menu } from "./menu.js";

const menu = new Menu();

while (true) {
  menu.display();

  const choice = prompt("Enter your choice:");

  switch (choice) {
    case "1":
      menu.readData();
      break;

    case "2":
      menu.createObject();
      break;

    case "3":
      menu.showObject();
      break;

    case "4":
      menu.createArray();
      break;

    case "5":
      menu.showArray();
      break;

    case "6":
      menu.deleteFirstElement();
      break;

    case "7":
      menu.deleteLastElement();
      break;

    case "8":
      menu.deleteElement();
      break;

    case "9":
      menu.addToBeginning();
      break;

    case "10":
      menu.addToEnd();
      break;

    case "11":
      menu.createArrayOfObjects();
      break;
    case "12":
      menu.displayArrayOfObjectsForLoop();
      break;
    case "13":
      menu.displayArrayOfObjectsForEach();
      break;
    case "14":
      menu.displayArrayOfObjectsWithMap();
      break;
    case "15":
      menu.something();
      break;
  }
}
