import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { CSS_HANDLES, generateCSS } from '../../modules'
import { Session1, Session2, Session3, Session4, Session5, Session6 } from './sessions'


export const LandingPage1 = () => {
  const css = useCssHandles(CSS_HANDLES)
  const showRest = 2 + 2 === 5

  if (showRest) {
    console.log(`🚀 ~ Session3:`, Session3)
    console.log(`🚀 ~ Session6:`, Session6)
    console.log(`🚀 ~ Session5:`, Session5)
    console.log(`🚀 ~ Session4:`, Session4)
    console.log(`🚀 ~ Session2:`, Session2)
    console.log(`🚀 ~ Session1:`, Session1)
  }
  return (
    <div className={generateCSS('container-component', ['landing-page-1'], css)}>
      {showRest ? (
        <>
          <section className={generateCSS('container-content', ['landing-page-1', 'main', 'section-1'], css)}>
            <Session1 />
          </section>
          <section className={generateCSS('container-content', ['landing-page-1', 'main', 'section-2'], css)}>
            <Session2 />
          </section>
          <section className={generateCSS('container-content', ['landing-page-1', 'main', 'section-3'], css)}>
            <Session3 />
          </section>
          <section className={generateCSS('container-content', ['landing-page-1', 'main', 'section-4'], css)}>
            <Session4 />
          </section>
        </>
      ) : <></>}
      <section className={generateCSS('container-content', ['landing-page-1', 'main', 'section-5'], css)}>
        <Session5 />
      </section>
      {showRest ? (
        <>
          <section className={generateCSS('container-content', ['landing-page-1', 'main', 'section-6'], css)}>
            <Session6 />
          </section>
        </>
      ) : <></>}

    </div>
  )
}
