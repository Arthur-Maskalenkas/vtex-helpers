import React, { useContext } from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './styles.css'
import { GlobalContext } from '../../../../context-global'

export const RenderQuadrantFlags = () => {
  const { getCollectionFlagRemapped } = useContext(GlobalContext)

  const collectionsRemapped = getCollectionFlagRemapped(useProduct())

  if (!collectionsRemapped) {
    return null
  }

  const { quadrants, refinedData } = collectionsRemapped

  console.log('custom flag - data no componente', collectionsRemapped)

  if (!quadrants || !refinedData) {
    return null
  }

  return (
    <div className={styles.containerQuadrantFlagsAvanti}>
      {Object.keys(quadrants)?.map((key: string) => {
        const currentQuadrant = quadrants?.[key as keyof typeof quadrants]

        if (!currentQuadrant || key === 'quadrantHorizontal') {
          return null
        }

        console.log('app flag - current qadrant', currentQuadrant)


        return (
          <div className={styles[`container${currentQuadrant?.name}`]} {...currentQuadrant?.dataHTMLOnContainerFlag} style={{ ...currentQuadrant?.dataHTMLOnContainerFlag?.style }}>
            {currentQuadrant?.listOfFlags?.map((content, index) => {
              const {
                currentCollection: { typeContent },
                HTMLAttributes,
                stylesApp,
                badgesStyles: {
                  text = '',
                  ...restBadges
                }
              } = content

              return (
                <div key={index} {...HTMLAttributes} style={{ ...stylesApp?.containerBadge }}
                  className={`${styles.containerContentRender}`}>
                  {typeContent === 'image'
                    ?
                    (<img {...restBadges} style={{ display: 'flex', ...((restBadges?.width as string).includes('px') ? { width: restBadges?.width } : { width: '100%' }) }} />)
                    :
                    (
                      <span style={(restBadges as unknown) as React.CSSProperties}>
                        {text}
                      </span>
                    )
                  }
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
