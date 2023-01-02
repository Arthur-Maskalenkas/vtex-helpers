import React from 'react'
import { __SCHEMA_SITE_EDITOR_DEFAULT_BLOCKITEM } from '../../../../../context/_interfaces/_schemas'
import { Divider, WordRenderer } from '../../common'
import { VitrineGaleria } from '../../uncommon'
import styles from './styles.css'

type BlockContentProps = {} & __SCHEMA_SITE_EDITOR_DEFAULT_BLOCKITEM

export const BlockContent = ({
  __editorItemTitle,
  description,
  eachTabHave5Images,
  items }: BlockContentProps) => {

  return (
    <article className={styles.containerBlockContainer}>
      <div className={styles.containerBlockHeader}>
        <WordRenderer as='h2' variant='block'>
          {__editorItemTitle}
        </WordRenderer>

        <WordRenderer as='p' variant='block'>
          {description}
        </WordRenderer>
      </div>

      <div className={styles.containerBlockContentBottom}>
        <VitrineGaleria items={items} eachTabHave5Images={eachTabHave5Images} />
      </div>

      <Divider />
    </article>
  )
}
