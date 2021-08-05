// mobile height 
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {

  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

});

const darkbtn = document.querySelector('.dark')
const lightbtn = document.querySelector('.light')


darkbtn.addEventListener("click", function () {
  document.body.classList.toggle("dark")

})

lightbtn.addEventListener("click", function () {
  document.body.classList.toggle("light")
})

