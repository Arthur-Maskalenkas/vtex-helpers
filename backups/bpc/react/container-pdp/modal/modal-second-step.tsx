import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useContextContainerPDP } from '../context'



export const ModalSecondStep = () => {
  const css = useCssHandles(CSS_HANDLES)
  const { componentValues: { form: { register } } } = useContextContainerPDP()

  return (
    <div className={generateCSS('container-screen', ['form', 'modal-form'], css)}>
      <div className={generateCSS('container-content', ['input'], css)}>
        <label className={generateCSS('label', ['input'], css)}>Nome</label>
        <input
          className={generateCSS('input', [''], css)}
          title={'Nome'}
          type="text"
          {...register('NomedoCorredor')} />
      </div>

      <div className={generateCSS('container-content', ['input'], css)}>
        <label className={generateCSS('label', ['input'], css)}>Email</label>
        <input
          className={generateCSS('input', [''], css)}
          title={'Email'}
          type="text"
          {...register('email')} />
      </div>

      <div className={generateCSS('container-content', ['input'], css)}>
        <label className={generateCSS('label', ['input'], css)}>Cpf</label>
        <input
          className={generateCSS('input', [''], css)}
          title={'Cpf'}
          type="text"
          {...register('CPF')} />
      </div>

      <div className={generateCSS('container-content', ['input'], css)}>
        <label className={generateCSS('label', ['input'], css)}>Data de nascimento</label>
        <input
          className={generateCSS('input', [''], css)}
          title={'Data de nascimento'}
          type="text"
          {...register('DatadeNascimento')} />
      </div>

      <div className={generateCSS('container-content', ['input'], css)}>
        <label className={generateCSS('label', ['input'], css)}>é pessoa com deficiencia (PCD)?</label>
        <input
          className={generateCSS('input', [''], css)}
          title={'é pessoa com deficiencia (PCD)?'}
          type="text"
          {...register('pcd')} />
      </div>

      <div className={generateCSS('container-content', ['input'], css)}>
        <label className={generateCSS('label', ['input'], css)}>Tamanho da camiseta</label>
        <input
          className={generateCSS('input', [''], css)}
          title={'Tamanho da camiseta'}
          type="text"
          {...register('TamnhodaCamiseta')} />
      </div>

      <div className={generateCSS('container-content', ['input'], css)}>
        <label className={generateCSS('label', ['input'], css)}>LGPD: Li e concordo com o termo de responsabilidade e o regulamento.</label>
        <input
          className={generateCSS('input', [''], css)}
          title={'LGPD: Li e concordo com o termo de responsabilidade e o regulamento.'}
          type="text"
          {...register('acceptTerms')} />
      </div>
      <button type={"submit"}>Finalizar comprar</button>
    </div>
  )
}
