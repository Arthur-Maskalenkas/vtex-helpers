import React, { useContext } from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './styles.css'
import { GlobalContext } from '../../context-global';

export const FlagsAvanti = () => {
  const { getCollectionFlagRemapped } = useContext(GlobalContext)

  const mappedCollections = getCollectionFlagRemapped(useProduct())

  console.log('teste2 mappedCollections', mappedCollections)

  if (!mappedCollections) {
    return null
  }


  return (
    <div className={styles.containerFlagsAvanti}>
      {Object.keys(mappedCollections)?.map((key: string) => {
        const currentQuadrant = mappedCollections?.[key as keyof typeof mappedCollections]

        if (!currentQuadrant) {
          return null
        }

        console.log('component | currentQuadrant', currentQuadrant)
        console.log(currentQuadrant?.dataHTMLOnContainerFlag?.style)

        return (
          <div className={styles[`container${currentQuadrant?.name}`]} {...currentQuadrant?.dataHTMLOnContainerFlag} style={{ ...currentQuadrant?.dataHTMLOnContainerFlag?.style }}>
            {currentQuadrant.listOfFlags?.map((content, index) => {
              const {
                currentCollection: { typeContent },
                HTMLAttributes,
                badgesStyles: {
                  text = '',
                  ...restBadges
                }
              } = content

              return (
                <div key={index} {...HTMLAttributes}
                  className={`${styles.containerContentRender}`}>
                  {typeContent === 'image'
                    ?
                    (<img {...restBadges} />)
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
