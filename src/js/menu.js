const renderMenu = function () {
  const main = document.getElementById('main');

  main.innerHTML = '';

  const section = document.createElement('section');
  section.textContent = 'Menu'
  main.appendChild(section)

  return console.log("Menu page")
}

export default renderMenu