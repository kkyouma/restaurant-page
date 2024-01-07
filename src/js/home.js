const home = function () {
  const content =  document.getElementById('content');

  const main = document.createElement('main')
  main.id = 'main'
  content.appendChild(main)

  return console.log("Home page")
}

export default home