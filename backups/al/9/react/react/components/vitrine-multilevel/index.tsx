import React from 'react'
import styles from './styles.css'


type VitrineMultiLevelProps = {
  children: React.ReactNode
  tabs: Array<{ __editorItemTitle: string }>
}

export const VitrineMultiLevel = ({ children, tabs }: VitrineMultiLevelProps) => {
  const [currentTab, setCurrentTab] = React.useState(0)

  return (
    <div className={styles.containerMultilevel}>
      <ul className={styles.containerButtonMultilevel}>
        {tabs?.map((tab, index) => (
          <li key={index}>
            <button className={`${currentTab === index && styles.active}`} onClick={() => setCurrentTab(index)}>{tab.__editorItemTitle}</button>
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        {React.Children.map(children, (child: any, index) => (
          <div className={`${styles.item} ${index === currentTab ? styles.activeItem : styles.disableItem}`}>
            {React.cloneElement(child)}
          </div>
        )
        )}
      </div>
    </div >
  )
}

VitrineMultiLevel.schema = {
  title: "multilevel-app",
  type: "object",
  properties: {
    tabs: {
      title: "Lista de tabs",
      type: "array",
      maxItems: 4,
      items: {
        title: "Tab",
        type: "object",
        properties: {
          "__editorItemTitle": {
            "title": "Titulo",
            "type": "string",
            "default": "Item"
          },
        },
      },
    }
  }
}
