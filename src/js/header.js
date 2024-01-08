import restaurantLogo from '../assets/img/restaurant-logo.png'

const header = function (){
  const headerElement = document.createElement('header');
  headerElement.id = 'header'

  const logoContainer = document.createElement('div');
  const restaurantName = document.createElement('h1')
  restaurantName.textContent = 'Restaurant Name!'
  restaurantName.appendChild(logoContainer)
  logoContainer.appendChild(headerElement)

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('container');
  headerElement.appendChild(buttonsContainer)

  // const headerLogo = document.createElement('img');
  // headerLogo.src = restaurantLogo;
  // headerLogo.alt = "Restaurant Logo";
  // headerLogo.classList.add = ('image')

  // headerElement.appendChild(headerLogo);

  const createButton = (text) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('header-btn');
    button.id = `${text.toLowerCase()}-btn`;
    return button
  } 

  const homeButton = createButton('home');
  const menuButton = createButton('Menu');
  const aboutButton = createButton('About');

  buttonsContainer.appendChild(homeButton);
  buttonsContainer.appendChild(menuButton);
  buttonsContainer.appendChild(aboutButton);

  return headerElement
}

export default header;



