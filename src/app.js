/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  const choosenWho = chooseItem(who);

  let action = ["ate", "peed", "crushed", "broke"];
  const choosenAction = chooseItem(action);

  let what = ["my homework", "my phone", "the car"];
  const choosenWhat = chooseItem(what);

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const choosenWhen = chooseItem(when);

  const newExcuse = `${choosenWho} ${choosenAction} ${choosenWhat} ${choosenWhen}`;

  const p = document.querySelector("#excuse");
  p.textContent = newExcuse;

  function chooseItem(array) {
    let randomItem = Math.floor(Math.random() * array.length);
    return array[randomItem];
  }
};
