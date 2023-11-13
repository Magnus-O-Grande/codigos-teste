
const menuDiv = document.getElementById('menu-mobile')
const expandirMenu1 = document.getElementById('exp-menu')

menuDiv.addEventListener('click', expandirMenu)

function expandirMenu(){
    menuDiv.classList.toggle('abrir')
    expandirMenu1.classList.toggle('ativo')
}