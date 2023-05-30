import React from 'react'
import styles from "./styles.css"

interface IProps {
  content: InstContent[]
}

type InstContent = {
  title: string
  content: string
}

const InstTemplate = ({ content }: IProps) => (
  <div className={styles.instContainer}>
    {content?.map((item: any) => (
      <div className={styles.instItem} key={item}>
        <h4 className={styles.instTitle}>{item.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: item.content ? item.content : "" }} className={styles.instContent} />
      </div>
    ))}
  </div>
)

InstTemplate.schema = {
  title: "Template de Conteúdo Institucional",
  description: "Aplicativo de conteúdo institucional",
  type: "object",
  properties: {
    content: {
      title: "Conteúdo",
      type: "array",
      items: {
        properties: {
          title: {
            title: "Título Conteúdo",
            type: "string"
          },
          content: {
            title: "Título Conteúdo",
            type: "string"
          }
        }
      }
    }
  }
}

export default InstTemplate