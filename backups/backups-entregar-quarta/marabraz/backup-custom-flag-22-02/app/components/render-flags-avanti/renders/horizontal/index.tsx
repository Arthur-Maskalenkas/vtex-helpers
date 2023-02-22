import React, { useContext } from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './styles.css'
import { GlobalContext } from '../../../../context-global'

export const RenderHorizontalFlags = () => {
  const { getCollectionFlagRemapped } = useContext(GlobalContext)

  const collectionsRemapped = getCollectionFlagRemapped(useProduct())

  if (!collectionsRemapped) {
    return null
  }

  const { quadrants } = collectionsRemapped

  const quadrantHorizontal = !!quadrants && quadrants?.quadrantHorizontal

  if (!quadrantHorizontal) {
    return null
  }

  console.log('custom flag - data no componente', collectionsRemapped)

  return (
    <div className={styles.containerHorizontalFlagsAvanti}>
      <div className={styles[`container${quadrantHorizontal?.name}`]} {...quadrantHorizontal?.dataHTMLOnContainerFlag} style={{ ...quadrantHorizontal?.dataHTMLOnContainerFlag?.style }}>
        {quadrantHorizontal.listOfFlags?.map((content, index) => {
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
    </div>
  )
}
