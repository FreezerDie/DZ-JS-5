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
