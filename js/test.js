let available = 10;
let order = 5;

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  // Change code above this line
    return message;
}

