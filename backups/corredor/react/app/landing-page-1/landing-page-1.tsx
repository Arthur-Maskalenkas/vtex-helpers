import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { CSS_HANDLES, generateCSS } from '../../modules'
import { Session1, Session2, Session3, Session4, Session5, Session6 } from './sessions'

export const LandingPage1 = () => {
  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={generateCSS('container-component', ['landing-page-1'], css)}>
      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <Session6 />
    </div>
  )
}
