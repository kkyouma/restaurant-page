import './styles/styles.css'
import header from './js/header.js'

import renderHome from './js/home.js'
import renderAbout from './js/about.js'
import renderMenu from './js/menu.js'

import firstLoad from './js/firstLoad.js'

firstLoad()

const renderHomeBtn = document.querySelector('#home-btn');
const aboutBtn = document.querySelector('#about-btn');
const menuBtn = document.querySelector('.menu-btn');

renderHomeBtn.addEventListener('click', () => {
  renderHome()
});

aboutBtn.addEventListener('click', () => {
  renderAbout()
});

menuBtn.addEventListener('click', () => {
  renderMenu()
});
