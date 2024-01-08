import header from './header.js'
import renderHome from './home.js'

const firstLoad = function (){
  
  const content = document.getElementById('content');
  const headerContent = header();
  content.appendChild(headerContent);

  const main = document.createElement('main')
  main.id = 'main'
  content.appendChild(main)

  renderHome()
}

export default firstLoad;