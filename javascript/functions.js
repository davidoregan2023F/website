function closeMobileMenu() {
    document.getElementById('mobile_navigation').classList.add('hidden')
    document.getElementById('mobile_menu').classList.remove('hidden')
    document.body.classList.remove('disabled')
}

function openMobileMenu() {
    document.getElementById('mobile_navigation').classList.remove('hidden')
    document.getElementById('mobile_menu').classList.add('hidden')
    document.body.classList.add('disabled')
}

function rotateToggle(element) {
    if (element.classList.contains('rotate')) {
        element.classList.remove('rotate')
    }
    else {
        element.classList.add('rotate')
    }
}