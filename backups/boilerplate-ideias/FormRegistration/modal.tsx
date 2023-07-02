import React, { useState, Fragment } from 'react'
import styles from './styles.css'

interface Modal {
  title: string,
  description: string,
  description2?: string,
  textButton: string,
  variation?: string,
}

const Modal = ({ title, description, description2, textButton, variation }: Modal) => {

  const [close, setClose] = useState<boolean>(false)

  const RenderModal = () => {

    function handleCloseModalButton(refreshPage: boolean) {
      setClose(true)
      if (refreshPage) {
        // @ts-ignore
        document.location.reload(true);
        return
      }
      document.location.href = '/acesso'
    }
    return (
      <section className={styles.sectionModalCadastro}>
        <div className={styles.mainContainerCadastro}>
          <div className={styles.modalContainerCadastro}>
            <div className={styles.modalHeaderCadastro}>
              <button className={styles.modalCloseCadastro} onClick={() => handleCloseModalButton(variation == 'cadastroEnviado')}></button>
            </div>
            <div className={styles.modalBodyCadastro}>
              <h2 className={styles.modalTitleCadastro}>{title}</h2>
              <p className={styles.modalDescriptionCadastro}>
                {description}

                <span className={styles.modalDescriptionCadastro2}>
                  {description2}
                </span>

              </p>
            </div>
            <div className={styles.modalFooterCadastro}>
              <button className={styles.modalButtonCadastro} onClick={() => handleCloseModalButton(variation == 'cadastroEnviado')}>{textButton}</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <Fragment>
      {
        !close ? <RenderModal /> : null
      }
    </Fragment>
  )
}

export default Modal
