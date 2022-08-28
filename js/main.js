let booksTemp = document.querySelector("#template").content;
let elWrapper = document.querySelector(".body")
let body = document.querySelector(".body");
let header = document.querySelector(".header");
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
let modal__text = document.querySelector(".modal__text");
let books__result = document.querySelector(".books__result")
let header__logo = document.querySelector(".header__logo")
let bookmark__btn__more = document.querySelector(".bookmark__btn-more")
let sorts__result = document.querySelector(".sorts__result")
let authToken = []
let {log: log, clear: clear} = console



btnSun.addEventListener("click" , () => {
    
    header__logo.classList.toggle("header__logo-fill")
    header.classList.toggle("bg-dark")
    modal__text.classList.toggle("text-dark")
    btnSun.classList.toggle("bg-dark")
    bookmark__item__header.classList.toggle("text-light")
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





function renderBooks(array) {
    
    
    elWrapper.innderHTML = null;
    
    let newFragment = document.createDocumentFragment()
    
    for (const item of array) {
        let elWrapper = booksTemp.cloneNode(true);
        
        elWrapper.querySelector(".bookmark__r-item-img").src = item.volumeInfo.imageLinks.Thumbnail;
        elWrapper.querySelector(".bookmark__r--header").textContent = item.volumeInfo.title;
        elWrapper.querySelector(".sorts__button").dataset = item.postId;
        console.log(elWrapper.target);
        
        newFragment.appendChild(elWrapper)
    log(item)

    }
    elWrapper.appendChild(newFragment)
}

elWrapper.addEventListener("click", function (evt) {
    
    let postItem = evt.target.dataset.postId;
    
    console.log(data.items);
    
    // if (postItem) {
    //     fetch(`https://books.googleapis.com/books/v1/volumes?maxResults=10&orderBy=newest&q=golang`, {
    //     method: 'GET',
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": authToken
    
    //     },
    // })
    // .then(res => res.json())
    // .then(data => {
    
    //     if (!data.error) {
    //         alert("Deleted")
    //         location.reload()
    //     } else {
    //         alert(data.error)
    //     }
    // })
    // }
}

)

fetch("https://books.googleapis.com/books/v1/volumes?maxResults=10&orderBy=newest&q=golang", {
method: 'GET',
headers: {
    "Content-Type": "application/json",
    "Authorization": authToken
}
})
.then(res => res.json())
.then(data => {
    if (!data.error) {
        renderBooks(data.array)
        books__result.innerHTML = data.totalItems
    }
})



// fetch("https://books.googleapis.com/books/v1/volumes?maxResults=10&orderBy=newest&q=golang", {
// method: 'GET',
// headers: {
//     "Content-Type": "application/json",
//     "Authorization": authToken
// }
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     if (!data.error) {
//         sorts__result.innerHTML = data.totalItems
//     }
// })
