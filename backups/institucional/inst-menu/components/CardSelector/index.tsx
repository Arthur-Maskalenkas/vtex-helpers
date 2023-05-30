import React, { useState } from 'react';
import styles from './style.css';
import { useRuntime } from 'vtex.render-runtime';

interface IProps {
  cards: Card[]
}

type Card = {
  icon: string
  activeIcon: string
  title: string
  subtitle: string
  content: string
}

const CardSelector = ({ cards }: IProps) => {

  const [activeCard, setActiveCard] = useState(-1)
  const [cardContent, setCardContent] = useState('')
  const { deviceInfo } = useRuntime()

  const handleClickCard = (index: any, cardContent: string) => {
    setActiveCard(index)
    setCardContent(cardContent)
  }

  return (
    <div className={activeCard != -1 ? styles.activeCardSelectorWrapper : styles.cardSelectorWrapper}>
      <div className={styles.cardsContainer}>
        {cards.slice(0, 4).map((card: Card, index: number) => {
          return (
            <>
              <div key={index} className={activeCard == index ? styles.activeCardSelectorContent : styles.cardSelectorContent}>
                <div key={index} className={activeCard == index ? styles.activeCard : styles.card} onClick={() => { handleClickCard(index, card.content) }}>

                  <img src={activeCard == index ? card.activeIcon : card.icon} className={activeCard == index ? styles.activeIcon : styles.icon} />
                  <span className={activeCard == index ? styles.activeTitle : styles.title}>{card.title}</span>
                  <p className={activeCard == index ? styles.activeSubtitle : styles.subtitle}>{card.subtitle}</p>
                </div>
              </div>
              {
                deviceInfo.isMobile ?
                  (
                    <div dangerouslySetInnerHTML={{ __html: cardContent ? cardContent : "" }} key={index} className={activeCard == index ? styles.activeCardContentMobile : styles.cardContentMobile} />
                  )
                  : null
              }


            </>
          )
        })}
      </div>
      {
        deviceInfo.type === "desktop" ?
          (
            <div dangerouslySetInnerHTML={{ __html: cardContent ? cardContent : "" }} className={styles.cardContentDesktop} />
          )
          : null
      }
    </div>
  )

}

CardSelector.schema = {
  title: 'Seletor de Infocard',
  description: 'Descrição',
  type: 'object',
  properties: {
    cards: {
      type: 'array',
      title: 'Cards',
      description: 'Cards a serem exibidos',
      items: {
        title: 'Card',
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Title',
            type: 'string',
          },
          icon: {
            title: 'Ícone',
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },

          activeIcon: {
            title: 'Ícone quando o card estiver selecionado',
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          title: {
            title: 'Titulo do Card',
            type: 'string',
          },

          subtitle: {
            title: 'Subtitulo do Card',
            type: 'string',
          },

          content: {
            title: 'Conteúdo do Card',
            type: 'string',
          },
        },
      },
    },
  },
}

export default CardSelector;
