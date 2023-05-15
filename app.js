var hiddenitem1 = document.querySelector('.answer1')
var hiddenitem2 = document.querySelector('.answer2')
var hiddenitem3 = document.querySelector('.answer3')
var hidden = document.querySelector('.hidden')

var icon1 = document.querySelector('.icon1')
var icon2 = document.querySelector('.icon2')
var icon3 = document.querySelector('.icon3')

icon1.addEventListener('click', () => {
    hiddenitem1.classList.toggle('hidden')  
})

icon2.addEventListener('click', () => {
    hiddenitem2.classList.toggle('hidden')  
})

icon3.addEventListener('click', () => {
    hiddenitem3.classList.toggle('hidden')  
})