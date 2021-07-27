const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

const currentPageUrl = '/contact';

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`,
// );

// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');

magicBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  const navElRef = document.querySelector('.site-nav');
  console.log(navElRef);

  const linkEl = document.querySelector(
    `.site-nav__link[href="${currentPageUrl}`,
  );
  console.log(linkEl);

  linkEl.classList.toggle('site-nav__link--current');
}
