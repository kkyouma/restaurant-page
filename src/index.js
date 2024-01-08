import './styles/styles.css'
import header from './js/header.js'

import renderHome from './js/home.js'
import about from './js/about.js'
import menu from './js/menu.js'

import firstLoad from './js/firstLoad.js'
import renderMenu from './js/menu.js'

firstLoad()

const renderHomeBtn = document.querySelector('#home-btn');
const aboutBtn = document.querySelector('#about-btn');
const menuBtn = document.querySelector('#menu-btn');

renderHomeBtn.addEventListener('click', () => {
  renderHome()
});

aboutBtn.addEventListener('click', () => {
  about()
});

menuBtn.addEventListener('click', () => {
  renderMenu()
});
