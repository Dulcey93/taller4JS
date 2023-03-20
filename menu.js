export class Menu {
  constructor() {
    this.data = null;
    this.object = null;
    this.array = [];
    this.arrayOfObjects = [];
  }

  display() {
    alert(`-----MENU------
  1. Data reading
  2. Create Object
  3. Show Object
  4. Create Array
  5. Show Array
  6. Delete first element of the Array
  7. Delete last element of the Array
  8. Delete any element of the Array
  9. Add element to the beginning of the Array
  10. Add element to the end of the array
  11. Create Array with Objects
  12. Display Array of objects with For loop
  13. Display Array of objects with ForEach method
  14. Show Array of objects with Map method and create a copy of the data
  15. Something
  0. Exit`);
  }

  readData() {
    this.data = prompt("Enter some data:");
    console.log(data);
  }

  createObject() {
    const key = prompt("Enter a key:");
    const value = prompt("Enter a value:");
    this.object = { [key]: value };
    console.log(this.object);
  }

  showObject() {
    alert(JSON.stringify(this.object));
  }

  createArray() {
    const length = prompt("Enter the length of the array:");
    this.array = Array.from({ length }, () => prompt("Enter an element:"));
  }

  showArray() {
    alert(JSON.stringify(this.array));
    this.array.forEach((element) => {
      console.log(element);
    });
  }

  deleteFirstElement() {
    this.array.shift();
  }

  deleteLastElement() {
    this.array.pop();
  }

  deleteElement() {
    const index = prompt("Enter the index of the element to delete:");
    this.array.splice(index, 1);
  }

  addToBeginning() {
    const element = prompt("Enter an element to add to the beginning:");
    this.array.unshift(element);
  }

  addToEnd() {
    const element = prompt("Enter an element to add to the end:");
    this.array.push(element);
  }

  createArrayOfObjects() {
    let objType = "";
    let objKeys = [];

    while (objType !== "exit") {
      objType = prompt("Enter object type ('exit' to quit):");
      if (objType === "exit") {
        break;
      }
      objKeys = prompt("Enter object keys separated by commas without space:").split(",");
      const newObject = {};
      objKeys.forEach((key) => {
        const value = prompt(`Enter ${key} value:`);
        newObject[key] = value;
      });
      this.arrayOfObjects.push({ type: objType, data: newObject });
    }
  }

  displayArrayOfObjectsForLoop() {
    console.log("Array of Objects:");
    for (let i = 0; i < this.arrayOfObjects.length; i++) {
      console.log(`Object ${i}: ${this.arrayOfObjects[i].type}`);
      const keys = Object.keys(this.arrayOfObjects[i].data);
      for (let j = 0; j < keys.length; j++) {
        console.log(`  ${keys[j]}: ${this.arrayOfObjects[i].data[keys[j]]}`);
      }
    }
  }

  displayArrayOfObjectsForEach() {
    console.log("Array of Objects:");
    this.arrayOfObjects.forEach((obj, index) => {
      console.log(`Object ${index}: ${obj.type}`);
      Object.keys(obj.data).forEach((key) => {
        console.log(`  ${key}: ${obj.data[key]}`);
      });
    });
  }

  displayArrayOfObjectsWithMap() {
    const mappedArray = this.arrayOfObjects.map((obj, index) => {
      const newObj = {};
      newObj["Type"] = obj.type;
      Object.keys(obj.data).forEach((key) => {
        newObj[key] = obj.data[key];
      });
      return newObj;
    });
  
    console.log("Mapped Array of Objects:");
    console.log(mappedArray);
  }
  

  something() {
    console.log("nothing for now");
  }
}
