// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

// creates the parent container and adds class and appends to parent element
let headerContainer = document.createElement('div');
headerContainer.classList.add('header');

// selects the parent element and appends parent container
let parentElement = document.querySelector('.header-container');
parentElement.appendChild(headerContainer);

// creates the child span and adds class and appends to parent container
// and adds text content
let date = document.createElement('span');
date.classList.add('date');
date.textContent = "SMARCH 28, 2019";
headerContainer.appendChild(date);

// creates header element and adds content and append to parent container 
let title = document.createElement('h1');
title.textContent = "Lambda Times";
headerContainer.appendChild(title);

// creates temperature span and adds class and append to parent container 
let temp = document.createElement('span');
temp.classList.add("temp");
temp.textContent = '98°';
headerContainer.appendChild(temp);

}

Header();