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

const outerShowTag = user.showTag

user.outerShowTag