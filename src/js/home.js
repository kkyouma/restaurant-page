import renderMenu from "./menu.js";


const renderHome = function () {
  const main = document.getElementById('main');
  main.classList.add('home');

  main.innerHTML = '';

  const section = document.createElement('section');
  section.classList.add('home');
  main.appendChild(section);

  const welcomeH2 = document.createElement('h2');
  welcomeH2.textContent = 'Welcome to'
  section.appendChild(welcomeH2)

  const welcomeH1 = document.createElement('h1');
  welcomeH1.textContent = 'Our Restaurant'
  section.appendChild(welcomeH1)

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Look Menu';
  menuButton.classList.add('menu-btn');
  menuButton.id = 'main-menu-btn'
  section.appendChild(menuButton)  

  menuButton.addEventListener('click', () => {
    renderMenu();
  });

  return console.log("Home page");
}

export default renderHome