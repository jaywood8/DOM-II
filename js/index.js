// Your code goes here

//Creates a text alert when user clicks on Fun Bus
let funBusLogo = document.querySelector(".logo-heading");
funBusLogo.addEventListener("click", event => {
    ;
    alert("This is one fun bus!");
})

//Highlight Fun Bus when hovered over
funBusLogo.addEventListener("mouseenter", event => {
    event.target.style.backgroundColor = "yellow";
})
funBusLogo.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "white";
})


//Create hover over for nav bar
const navItems = document.querySelector(".nav");
navItems.addEventListener("mouseenter", event => {
    event.target.style.backgroundColor = "#D3D3D3";
})
navItems.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "white";
})


//Create hover over for each nav item with forEach with a 500ms timeout
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
    link.addEventListener('mouseover', event => {
        event.target.style.border = "2px solid red";
        setTimeout(function() {
            event.target.style.border = "";
          }, 500);
    }) 
})


//Change main img on click
let busImage = document.querySelector(".intro img")
busImage.addEventListener('click', ev => {
    if(document.getElementById("main-img").src === "http://127.0.0.1:5500/img/fun-bus.jpg") {
        document.getElementById("main-img").src = "http://127.0.0.1:5500/img/fun-bus-3.jpg";
    } else if(document.getElementById("main-img").src === "http://127.0.0.1:5500/img/fun-bus-3.jpg") {
        document.getElementById("main-img").src = "http://127.0.0.1:5500/img/fun-bus.jpg";
    };
})

//2 Steps: add random color border to bottom picture w/ random color generator and add event listener
//1. generate random color (from stack overflow)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//2. apply random colored border to image upon dblclick 
let destImg = document.querySelector(".content-destination img");
destImg.addEventListener("dblclick", event => {
    event.target.style.border = `5px solid ${getRandomColor()}`;
})

//2 Steps: generate error and add EL for error 
//1. breaks img src link upon single click
let badLink = "notgonnawork"
let failedImg = document.querySelector(".img-content img")
failedImg.addEventListener("click", e => {
    document.querySelector(".img-content img").src = badLink;    
})

//2. generate error if Let's Go image fail to load along with alert text
failedImg.addEventListener('error', evt => {
    console.log('img failure');
    alert("You ruined our trip!")
})

//alert whenever intro p text is copied
let paraText = document.querySelectorAll(".intro p")
paraText.forEach(text => {
    text.addEventListener('copy', ev => {
    alert("Thief! Plagiarist!")
    })
})

//alert on keydown on main img
window.addEventListener("keydown", e => {
    alert("Key down");
})

//alert on right click
let alertImg = document.querySelectorAll(".img-content img")

alertImg.forEach(img => {
    img.addEventListener('auxclick', evt => {
    event.target.style.border = "2px solid red";
    })
})

//console log something on scroll
window.addEventListener('scroll', e => {
    console.log("We scrollin'");
})


