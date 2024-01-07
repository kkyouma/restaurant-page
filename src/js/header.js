function header (){
  const headerElement = document.createElement('header');
  header.id = 'header'

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('container');
  headerElement.appendChild(buttonsContainer)

  const createButton = (text) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('header-btn');
    button.id = `${text.toLowerCase()}-btn`;
    return button
  }

  const homeButton = createButton('Home');
  const menuButton = createButton('Menu');
  const aboutButton = createButton('About');

  buttonsContainer.appendChild(homeButton);
  buttonsContainer.appendChild(menuButton);
  buttonsContainer.appendChild(aboutButton);
}

export default header;



