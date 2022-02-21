export const scrollAnimate = function (elementSelector) {
  const elem = document.querySelector(elementSelector)

  document.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    let docHeight = document.body.offsetHeight
    let winHeight = window.innerHeight
    let scrollPercent = scrollTop / (docHeight - winHeight)
    let scrollPercentRounded = Math.round(scrollPercent * 100)

    elem.style.bottom = `${scrollPercentRounded - 5}%`
  })
}
