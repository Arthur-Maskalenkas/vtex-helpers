import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import { CSS_HANDLES, generateCSS } from '../../modules';
import { GetForm } from '../../services/container-pdp/presentation/get-form';
import { useContextContainerPDP } from '../context';

export type ContainerStep1Props = {
  inputOptionsDistance: GetForm.DataDistanceTransformed
  inputOptionsColor: GetForm.DataColorTransformed
  inputOptionsSize: GetForm.DataSizeTransformed
}

export const ContainerStep1 = ({ inputOptionsColor, inputOptionsDistance, inputOptionsSize }: ContainerStep1Props) => {
  const css = useCssHandles(CSS_HANDLES);
  const { componentValues: { form: { register, watch } } } = useContextContainerPDP()

  const watchedFields = watch(['distance', 'color', 'size']);
  const formIsValid = Object.values(watchedFields).every(field => field);

  return (
    <div className={generateCSS('container-screen', ['first-step'], css)}>

      <div className={generateCSS('container-content', ['lists'], css)}>
        <ul className={generateCSS('container-component', ['list-selector-distance'], css)}>
          {inputOptionsDistance?.map((item, index) => {
            return (
              <li key={index} className={generateCSS('container-content', ['input'], css)}>
                <input
                  className={generateCSS('input', [''], css)}
                  type="radio"
                  value={item?.form_value}
                  {...register('distance')} />
                <label className={generateCSS('label', ['input'], css)}>{item?.form_value} {item?.comp_isActive && 'aqui'}</label>
              </li>

            )
          })}
        </ul>

        <ul className={generateCSS('container-component', ['list-selector-color'], css)}>
          {inputOptionsColor?.map((item, index) => {
            return (
              <li key={index} className={generateCSS('container-content', ['input'], css)}>
                <input
                  className={generateCSS('input', [''], css)}
                  type="radio"
                  value={item?.form_value}
                  {...register('color')} />
                <label className={generateCSS('label', ['input'], css)}>{item?.form_value} {item?.comp_isActive && 'aqui'}</label>
              </li>
            )
          })}
        </ul>

        <ul className={generateCSS('container-component', ['list-selector-size'], css)}>
          {inputOptionsSize?.map((item, index) => {
            console.log(`🚀 ~ file: index.tsx:90 ~ {inputOptionsSize?.map ~ item:`, item)
            return (
              <li key={index} className={generateCSS('container-content', ['input'], css)}>
                <input
                  className={generateCSS('input', [''], css)}
                  type="radio"
                  value={item?.form_value}
                  {...register('size')} />
                <label className={generateCSS('label', ['input'], css)}>{item?.form_value} {item?.comp_isActive && 'aqui'}</label>
              </li>
            )
          })}
        </ul>
      </div>

      <button type='submit' disabled={formIsValid} className={generateCSS('button', ['index', 'submit'], css)}>
        Próxima etapa
      </button>
    </div>
  );
};
