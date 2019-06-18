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


//Create hover over for nav items
const navItems = document.querySelector(".nav");
navItems.addEventListener("mouseenter", event => {
    event.target.style.backgroundColor = "#D3D3D3";
})
navItems.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "white";
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


