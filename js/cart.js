/* global Cart */
'use strict';
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let head=document.createElement('thead');
  table.appendChild(head);

let tableHeader=document.createElement('th');
head.appendChild(tableHeader);
tableHeader.textContent='Remove';

let tableHeaderQty=document.createElement('th');
head.appendChild(tableHeaderQty);
tableHeaderQty.textContent='Quantity';

let tableHeaderItem=document.createElement('th');
head.appendChild(tableHeaderItem);
tableHeaderItem.textContent='Item';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  

  // TODO: Find the table body
  
  // // TODO: Iterate over the items in the cart
  
  let tableBody = document.querySelector('tbody');
  table.appendChild(tableBody);
  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', i)
    tableBody.appendChild(tr);
    let td = document.createElement('td')
    td.textContent = 'X'
    td.setAttribute('class', 'remove')
    tr.appendChild(td);

    let quintd = document.createElement('td')
    quintd.textContent = cart.items[i].quantity;
    tr.appendChild(quintd);

    let prodtd = document.createElement('td')
    prodtd.textContent = cart.items[i].product;
    tr.appendChild(prodtd);
  }

  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  // console.log(event.target);
  if (event.target.textContent==='X'){
    cart.removeItem(event.target.parentElement.id);
  }
  localStorage.setItem('cart',JSON.stringify(cart.items));
  renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
