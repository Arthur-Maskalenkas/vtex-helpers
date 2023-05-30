import React from 'react';
import styles from './styles.css';

type IProps = {
  firstLevel: IText[]
}
type IText = {
  secLevel: ISecLevel[]
  titulo: string
}
type ISecLevel = {
  titulo: string
  infos: []
}
type IInfo = {
  texto: string
}

const AcordionItensSac = ({ firstLevel }: IProps): JSX.Element => {
  const [clickedFirstLevel, setClickedFirstLevel] = React.useState(-2)
  const [clickedSecLevel, setClickedSecLevel] = React.useState(-100)
  const listfirstLevel = firstLevel || []

  const handleClickFirstLevel = (index: number) => {
    if (clickedFirstLevel === index) {
      return setClickedFirstLevel(-2)
    }

    setClickedFirstLevel(index)
  }

  const handleClickSecLevel = (index2: number) => {
    if (clickedSecLevel === index2) {
      return setClickedSecLevel(-100)
    }

    setClickedSecLevel(index2)
  }

  return (
    <div className={styles.accordionWrapper}>
      {listfirstLevel
        ? listfirstLevel.map((item: IText, index) => {
          return (
            <div
              className={
                clickedFirstLevel === index
                  ? styles.containerFirstLevelActive
                  : styles.containerFirstLevel
              }
              key={index}
            >
              <button className={styles.ctaFirstLevel}>
                <h3
                  onClick={() => handleClickFirstLevel(index)}
                  className={styles.containerFirstLevelTitle}
                >
                  {item?.titulo}

                  <span>
                    <svg
                      version="1.1"
                      id="Camada_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="-298 392.8 14.6 8.2"
                      fill="#000"
                      className={styles.icon}
                    >
                      <path d="M-284.3,393.2c-0.6-0.5-1.4-0.5-2,0l-4.4,4.4l-4.4-4.4c-0.5-0.5-1.4-0.5-2,0c-0.5,0.5-0.5,1.4,0,2l5.4,5.4l0,0 c0.3,0.3,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1-0.4l5.4-5.4C-283.7,394.6-283.7,393.8-284.3,393.2z" />
                    </svg>
                  </span>
                </h3>
              </button>

              {item?.secLevel?.map(({ titulo, infos }: ISecLevel, index2) => {
                return (
                  <div
                    className={
                      clickedSecLevel === index2
                        ? styles.containerSecLevelActive
                        : styles.containerSecLevel
                    }
                    key={index2}
                  >
                    <button className={styles.ctaSecLevel} onClick={() => handleClickSecLevel(index2)}>
                      <p className={styles.titleSecLevel}>
                        {titulo}
                        <span>
                          <svg
                            version="1.1"
                            id="Camada_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="-298 392.8 14.6 8.2"
                            fill="#000"
                            className={styles.icon}
                          >
                            <path d="M-284.3,393.2c-0.6-0.5-1.4-0.5-2,0l-4.4,4.4l-4.4-4.4c-0.5-0.5-1.4-0.5-2,0c-0.5,0.5-0.5,1.4,0,2l5.4,5.4l0,0 c0.3,0.3,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1-0.4l5.4-5.4C-283.7,394.6-283.7,393.8-284.3,393.2z" />
                          </svg>
                        </span>
                      </p>
                    </button>

                    {infos?.map(({ texto }: IInfo) => {
                      return (

                        <div dangerouslySetInnerHTML={{__html: texto ? texto : ""}} className={styles.contentSecLevel}/>
                        
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })
        : null}
    </div>
  )
}

AcordionItensSac.schema = {
  title: 'Itens Acordion',
  type: 'object',
  properties: {
    firstLevel: {
      title: 'Adicionar Primeiro Nível',
      description: 'Digite o primeiro nível do Acordion',
      type: 'array',
      items: {
        properties: {
          titulo: {
            title: 'Primeiro Nível',
            type: 'string',
          },
          secLevel: {
            title: 'Adicionar o(s) segundo(s) nível(is)',
            description: 'Digite o segundo nível do Acordion',
            type: 'array',
            items: {
              properties: {
                titulo: {
                  title: 'Titulo do Segundo Nível',
                  type: 'string',
                },
                infos: {
                  title: 'Adicionar conteúdo do segundo nível',
                  type: 'array',
                  items: {
                    properties: {
                      texto: {
                        title: 'Texto do Segundo Nível',
                        type: 'string',
                      },

                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default AcordionItensSac;