/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(2, 3));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
  if (n1 > 19) {
    return (n1 - 19) * 3;
  } else {
    return n1 - 19;
  }
}

console.log(crazyDiff(20));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(20));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(string) {
  if (string.indexOf("EPICODE") === 0) {
    return string;
  } else {
    return "EPICODE" + " " + string;
  }
}
console.log(epify("ciao"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

// inserire condizione che sia un numero positivo
function check3and7(positiveNumber) {
  if (positiveNumber % 3 === 0 || positiveNumber % 7 === 0) {
    return "divisibile per 3 o 7";
  } else {
    return "non divisibile per 3 o 7";
  }
}

console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

// function upperFirst(string) {
//   const arrayOfWords = string.split(" ");
//   for (let i = 0; i < arrayOfWords.length; i++) {
//     console.log(
//       arrayOfWords[i].charAt(0, 1).toUpperCase() + arrayOfWords[i].slice(1)
//     );
//   }
// }
// console.log(upperFirst("ciao come stai?"));

function upperFirst(string) {
  const arrayOfWords = string.split(" ");
  let newString = "";
  for (let i = 0; i < arrayOfWords.length; i++) {
    newString +=
      arrayOfWords[i].charAt(0, 1).toUpperCase() +
      arrayOfWords[i].slice(1) +
      " ";
  }
  return newString;
}
console.log(upperFirst("ciao come stai?"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  return string.slice(1, string.length - 1);
}

console.log(cutString("ciao come stai?"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const threeRandomNums = [];

function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    threeRandomNums.push(Math.floor(Math.random() * 11));
  }
}
giveMeRandom(3);

console.log(threeRandomNums);
