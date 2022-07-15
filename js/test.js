"use strict";

console.log("Hello world!");
console.log("Я учу JS");



class Storage {

    getItems() {
        return this.items
    };

    addItem(newItem) { 
        this.items.push(newItem)
    };

      removeItem(itemToRemove) {
      const deleted = this.items.indexOf(itemToRemove)
      this.items.splice(deleted, 1)
    };
    
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]





