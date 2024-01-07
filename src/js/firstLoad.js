import header from './js/header.js'

const firstLoad = function (){
  const content = document.getElementById('content');
  const headerContent = header();

  content.appendChild(headerContent);
}

export default firstLoad;