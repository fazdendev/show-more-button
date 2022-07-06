//  Модуль для проекта "Показать еще"

// Модуль showMore позволяет показывать изначально скрытые элементы при клике на кнопку, **скрытие/показ** происходят с помощью **добавления/удаления** класса `_hidden`

// ##Как работает

// Функция showMore считывает атрибуты data-articlesShown (Сколько показано изначально) и data-articlesToShow (Сколько показывать за клик) у родительского элемента, а затем использует их для показа статей, если ничего не указано, каждому из значений будет присвоено 3.
// ##Запуск
// Чтобы запустить функцию в нее нужно передать класс родительского элемента в виде строки и задержку между появлениям блоков в миллисекундах.
// Пример: showMore("articles", 300);

// Обязательно наименование по БЭМ

// Оболочка для должна иметь класс "родительский-элемент__wrapper", (например "articles__wrapper")

// А кнопка должна иметь класс "родительский-элемент__button", (например "articles__button")

function showMore(dataElement, ShowTimeout = 100) {
  // Переменные
  const dataElem = document.querySelector(`.${dataElement}`);
  const wrapperElem = document.querySelector(`.${dataElement}__wrapper`);
  const buttonElem = document.querySelector(`.${dataElement}__button`);
  let shownCounter;
  let showCounter;
  let showEndCounter;

  // Функции
  function scroll(i = 1) {
    if (i - 1 == showCounter || showCounter == 1) {
      buttonElem.scrollIntoView({ block: "end", behavior: "smooth" });
      return;
    } else {
      buttonElem.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }
  function hideElement(elementNumber, parentElement) {
    if (elementNumber && parentElement) {
      for (let i = elementNumber; i < parentElement.children.length; i++) {
        parentElement.children[i].classList.add("_hidden");
      }
    } else {
      console.log("Error");
    }
  }
  
  function showElementfunc(elementNumber, parentElement, i = shownCounter) {
    if (elementNumber && parentElement) {
      showEndCounter = shownCounter + showCounter;
      if (i == showEndCounter || i == parentElement.children.length) {
        return;
      } else {
        parentElement.children[i].classList.remove("_hidden");
        setTimeout(showElementfunc, ShowTimeout, elementNumber, parentElement, i + 1);
        scroll();
      }
    }
  }

  // Получение количества изначально показанных статей и статей к показу за клик data-articlesShown и data-articlesShow соответственно скрытие элементов исходя из значений
  if (dataElem) {
    if (dataElem.hasAttribute("data-articlesShown" && Number(dataElem.getAttribute("data-articlesShown")))) {
      shownCounter = Number(dataElem.getAttribute("data-articlesShown"));
    } else {
      shownCounter = 3;
    }
    if (dataElem.hasAttribute("data-articlesToShow") && Number(dataElem.getAttribute("data-articlesToShow"))) {
      showCounter = Number(dataElem.getAttribute("data-articlesToShow"));
    } else {
      showCounter = 3;
    }
  }

  // Cкрытие остальных, не показанных с начала статей
  if (dataElem && wrapperElem && Number.isInteger(shownCounter)) {
    hideElement(shownCounter, wrapperElem);
  } else {
    console.log("Error");
  }

  // Отслеживание клика на кнопку и показ такого количества статей, сколько указано в "data-articlesShow"
  if (buttonElem) {
    buttonElem.addEventListener("click", buttonMore);
    function buttonMore(e) {
      if (+shownCounter + +showCounter <= wrapperElem.children.length) {
        shownCounter = +shownCounter + +showCounter;
        showElementfunc(shownCounter, wrapperElem);
      } else if (+shownCounter + 3 <= wrapperElem.children.length) {
        shownCounter = +shownCounter + 3;
        showElementfunc(shownCounter, wrapperElem);
      } else if (+shownCounter + 2 <= wrapperElem.children.length) {
        shownCounter = +shownCounter + 2;
        showElementfunc(shownCounter, wrapperElem);
      } else if (+shownCounter + 1 <= wrapperElem.children.length) {
        shownCounter = +shownCounter + 1;
        showElementfunc(shownCounter, wrapperElem);
      } else {
        alert("Пусто");
      }
    }
  } else {
    console.log("Error");
  }
}

showMore("articles", 300);
showMore("news");
