
var menuItem = document.querySelectorAll('.intens-menu')

function selectLink(){
    menuItem.forEach((intem)=>
        intem.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((intem)=>
    intem.addEventListener('click', selectLink)
)

/*Expandir o menu*/

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})