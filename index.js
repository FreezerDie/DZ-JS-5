// Задание 1
// Создать html-страницу для ввода имени пользователя.
// Необходимо проверять каждый символ, который вводит пользователь.
// Если он ввел цифру, то не отображать ее в input.

containsNumber = (str) => {
  return /\d/.test(str);
};

const inputName = document.querySelector(".input-name");

inputName.addEventListener("input", (event) => {
  const value = event.target.value;

  if (containsNumber(value)) {
    const chValue = value.substring(0, value.length - 1);
    inputName.value = chValue;
  }
});

// Задание 2
// Создать html-страницу с кнопкой Открыть и модальным окном.
// На модальном окне должен быть текст и кнопка Закрыть.
// Изначально модальное окно не отображается.
// При клике на кнопку Открыть появляется модальное окно,
// на кнопку Закрыть – исчезает.

const modalOpenBtn = document.querySelector(".modal_open-btn");
const modalCloseBtn = document.querySelector(".modal_close-btn");
const modalSwitch = document.querySelector(".modal-background");

modalOpenBtn.addEventListener("click", () => {
  modalSwitch.style.visibility = "visible";
});

modalCloseBtn.addEventListener("click", () => {
  modalSwitch.style.visibility = "hidden";
});

// Задание 3
// Создать html-страницу с футбольным полем,
// которое занимает всю ширину и высоту экрана,
// и мячом размером 100 на 100 пикселей.
// Сделать так, чтобы при клике мышкой по полю,
// мяч плавно перемещался на место клика. Учтите:
// необходимо, чтобы центр мяча останавливался именно там,
// где был совершен клик мышкой. Также предусмотрите,
// чтобы мяч не выходил за границы поля.

const field = document.querySelector(".field");

const ball = document.querySelector(".ball");

field.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // console.log("x = ", x, " y = ", y);

  ball.style.left = `${x - 27}px`;
  ball.style.top = `${y - 27}px`;
});

// Задание 4
//  Создать html-страницу со светофором и кнопкой,
// которая переключает светофор на следующий цвет.

const redLight = document.querySelector(".red_light");
const yellowLight = document.querySelector(".yellow_light");
const greenLight = document.querySelector(".green_light");

let currentColor = "red";
redLight.style.backgroundColor = "red";

const lightBtn = document.querySelector(".traffic_light-btn");

const changeLight = () => {
  if (currentColor == "red") {
    currentColor = "yellow";
    redLight.style.backgroundColor = "#333";
    yellowLight.style.backgroundColor = "yellow";
  } else if (currentColor == "yellow") {
    currentColor = "green";
    yellowLight.style.backgroundColor = "#333";
    greenLight.style.backgroundColor = "green";
  } else if (currentColor == "green") {
    currentColor = "red";
    greenLight.style.backgroundColor = "#333";
    redLight.style.backgroundColor = "red";
  }
};

lightBtn.addEventListener("click", changeLight);

// Задание 5
// Создать html-страницу со списком книг.
// При щелчке на книгу, цвет фона должен меняться на оранжевый.
// Учтите, что при повторном щелчке на другую книгу,
// предыдущей – необходимо возвращать прежний цвет.

const booksList = document.querySelector(".books-list");

let currentTarget;

booksList.addEventListener("click", (event) => {
  if (currentTarget == undefined) {
    currentTarget = event.target.id;
    document.querySelector(`#${currentTarget}`).style.backgroundColor =
      "orange";
  } else {
    document.querySelector(`#${currentTarget}`).style.backgroundColor = "white";
    currentTarget = event.target.id;
    document.querySelector(`#${currentTarget}`).style.backgroundColor =
      "orange";
  }
});
