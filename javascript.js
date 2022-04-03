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
btnMobile.addEventListener('touchstart', toggleMenu)
bodyHidden.addEventListener('click', hiddenAll)


// Hidden body when active toggle

// function hiddenAll() {
//     bodyHidden.classList.toggle('active')
//     const active = body.classList.contains('active')

// }