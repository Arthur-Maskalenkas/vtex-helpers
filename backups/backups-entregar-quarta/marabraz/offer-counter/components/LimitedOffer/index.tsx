import React from 'react'
/* Types */
import { LimitedOfferProps } from '../../typings'
import BannerLimitedOffer from '../Layout/BannerLimitedOffer'

export function LimitedOffer({
  finalDate,
  children,
  seeMore,
  collectionId,
  title,
  subtitle
}: LimitedOfferProps & any) {

  /* Render */
  return (
    <>
      {
        <BannerLimitedOffer
          finalDate={finalDate}
          children={children}
          seeMore={seeMore}
          collectionId={collectionId}
          title={title}
          subtitle={subtitle}
        />
      }
    </>
  )
}

LimitedOffer.schema = {
  title: 'Contador de Ofertas',
  description: 'App de contador de ofertas.',
  type: 'object',
  properties: {
    finalDate: {
      title: 'Data final:',
      description: 'Seguir o exemplo: "2022-02-23 23:00:00".',
      type: 'string',
      default: '2022-02-23 23:00:00',
    },
    seeMore: {
      title: 'Título - Ver mais',
      type: 'string',
      default: 'Ver mais',
    },
    title: {
      title: 'Título da sessão',
      type: 'string',
      default: 'Oferta imperdível',
    }
  },
}
