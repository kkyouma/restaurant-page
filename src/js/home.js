

const renderHome = function () {
  const main = document.getElementById('main');

  main.innerHTML = '';

  const section = document.createElement('section')
  section.textContent = 'Home'
  main.appendChild(section)

  return console.log("Home page");
}

export default renderHome