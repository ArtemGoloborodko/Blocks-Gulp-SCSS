/* Поп-ап */

document.querySelectorAll('.open_modal').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('modal').style.display = 'flex';
    });
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});


/* Боковое меню */

let opetBurgerMenuBtn = document.getElementById('openMenuBtn')
let MenuBurger = document.getElementById('menu')

let svgOne = document.querySelector(".svg_one")
let svgTwo = document.querySelector(".svg_two")


opetBurgerMenuBtn.addEventListener('click', () => {
    MenuBurger.classList.toggle("open_burger")
    svgOne.classList.toggle("svg_two_cloce")
    svgTwo.classList.toggle("svg_one_open")
    
});

