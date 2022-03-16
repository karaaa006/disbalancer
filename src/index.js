import regeneratorRuntime from 'regenerator-runtime'
import '@/styles/index.scss'
import { map } from './js/map'
import { scrollAnimate } from './js/scroll_animate'
import coords from './js/points.json'
import { mobMenu } from './js/mob_menu'
import { renderBuyTableData } from './js/buy_table'

map({ mapWrapSelector: '.map__image-wrap', listSelector: '.map__list', coords })

scrollAnimate('.animated-scroll')
mobMenu()

renderBuyTableData()
