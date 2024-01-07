import './styles/styles.css'
import header from './js/header.js'

import home from './js/home.js'
import about from './js/about.js'
import menu from './js/menu.js'

import firstLoad from './js/firstLoad.js'

firstLoad()

const homeBtn = document.querySelector('#home-btn');
const aboutBtn = document.querySelector('#about-btn');
const menuBtn = document.querySelector('#menu-btn');

homeBtn.addEventListener('click', () => {
  home()
});

aboutBtn.addEventListener('click', () => {
  about()
});

menuBtn.addEventListener('click', () => {
  menu()
});
