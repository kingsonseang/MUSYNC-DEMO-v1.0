// mobile height 
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {

  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

});

const darkbtn = document.querySelector('.dark')
const lightbtn = document.querySelector('.light')
const defbtn = document.querySelector('.default')


darkbtn.addEventListener("click", function () {
  document.body.classList.toggle("dark")
  document.body.classList.remove("light")

})

lightbtn.addEventListener("click", function () {
  document.body.classList.toggle("light")
  document.body.classList.remove("dark")
})

function removeTheme() {
  document.body.classList.remove("light")
  document.body.classList.remove("dark")
}

defbtn.addEventListener('click', removeTheme);

const search = document.querySelector('#search')
const searchbar = document.querySelector('.searchbar')

search.addEventListener('click', () => {
  const sshowing = searchbar.classList.contains('none')

  if(sshowing){
    searchbar.classList.remove('none')
  } else {
    searchbar.classList.add('none')
  }
});