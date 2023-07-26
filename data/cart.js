//const cart = [];
let cart = JSON.parse(localStorage.getItem("CART")) || [];
let cartQuantity = JSON.parse(localStorage.getItem("CART-QUANTITY")) || [];
let totalPrice = JSON.parse(localStorage.getItem("CART-TOTAL-PRICE")) || [];
