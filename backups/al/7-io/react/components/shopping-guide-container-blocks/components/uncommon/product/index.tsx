import React from 'react'
import styles from './styles.css'
import {
  __SCHEMA_SITE_EDITOR_DEFAULT_BLOCKITEM,
  __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_5_IMAGES, __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_ONE_IMAGES
} from '../../../../../context/_interfaces/_schemas'
import { Button, WordRenderer } from '../../common'

export type ProductProps = {} & __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_5_IMAGES & __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_ONE_IMAGES

export const Product = ({ __editorItemTitle, href, propsProduct, src }: ProductProps) => {
  return (
    <div className={styles.containerBlockProduct}>
      <a href={href} aria-label={`ir para ${{ __editorItemTitle }}`}>
        <img src={src} alt={__editorItemTitle} />
      </a>

      <WordRenderer variant='product' as='h3'>
        {__editorItemTitle}
      </WordRenderer>

      {!!propsProduct && (
        <WordRenderer variant='product' as='p'>
          {propsProduct}
        </WordRenderer>
      )}

      <Button variant='product' as='a'>
        Ver todos
      </Button>

    </div>
  )
}
