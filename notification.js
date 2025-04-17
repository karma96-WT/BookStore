let numbers = document.getElementById("num-of-notification");
let cart = JSON.parse(localStorage.getItem("cart")) || []; 
numbers.innerHTML=cart.length;
document.querySelector(".nav-bar-container").classList.toggle("active"); 

let nofi_count = document.getElementById("notification-count");
nofi_count.innerHTML=cart.length;

const Clas = document.querySelector('.lists');

cart.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('notification-lists')
    element.innerHTML= `Book with title ${item.title} added to the cart successfully!!! Happy shoping and have a great one`;
    Clas.append(element);
});