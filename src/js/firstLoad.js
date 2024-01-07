import header from './header.js'
import home from './home.js'

const firstLoad = function (){
  const content = document.getElementById('content');
  const headerContent = header();
  content.appendChild(headerContent);

  home()
}

export default firstLoad;