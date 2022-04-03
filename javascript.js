const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


// Hidden body when active toggle

const bodyHidden = document.getElementById('body')

function hiddenAll() {
    bodyHidden.classList.toggle('active')
    const active = body.classList.contains('active')

}

bodyHidden.addEventListener('click', hiddenAll)