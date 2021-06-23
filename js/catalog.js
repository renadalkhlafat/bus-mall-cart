/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option=document.createElement('option');
    option.textContent=Product.allProducts[i].name;
    selectElement.appendChild(option);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.items.value);

  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(addSelectedItemToCart(event)[0],addSelectedItemToCart(event)[1]);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(e) {
  // TODO: suss out the item picked from the select list
  let pickedItem = e.target.items.value
  // console.log(pickedItem);
  // TODO: get the quantity
  let qty=e.target.quantity.value;
// console.log(qty);
  // TODO: using those, add one item to the Cart
  cart.addItem(pickedItem,qty);
  // console.log(cart);
  return [pickedItem,qty];
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let updateCount =document.getElementById('itemCount');
  updateCount =cart.items.length;
  // console.log(updateCount);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(item,qty) {
  let cartContents =document.getElementById('cartContents');
  let ul = document.createElement('ul');
  cartContents.appendChild(ul);
  // TODO: Get the item and quantity from the form
  for (let index = 0; index < cart.items.length; index++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent= `${cart.items[index].qty} : ${cart.items[index].name} `;
  }
  // TODO: Add a new element to the cartContents div with that information
  
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
