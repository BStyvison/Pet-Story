const btnMobile = document.getElementById('btn-mobile')
const bodyHidden = document.getElementById('body')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

}

btnMobile.addEventListener('click', toggleMenu)
bodyHidden.addEventListener('click', hiddenAll)
btnMobile.addEventListener('touchstart', toggleMenu)

