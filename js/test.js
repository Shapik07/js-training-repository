"use strict";

console.log("Hello world!");
console.log("Я учу JS");

const user = { 
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this)
    console.log('showTag -> this.tag', this.tag)
  }
}

user.showTag()



class User {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Манго", "mango@mail.com");
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User("Поли", "poly@mail.com");
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }


console.log(poly.email)
console.log(mango.name)




