# como utilizar pixel app
# como abrir minicart com evento

é basicamente utilizar o push presente no hook usePixel do repositorio 'vtex.pixel-manager'

import { usePixel } from 'vtex.pixel-manager'

const { push } = usePixel()

push({
id: '"add-to-cart-button",
event: "addToCart"
})

esse id vem do bloco do minicart

"minicart.v2": {
    "title": "minicart",
    "props": {
      "customPixelEventId": "add-to-cart-button"
    },
    "children": [
      "minicart-base-content"
    ]
  },