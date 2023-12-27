burger = document.querySelector('.burger')
navbar = document.querySelector('nav')
right = document.querySelector('ul')

burger.addEventListener('click',()=>{
    navbar.classlist.toggle('v-class-resp')
    right.classlist.toggle('h-nav-resp')
})
