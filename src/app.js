window.onload = () => {
  document.querySelector(".card").innerHTML = randomNumber();
  document.querySelector(".card").innerHTML = randomPintas();
};

let randomNumber = () => {
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
  let ranNum = Math.floor(Math.random() * numbers.length);
  return numbers[ranNum];
};

let randomPintas = () => {
  let pintas = ["♦", "♥", "♠", "♣"];
  let ranPin = Math.floor(Math.random() * pintas.length);
  return pintas[ranPin];
};
