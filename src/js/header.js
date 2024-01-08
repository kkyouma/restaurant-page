import restaurantLogo from '../assets/img/restaurant-logo.png'

const header = function (){
  const headerElement = document.createElement('header');
  headerElement.id = 'header'

  const logoContainer = document.createElement('div');
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Restaurant Name!';
  logoContainer.appendChild(restaurantName);
  headerElement.appendChild(logoContainer);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('flex-container');
  headerElement.appendChild(buttonsContainer);

  const createButton = (btnName) => {
    const button = document.createElement('button');
    button.textContent = btnName;
    button.classList.add('header-btn');
    button.id = `${btnName.toLowerCase()}-btn`;
    buttonsContainer.appendChild(button);
  } 

  const homeButton = createButton('home');
  const menuButton = createButton('Menu');
  const aboutButton = createButton('About');

  return headerElement
}

export default header;



