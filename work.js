let Pass1 = document.getElementById("password1");
let Pass2 = document.getElementById("password2");
let Pass3 = document.getElementById("password3");
let Pass4 = document.getElementById("password4");
// let password = ""
// Start of character arrays:
let characterPool = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "£",
  "$",
  "%",
  "_",
  "*",
  "@",
  "#",
  "?",
  "~"
];

// Random number generators:

function randomNumber() {
  return Math.floor(Math.random() * 72);
}
// Password generator function:

function passwordGenerator() {
  password = "";
  for (let i = 0; i < 10; i++) 
  [(password += characterPool[randomNumber()])];
  return password;
}

function onClick() {
  Pass1.textContent = passwordGenerator();
  Pass2.textContent = passwordGenerator();
  Pass3.textContent = passwordGenerator();
  Pass4.textContent = passwordGenerator();
}
