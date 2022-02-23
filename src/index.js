import '@/styles/index.scss'
import { map } from './js/map'
import { scrollAnimate } from './js/scroll_animate'
import coords from './js/points.json'
import { mobMenu } from './js/mob_menu'

map({ mapWrapSelector: '.map__wrap', listSelector: '.map__list', coords })

scrollAnimate('.animated-scroll')
mobMenu()
