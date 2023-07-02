
import React, { useEffect, useState } from 'react'


import { useCssHandles } from 'vtex.css-handles';
import { useProduct } from 'vtex.product-context';
import { CSS_HANDLES, generateCSS } from '../modules';
import { buildServiceGetForm } from "../services/container-pdp/main/get-form"
import { GetForm } from '../services/container-pdp/presentation/get-form';

import { ContainerStep1 } from './step-1';
import { useContextContainerPDP } from './context';

export const ContainerPDP = () => {
  const [inputOptionsDistance, setInputOptionsDistance] = useState<GetForm.DataDistanceTransformed>()
  const [inputOptionsColor, setInputOptionsColor] = useState<GetForm.DataColorTransformed>()
  const [inputOptionsSize, setInputOptionsSize] = useState<GetForm.DataSizeTransformed>()

  const { componentValues: { handleChangeModalScreen } } = useContextContainerPDP()

  const css = useCssHandles(CSS_HANDLES);
  const ctx = useProduct()




  useEffect(() => {
    (async () => {
      const transformStep1Data = buildServiceGetForm(ctx)

      const dataFetched = await transformStep1Data.getFirstStepData()
      console.log(`🚀 ~ file: index.tsx:37 ~ dataFetched:`, dataFetched)

      setInputOptionsColor(dataFetched.color)
      setInputOptionsSize(dataFetched.size)
      setInputOptionsDistance(dataFetched.distance)
    })()
  }, [ctx?.product?.productId])





  return (
    <div className={generateCSS('container-component', ['container-steps-pdp'], css)}>
      <ContainerStep1 {...{ inputOptionsColor, inputOptionsDistance, inputOptionsSize }} />
      <button onClick={(e) => handleChangeModalScreen('SecondStep', e)}>tela formulario</button>
      <button onClick={(e) => handleChangeModalScreen('Warning', e)}>tela aviso</button>
      <button onClick={(e) => handleChangeModalScreen('Coupon', e)}>tela cupom</button>

    </div>
  );

}
