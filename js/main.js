let booksTemp = document.querySelector("#template").content;
let elWrapper = document.querySelector(".bookmark__r-list")
let body = document.querySelector(".body");
let header = document.querySelector(".header");
let bookmark = document.querySelector(".bookmark");
let btnSun = document.querySelector(".header__btn");
let sorts__text = document.querySelector(".sorts__text");
let header__inner__wrapper = document.querySelector(".navbar");
let headerInput = document.querySelector(".header__input");
let bookmark__r__item = document.querySelector(".bookmark__r-item");
let bookmark__l__wrapper = document.querySelector(".bookmark__l-wrapper");
// let bookmarkRightWrapper = document.querySelector(".bookmark__r-wrapper");
let bookmark__l__item = document.querySelector(".bookmark__l-item");
let bookmark__item__header = document.querySelector(".bookmark__item-header");
let bookmark__l__header = document.querySelector(".bookmark__l-header");
let bookmark__l__list = document.querySelector(".bookmark__l-list");
// let bookmark__r__header = document.querySelector(".bookmark__r-header");
let modal__text = document.querySelector(".modal__info");
let elSortButton = document.querySelector(".sorts__button")
let books__result = document.querySelector(".books__result")
let header__logo = document.querySelector(".header__logo")
let bookmark__btn__more = document.querySelector(".bookmark__btn-more")
let offcanvas = document.querySelector(".offcanvas")
let elForm = document.querySelector(".header__form")
let read = document.querySelector(".read")
let authToken = localStorage.getItem("token");
let {log: log, clear: clear} = console

// 

btnSun.addEventListener("click" , () => {
    
    header__logo.classList.toggle("header__logo-fill")
    header.classList.toggle("bg-dark")
    // modal__text.classList.toggle("text-dark")
    btnSun.classList.toggle("bg-dark")
    bookmark__item__header.classList.toggle("text-light")
    bookmark__text.classList.toggle("text-light")
    bookmark__l__header.classList.toggle("text-light")
    // bookmark__r__header.classList.toggle("text-light")
    bookmark__l__item.classList.toggle("bg-dark")
    bookmark__l__wrapper.classList.toggle("bg-dark")
    // bookmark__r__item.classList.toggle("bg-dark")
    bookmark.classList.toggle("bg-dark")
    bookmark.classList.toggle("text-light")
    headerInput.classList.toggle("bg-dark")
    headerInput.classList.toggle("text-white")
    header__inner__wrapper.classList.toggle("bg-dark")
    // sorts__text.classList.toggle("text-light")
    // sorts__result.classList.toggle("text-light")
    btnSun.classList.toggle("header__img--active")
    document.body.classList.toggle("bg-dark")
})



elForm.addEventListener("submit" , function (evt) {
    evt.preventDefault()
    
    if (headerInput.value.length > 1) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${headerInput.value}`)
        .then(req => req.json())
        .then(data => {
            renderBooks(data.items)
        })
    }
})

elSortButton.addEventListener("click" , function() {
    let Toxirrrr = headerInput.value.trim()
    
    if (Toxirrrr.length > 1) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${Toxirrrr}&orderBy=newest`, )
        .then(Toxirrrr => Toxirrrr.json())
        .then(data => { 
            renderBooks(data.items)
        })
    }
})

function renderBooks(array) {
    
    elWrapper.innderHTML = null;
    
    let newFragment = document.createDocumentFragment()
    
    for (const item of array) {
        let template = booksTemp.cloneNode(true);
        
        template.querySelector(".bookmark__r-item-img").src = item.volumeInfo.imageLinks.thumbnail;
        template.querySelector(".bookmark__r--header").textContent = item.volumeInfo.title;
        template.querySelector(".bookmark__r-text").textContent = item.volumeInfo.authors;
        template.querySelector(".bookmark__r-year").textContent = item.volumeInfo.publishedDate;
        template.querySelector(".read").href = item.volumeInfo.infoLink;
        template.querySelector(".read").href = item.volumeInfo.infoLink;
        
        newFragment.appendChild(template)
        
    }
    
    elWrapper.appendChild(newFragment)
}

// elWrapper.addEventListener("click", function (evt) {

//     let postItem = evt.target.dataset.postId;


// }

// )

// let elOrder = document.querySelector(".sorts__button")

// elOrder.addEventListener("click" , function () {
//     if (headerInput.value.length > 1) {
//         fetch(`https://www.googleapis.com/books/v1/volumes?q=${headerInput.value}&orderBy=newest`)
//         .then(req => req.json())
//         .then(data => {
//             renderBooks(data.items , elWrapper)
//         })
//     }
// })


// fetch("https://books.googleapis.com/books/v1/volumes?maxResults=9&orderBy=newest&q=golang", {
// method: 'GET',
// headers: {
//     "Content-Type": "application/json",
//     "Authorization": authToken
// }
// })
// .then(res => res.json())
// .then(data => {
//     if (!data.error) {
//         renderBooks(data.items)

//         books__result.innerHTML = data.totalItems
//     }
// })


elWrapper.addEventListener("click" , function(evt) {
    
    let current = evt.target.dataset 
    
    if (current.infoId) {
        
        fetch(`https://www.googleapis.com/books/v1/volumes/${current.infoId}`)
        .then(req => req.json())
        .then(data =>renderModal(data) )
        
        
        
        function renderModal(array) {
            
            document.querySelector(".modal_title").textContent = array.volumeInfo.title
            document.querySelector(".modal__img").src = array.volumeInfo.imageLinks.Thumbnail
            document.querySelector(".modal__info").textContent = array.volumeInfo.description
            
            
            let wrapperAuthor = document.querySelector(".author")
            
            wrapperAuthor.innerHTML = null
            
            let newSpanauthor = document.createElement("span")
            
            newSpanauthor.classList.add("modal__bottom_atr")
            newSpanauthor.textContent = array.volumeInfo.authors[i]
            wrapperAuthor.appendChild(newSpanauthor)
            
            
            let wrapperYear = document.querySelector(".year")
            
            wrapperYear.innerHTML = null
            
            let newSpanYear = document.createElement("span")
            
            newSpanYear.classList.add("modal__bottom_atr")
            newSpanYear.textContent = array.volumeInfo.publishedDate.split("-")[0]
            wrapperYear.appendChild(newSpanYear)
            
            
            let wrapperPublisher = document.querySelector(".publisher")
            
            wrapperPublisher.innerHTML = null
            
            let newSpanPublisher = document.createElement("span")
            
            newSpanPublisher.classList.add("modal__bottom_atr")
            newSpanPublisher.textContent = array.volumeInfo.publisher.split("-")[0]
            wrapperPublisher.appendChild(newSpanPublisher)
            
            
            let wrapperCategories = document.querySelector(".catergories")
            
            wrapperCategories.innerHTML = null
            
            let newSpanCategory = document.createElement("span")
            
            newSpanCategory.classList.add("modal__bottom_atr")
            newSpanCategory.textContent = array.volumeInfo.categories[0].split("/")[i]
            wrapperCategories.appendChild(newSpanCategory)
            
            
            let wrapperPage = document.querySelector(".page")
            
            wrapperPage.innerHTML = null
            
            let newSpanPage = document.createElement("span")
            
            newSpanPage.classList.add("modal__bottom_atr")
            newSpanPage.textContent = array.volumeInfo.pageCount
            wrapperPage.appendChild(newSpanPage)
            
            let elReadBtn = document.querySelector(".modal__read_btn")
            
            elReadBtn.href = array.volumeInfo.previewLink
        }
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
