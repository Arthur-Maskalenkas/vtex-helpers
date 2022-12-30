import React from 'react'

import { useGlossary } from '../../../context'
import styles from './styles.css'

const FilterWithoutMemo = () => {
  const { setFilter, getGlossary } = useGlossary()

  const { currentFilter } = getGlossary()

  const classNameWithPosition = `${
    styles[currentFilter === 'Categorias' ? 'position1' : 'position2']
  }`

  return (
    <div className={`${styles.containerFilters}  ${classNameWithPosition}`}>
      <button
        className={`${
          styles[currentFilter === 'Categorias' ? 'current' : '']
        } `}
        onClick={() => setFilter('Categorias')}
      >
        Categorias
      </button>
      <button
        className={`${styles[currentFilter === 'Marcas' ? 'current' : '']}`}
        onClick={() => setFilter('Marcas')}
      >
        Marcas
      </button>
    </div>
  )
}

export const Filter = React.memo(FilterWithoutMemo)
