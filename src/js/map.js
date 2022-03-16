export const map = function ({ mapWrapSelector, listSelector, coords }) {
  const map = document.querySelector(mapWrapSelector)
  const list = document.querySelector(listSelector)

  coords.forEach(({ x, y, name }) => {
    const div = document.createElement('div')
    const li = document.createElement('li')

    div.classList.add('map__place')
    div.dataset.countryName = name
    div.title = name

    li.classList.add('map__list-item')
    li.innerText = name

    div.style.left = `${x}%`
    div.style.top = `${y}%`

    map.appendChild(div)
    list.appendChild(li)

    div.addEventListener('click', (e) => {
      document
        .querySelectorAll('.map__place')
        .forEach((i) => i.classList.remove('active', 'active--left'))
      document.querySelectorAll('.map__list-item').forEach((i) => i.classList.remove('active'))

      div.classList.toggle('active')
      li.classList.toggle('active')
      if (div.offsetLeft > window.innerWidth / 2) div.classList.toggle('active--left')
    })
  })

  const places = document.querySelectorAll('.map__place')
  let currentZoom = 1
  let currentZoomPlaces = 1
  let currentTranslateY = 100

  const zoomIn = () => {
    if (currentZoom < 2) {
      currentZoom *= 1.5
      currentZoomPlaces /= 1.5
      currentTranslateY += 25

      places.forEach((i) => {
        i.style.transform = `scale(${currentZoomPlaces}) translateY(-${currentTranslateY}%)`
      })

      map.style.transform = `scale(${currentZoom})`
    }
  }
  const zoomOut = () => {
    if (currentZoom > 1) {
      currentZoom /= 1.5
      currentZoomPlaces *= 1.5
      currentTranslateY -= 25

      places.forEach((i) => {
        i.style.transform = `scale(${currentZoomPlaces}) translateY(-${currentTranslateY}%)`
      })
      map.style.transform = `scale(${currentZoom})`
    }
  }

  const plus = document.querySelector('#plus')
  const minus = document.querySelector('#minus')

  plus.addEventListener('click', zoomIn)
  minus.addEventListener('click', zoomOut)
}
