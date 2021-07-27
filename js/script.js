
let searchBtn = document.querySelector('#search-btn');

let searchBar = document.querySelector('.search-bar-container');

let logInBtn = document.querySelector('#login-btn');

let logInForm = document.querySelector('.log-in-form-container');

let formClose = document.querySelector('#form-close');

let menuBar = document.querySelector('#menu-bar');

let navBar = document.querySelector('.navbar');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    logInForm.classList.remove('active');
};

menuBar.addEventListener('click', () => {

    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');

});

searchBtn.addEventListener('click', () => {

    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

logInBtn.addEventListener('click', () => {

    logInForm.classList.add('active');

});

formClose.addEventListener('click', () => {

    logInForm.classList.remove('active');

});