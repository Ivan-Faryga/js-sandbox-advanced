/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'This is a main title';
console.log(titleEl);

// document.body.appendChild(titleEl);

const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;
console.log(imageEl);

// document.body.appendChild(imageEl);

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const ulRef = document.querySelector('.site-nav');
ulRef.insertBefore(navItemEl, ulRef.firstElementChild);

const heroElRef = document.querySelector('.hero');

heroElRef.append(titleEl, imageEl);
