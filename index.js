window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // quais dados vou precisar

  //pegando o valor do inicio e do final da sessão
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const menuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute('id')}]`
  )

  //verificar se a seção passou da linha
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
  }
}
function showNavOnScroll() {
  let nav = document.querySelector('#navigation')

  if (scrollY == 0) {
    nav.classList.remove('scroll')
  } else {
    nav.classList.add('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img,
 #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content
 `)
