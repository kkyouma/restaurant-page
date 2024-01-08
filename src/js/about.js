const renderAbout = function () {
  const main = document.getElementById('main');

  main.innerHTML = '';

  const section = document.createElement('section');
  section.textContent = 'About'
  main.appendChild(section)

  return console.log("About page")
}

export default renderAbout