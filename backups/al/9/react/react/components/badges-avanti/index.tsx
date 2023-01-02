import React, { useContext } from 'react'
import { useProduct } from 'vtex.product-context'
import { BadgesAvantiProps, Highlight } from './_interfaces'
import { findRefinedDataOnProductContext } from "./utils";

import styles from './styles.css'
import { GlobalContext } from '../../context-global';
import { ContentRender } from './components';
import { QuadrantOwner } from '../../context-global/_interfaces';
import { remapped_schema_collection_flags } from "../../context-global/_interfaces/_schemas-mapped";

export const BadgesAvanti = (props: BadgesAvantiProps) => {
  const {
    filter = {
      type: 'hide',
      highlightNames: [],
    },
    type = 'collection',
    value = {
      highlight: {
        name: '',
      },
      type: 'collection',
    },
    ...CustomFlagContentProps
  } = props

  const { getCollectionMapped } = useContext(GlobalContext)

  const productCtx = useProduct()

  const refinedDataProductContext = findRefinedDataOnProductContext(productCtx)

  if (!refinedDataProductContext) {
    return null
  }

  if (typeof getCollectionMapped !== 'function') {
    return null
  }

  const mappedCollections = getCollectionMapped(refinedDataProductContext)

  if (!mappedCollections) {
    return null
  }

  const { quadrantBottom, quadrantTopLeft, quadrantTopRight } = mappedCollections

  return (
    <div className={styles.containerBadgesAvanti}>
      {quadrantBottom?.hasCollection && (
        <div data-badges-quadrant-bottom={true} className={styles.containerQuadrantBottom}
          style={{
            bottom: quadrantBottom?.groupStyles.verticalDistance,
            ...(quadrantBottom?.groupStyles?.positionFlow === 'leftToRight' && { left: quadrantBottom?.groupStyles.horizontalDistance, flexDirection: 'row' }),
            ...(quadrantBottom?.groupStyles?.positionFlow === 'rightToLeft' && { right: quadrantBottom?.groupStyles.horizontalDistance, flexDirection: 'row-reverse' }),
            ...(quadrantBottom?.groupStyles?.positionFlow === 'center' && { left: '50%', transform: 'translateX(-50%)' })
          }}>
          {quadrantBottom?.contentList
            ?.map((content, index) => {
              const { currentCollection, highlight, quadrantOwner, HTMLAttributes, badgesStyles } = content
              return (
                <div key={index}>
                  <ContentRender
                    {...CustomFlagContentProps}
                    value={{ highlight: (highlight as Highlight), type }}
                    quadrantOwner={(quadrantOwner as QuadrantOwner)}
                    HTMLAttributes={HTMLAttributes}
                    badgesStyles={badgesStyles}
                    collectionInCustomContextGlobal={(currentCollection as remapped_schema_collection_flags)} />
                </div>
              )
            })}

        </div>
      )
      }

      {
        quadrantTopLeft?.hasCollection && (
          <div data-badges-quadrant-top-left={true} className={styles.containerQuadrantTopLeft}
            style={{
              top: quadrantTopLeft.groupStyles.verticalDistance,
              left: quadrantTopLeft.groupStyles.horizontalDistance,
            }}>
            {quadrantTopLeft?.contentList
              ?.map((item, index) => {
                const { currentCollection, highlight, quadrantOwner, HTMLAttributes, badgesStyles } = item
                return (
                  <div key={index}>
                    <ContentRender
                      badgesStyles={badgesStyles}

                      {...CustomFlagContentProps}
                      value={{ highlight: (highlight as Highlight), type }}
                      quadrantOwner={(quadrantOwner as QuadrantOwner)}

                      HTMLAttributes={HTMLAttributes}
                      collectionInCustomContextGlobal={(currentCollection as remapped_schema_collection_flags)} />
                  </div>
                )
              }
              )}
          </div>
        )
      }

      {
        quadrantTopRight?.hasCollection && (
          <div data-badges-quadrant-top-right={true} className={styles.containerQuadrantTopRight}
            style={{
              top: quadrantTopRight.groupStyles.verticalDistance,
              right: quadrantTopRight.groupStyles.horizontalDistance,
            }}>
            {quadrantTopRight?.contentList
              ?.map((item, index) => {
                const { currentCollection, highlight, quadrantOwner, HTMLAttributes, badgesStyles } = item
                return (
                  <div key={index}>
                    <ContentRender
                      badgesStyles={badgesStyles}
                      {...CustomFlagContentProps}
                      value={{ highlight: (highlight as Highlight), type }}
                      quadrantOwner={(quadrantOwner as QuadrantOwner)}

                      HTMLAttributes={HTMLAttributes}

                      collectionInCustomContextGlobal={(currentCollection as remapped_schema_collection_flags)} />
                  </div>
                )
              }
              )}
          </div>
        )
      }
    </div >

  )
}
