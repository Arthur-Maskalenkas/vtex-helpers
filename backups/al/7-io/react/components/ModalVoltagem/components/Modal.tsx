import React, { useState } from 'react'
import Modal from 'react-modal'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { useProduct } from 'vtex.product-context'
import { useMutation } from 'react-apollo'

import type { OrderForm } from '../../../graphql/mutation/addItem'
import style from './style.css'
import ADD_ITEM from '../../../graphql/mutation/addItem.graphql'

interface ModalContentProps {
  specificationName: string
  modalIsOpen: boolean
  closeModal: () => void
}

export function ModalContent({
  modalIsOpen,
  closeModal,
  specificationName,
}: ModalContentProps) {
  const productcontextValue = useProduct()
  const { setOrderForm, orderForm } = useOrderForm()
  const [BuyButtonWasPressed, setBuyButtonWasPressed] = useState<boolean>(false)
  const quantityItems:number = Number(productcontextValue?.selectedQuantity)
  const productSeller = productcontextValue?.selectedItem?.sellers[0]?.sellerId
  const productId = productcontextValue?.selectedItem?.itemId
  const orderFormItems = orderForm?.items;
  const validateIdOrderForm = orderFormItems.find((item:any) => item?.id === productId)
  const currentQuantityOrderForm:number = Number(validateIdOrderForm?.quantity);
  const totalizersQuantityItems:number = validateIdOrderForm ? quantityItems + currentQuantityOrderForm : quantityItems;

  const [addItem] = useMutation<OrderForm, any>(ADD_ITEM, {
    onCompleted: (data: any) => {
      const orderFormData = data?.addToCart

      setOrderForm((prevOrderForm: any) => {
        return {
          ...prevOrderForm,
          ...orderFormData,
        }
      })
    },
  })

  const onButtonClick = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault()

    setBuyButtonWasPressed(true)
    addItem({
      variables: {
        items: [
          {
            id: Number(productId),
            quantity: totalizersQuantityItems,
            seller: String(productSeller),
          },
        ],
      },
    })

    setTimeout(() => {
      closeModal()
    }, 1950)

    setTimeout(() => {
      setBuyButtonWasPressed(false)
    }, 2200);
  }

  const arrayVoltagemSpecification = productcontextValue?.selectedItem?.variations.filter(
    (specification: any) =>
      specification?.name === specificationName
  )

  const currentClassInModal = modalIsOpen
    ? style['modal-after-open']
    : style['modal-before-close']

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={() => {}}
      onRequestClose={closeModal}
      contentLabel="Guia de medidas"
      className={style.modal}
      overlayClassName={`${currentClassInModal} ${style['overlay']}`}
      closeTimeoutMS={200}
    >
      <div className={style.containerModal}>
        {BuyButtonWasPressed ? (
          <>
            <p className={style.msgSuccess}>
              O produto foi adicionado ao carrinho com sucesso.
            </p>
          </>
        ) : (
          <>
            <img
              src="https://lojasmarabrazqa.vtexassets.com/arquivos/image-alert.png"
              alt="alerta voltagem"
            />
            <p className={style.titleVoltagem}>Voltagem do Produto</p>
            <span className={style.specificationVoltagem}>
              {arrayVoltagemSpecification && arrayVoltagemSpecification[0].values[0]}
            </span>
            <p className={style.messageVoltagem}>A voltagem está correta?</p>

            <div className={style.containerButtonsModal}>
              <button
                className={style.returnAndCloseModal}
                onClick={closeModal}
              >
                Não, voltar
              </button>
              <button
                className={style.btnBuyModal}
                onClick={e => {
                  e.preventDefault()
                  onButtonClick(e)
                }}
              >
                Sim, quero comprar
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}