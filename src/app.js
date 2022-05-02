/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //querySelector selecciona un elemento html, en este caso selecciona todos los elementos que estén usando la clase .card//
  //classList.add añade clase al alemento seleccionado//
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
//   //setTimaout es una funcion de JS que llama una función y como argumento recibe un callback
//   setTimeout(() => {}, 1000); //1000 = 1 segundo, se le está indicando que luego de 1 segundo se ejecute
// };

const generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  const indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
