# Модуль для проекта "Кнопка показать еще"

Модуль showMore позволяет показывать изначально скрытые элементы при клике на кнопку, **скрытие/показ** происходят с помощью **добавления/удаления** класса `_hidden`

##Как работает

Функция showMore считывает атрибуты data-articlesShown (Сколько показано изначально) и data-articlesToShow (Сколько показывать за клик) у родительского элемента, а затем использует их для показа статей, если ничего не указано, каждому из значений будет присвоено 3.
##Запуск
Чтобы запустить функцию в нее нужно передать класс родительского элемента в виде строки и задержку между появлениям блоков в миллисекундах.
Пример: `showMore("articles", 300);`

**Обязательно наименование по БЭМ**

Оболочка для должна иметь класс `"родительский-элемент__wrapper"`, (например `"articles__wrapper"`)

А кнопка должна иметь класс `"родительский-элемент__button"`, (например `"articles__button"`)




# Module for the project "Show more button" 

The showMore module allows you to show initially hidden elements when clicking on the button, **hide/show** is done using **add/remove** the `_hidden` class

##How does it work

The showMore function reads the data-articlesShown (How many initially shown) and data-articlesToShow (How many to show per click) attributes on the parent element, and then uses them to show articles, if none is specified, each value will be set to 3.
##Launch
To run a function, you need to pass the class of the parent element to it as a string and the delay between the appearance of blocks in milliseconds.
Example: `showMore("articles", 300);`

**Mandatory BEM naming**

The wrapper for must have the class `"parent-element__wrapper"`, (e.g. `"articles__wrapper"`)

And the button must have the class `"parent-element__button"`, (e.g. `"articles__button"`)