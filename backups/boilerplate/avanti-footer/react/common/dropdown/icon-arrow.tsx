

import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'

export const IconArrow = () => {
  const css = useCssHandles(CSS_HANDLES)

  return (
    <svg className={generateCSS('identifier', ['arrow'], css)} xmlns="http://www.w3.org/2000/svg" width="4.771" height="7.913" viewBox="0 0 4.771 7.913">
      <g id="noun_Arrow_2333164" transform="translate(0 7.913) rotate(-90)">
        <g id="Grupo_776" data-name="Grupo 776" transform="translate(0 0)">
          <path id="Caminho_386" data-name="Caminho 386" d="M4.3,4.619,7.771.9a.567.567,0,0,0,0-.751.476.476,0,0,0-.7,0L3.957,3.5.841.153a.476.476,0,0,0-.7,0A.567.567,0,0,0,.142.9L3.6,4.619A.476.476,0,0,0,4.3,4.619Z" transform="translate(0 0)" fill-rule="evenodd" />
        </g>
      </g>
    </svg>
  )
}
