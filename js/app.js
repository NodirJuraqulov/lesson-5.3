
// ES5 -> HTMLCollection
console.log( document.getElementsByTagName("h2") ); // HTMLCollection []
console.log( document.getElementById("text") ); // Element
console.log( document.getElementsByClassName("title") ); // HTMLCollection []

// Node -> tag, attribute, text, space, comment
// Element -> tag, attribute

// ES6+ -> NodeList
console.log( document.querySelectorAll(".title") );
console.log( document.querySelector(".wrapper .title") );

const titleEl = document.querySelector("#text")


function action() {
    titleEl.innerHTML = titleEl.innerHTML + " 2015"
    titleEl.style.color = "red"
    titleEl.style.fontSize = "60px"
}
function reset() {
    titleEl.innerHTML = "DOM"
    titleEl.style.color = "black"
    titleEl.style.fontSize = ""
}


function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#fff";
}
function lightMode() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "black";
}







const boxEL = document.querySelector(".box");

console.log(boxEL.nextElementSibling);  //  O'zidan keyin kelganini olib beradi (tagidagini);
console.log(boxEL.previousElementSibling);  //  Tepasidagini olib beradi;
console.log(boxEL.children);    //  bolalarini olib beradi;
console.log(boxEL.firstElementChild);   // birinchi element;
console.log(boxEL.lastElementChild);    // oxirgi element;


boxEL.parentElement.parentElement.lastElementChild.style.color = "green";

boxEL.lastElementChild.firstElementChild.nextElementSibling.style.color = "red"








// Popup - modal;

const wrapperEL = document.querySelector(".wrapper");

wrapperEL.classList.add("laylo");
wrapperEL.classList.remove("action");

wrapperEL.classList.contains("action"); // false
wrapperEL.classList.contains("laylo"); // true




const share = document.querySelector(".share__popup");

function showPopup() {
    share.classList.add("show");
    showOverlay();
}
function hidePopup() {
    share.classList.remove("show");
    hideOverlay();
}



const form = document.querySelector(".form__popup");

function form_p() {
    form.classList.add("form__show");
    showOverlay();
}
function hide_form_p() {
    form.classList.remove("form__show");
    // form.classList.add("form__left");
    hideOverlay();
}



const overlay = document.querySelector(".overlay");

function showOverlay() {
    overlay.classList.add("show")
}
function hideOverlay() {
    overlay.classList.remove("show")
}

function closeAllPopup() {
    hide_form_p();
    hidePopup();
}

