export const mobMenu = () => {
  const toggleBtns = document.querySelectorAll('[data-toggle-menu')
  const mobMenu = document.querySelector('.mob-nav')
  const handleToggle = () => {
    mobMenu.classList.toggle('isOpen')
  }
  toggleBtns.forEach((i) => i.addEventListener('click', handleToggle))
}
