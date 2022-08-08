"use strict";

function removeChar(str){
  const array = str.split('')
  const deleteElements = array.slice(1, -1).join('')
  console.log(deleteElements);
};

removeChar("eloquent");
removeChar("country");
removeChar("person");


