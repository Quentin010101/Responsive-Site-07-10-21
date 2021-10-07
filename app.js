const press = document.querySelector('.burger')
const header = document.querySelector('header')

press.addEventListener('click', function(){
    header.classList.toggle('headerHeight')
})

