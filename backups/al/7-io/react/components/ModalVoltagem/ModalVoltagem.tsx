import type { ReactNode } from 'react'
import React, { useState } from 'react'
import { useProduct } from 'vtex.product-context'

import { ModalContent } from './components/Modal'
import style from './style.css'

interface ModalVoltagemProps {
  children: ReactNode
  nameSpecificatioVoltagem: string
}

export function ModalVoltagem({
  children,
  nameSpecificatioVoltagem = 'Voltagem',
}: ModalVoltagemProps) {
  const [modalIsOpen, setIsOpen] = useState(false)

  const contextProduct = useProduct()

  const arrayVoltagemSpecification = contextProduct?.selectedItem?.variations.filter(
    (specification: any) =>
      specification?.name === nameSpecificatioVoltagem
  )

  const selectedVariation =
    contextProduct?.skuSelector?.areAllVariationsSelected

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  if (arrayVoltagemSpecification && arrayVoltagemSpecification.length > 0 && selectedVariation) {
    return (
      <div>
        <button
          className={style?.fakeBuyBtn}
          onClick={() => {
            openModal()
          }}
        >
          Quero
        </button>

        <ModalContent
          specificationName={nameSpecificatioVoltagem}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </div>
    )
  }

  return children
}
