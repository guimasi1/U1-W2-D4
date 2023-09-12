// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const threeRandomNums = [];

function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    threeRandomNums.push(Math.floor(Math.random() * 11));
  }
}

giveMeRandom(4);

let randomNums = threeRandomNums;
function checkArray(randomNums) {
  for (let i = 0; i < randomNums.length; i++) {
    if (randomNums[i] < 5) {
      console.log(`${randomNums[i]} è minore di 5`);
    } else if (randomNums[i] > 5) {
      console.log(`${randomNums[i]} è maggiore di 5`);
    } else {
      console.log(`${randomNums[i]} è uguale a 5`);
    }
  }
}

console.log(checkArray(randomNums));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
const shoppingCart = [
  {
    price: "50",
    name: "pentola",
    id: "001",
    quantity: "2",
  },
  {
    price: "2",
    name: "calzini",
    id: "002",
    quantity: "3",
  },
  {
    price: "1",
    name: "candela",
    id: "002",
    quantity: "4",
  },
];

let total = 0;

function shoppingCartTotal(shoppingCart) {
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
}
shoppingCartTotal(shoppingCart);
console.log(total);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
const spazzola = {
  price: "15",
  name: "spazzola",
  id: "004",
  quantity: "1",
};
function addToShoppingCart(newProduct) {
  shoppingCart.push(newProduct);
  console.log(shoppingCart);

  //   if (newProduct.quantity === 1) {
  //     shoppingCart.push(newProduct);
  //     console.log(shoppingCart);
  //   } else {
  //     shoppingCart.push(newProduct) * parseInt(newProduct.quantity);
  //   }
}

addToShoppingCart(spazzola);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
let highestPrice = 0;
let highestPriceObject = {};

function maxShoppingCart(cart) {
  for (let i = 0; i < cart.length; i++) {
    if (parseInt(cart[i].price) > highestPrice) {
      highestPriceObject = cart[i];
      highestPrice = parseInt(cart[i].price);
    }
  }
}
maxShoppingCart(shoppingCart);
console.log(highestPriceObject);
// let highestPrice = 0;

// function maxShoppingCart(shoppingCart) {
//   for (let i = 0; i < shoppingCart.length; i++) {

//     if (shoppingCart[i].price > highestPrice) {
//       highestPrice = shoppingCart[i].price;
//       console.log(shoppingCart[i]);
//     }
//   }
// }

// maxShoppingCart();
// console.log(highestPrice);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
let countTimesOverNum = 0;
function loopUntil(num) {
  while (countTimesOverNum < 3) {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    if (randomNumber > num) {
      countTimesOverNum++;
    }
  }
}

console.log(loopUntil(4));
console.log(countTimesOverNum);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
const array = [1, 2, 3];
let sumArray = 0;

function average(array) {
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
    console.log("ciao");
  }
  const average = sumArray / array.length;
  console.log(average);
}

average(array);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const parole = ["cucu", "tututu", "mammamia"];
let comparator = 0;
let longestWord = "";

function longest(strings) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > comparator) {
      longestWord = strings[i];
      comparator = strings[i].length;
    }
  }
}

longest(parole);
console.log(longestWord);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

//
function antiSpam(emailContent) {
  if (emailContent.search("SCAM") === -1) {
    console.log("spam trovato");
  } else {
    console.log("spam non trovato");
  }
}

antiSpam("questa mail è SPAM");

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

const date1 = new Date("09/12/2023");
const date2 = new Date("09/10/2023");
console.log(date1);

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));

console.log(diffDays);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
