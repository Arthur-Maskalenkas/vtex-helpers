import React from 'react'
import { default as stylesFile } from './styles.css'
import { ContentRenderProps } from '../../_interfaces'

export const ContentRender = ({
  collectionInCustomContextGlobal,
  badgesStyles = {},
  HTMLAttributes = {}
}: ContentRenderProps) => {
  const { typeContent } = collectionInCustomContextGlobal
  const { text = '', ...restBadges } = badgesStyles

  return (
    <div
      className={`${stylesFile.containerContentRender} ${typeContent === 'image' ? stylesFile.containerBadgeImage : stylesFile.containerBadgeContent}`}
      {...HTMLAttributes}>
      {typeContent === 'image'
        ?
        (
          <img
            {...restBadges}
            className={`${stylesFile.mainImage}`}
          />
        )
        :
        (
          <span
            style={(restBadges as unknown) as React.CSSProperties}
            className={` ${stylesFile.customContentText}`}>
            {text}
          </span>
        )}
    </div>
  )
}

