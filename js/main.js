let bookmark = document.querySelector(".bookmark");
let btnSun = document.querySelector(".header__btn");
let sorts__text = document.querySelector(".sorts__text");
let header__inner__wrapper = document.querySelector(".navbar");
let header__input = document.querySelector(".header__input");
let bookmark__r__item = document.querySelector(".bookmark__r-item");
let bookmark__l__wrapper = document.querySelector(".bookmark__l-wrapper");
let bookmark__l__item = document.querySelector(".bookmark__l-item");
let bookmark__item__header = document.querySelector(".bookmark__item-header");
let bookmark__l__header = document.querySelector(".bookmark__l-header");
let bookmark__l__list = document.querySelector(".bookmark__l-list");

btnSun.addEventListener("click" , () => {
    
    btnSun.classList.toggle("bg-dark")
    bookmark__text.classList.toggle("text-light")
    bookmark__l__header.classList.toggle("text-light")
    bookmark__r_header.classList.toggle("text-light")
    bookmark__l__item.classList.toggle("bg-dark")
    bookmark__l__wrapper.classList.toggle("bg-dark")
    bookmark__r__item.classList.toggle("bg-dark")
    bookmark.classList.toggle("bg-dark")
    bookmark.classList.toggle("text-light")
    header__input.classList.toggle("bg-dark")
    header__inner__wrapper.classList.toggle("bg-dark")
    sorts__text.classList.toggle("text-light")
    sorts__result.classList.toggle("text-light")
    btnSun.classList.toggle("header__img--active")
    document.body.classList.toggle("bg-dark")
})

function renderPosts(array) {
    
}