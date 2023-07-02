import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

import { useCssHandles } from 'vtex.css-handles';
import { useProduct } from 'vtex.product-context';
import { CSS_HANDLES, generateCSS } from '../modules';
import { buildServiceGetForm } from "../services/container-pdp/main/get-form"
import { GetForm } from '../services/container-pdp/presentation/get-form';
import { SchemaFormStep, defaultValues, schemaFormStep } from './form-schema';
import { ContainerStep1 } from './step-1';
import { Modal } from './modal';
// import { ContainerStep2 } from "./step-2"

export const ContainerPDP = () => {
  const [inputOptionsDistance, setInputOptionsDistance] = useState<GetForm.DataDistanceTransformed>()
  const [inputOptionsColor, setInputOptionsColor] = useState<GetForm.DataColorTransformed>()
  const [inputOptionsSize, setInputOptionsSize] = useState<GetForm.DataSizeTransformed>()

  const css = useCssHandles(CSS_HANDLES);
  const ctx = useProduct()

  const {
    handleSubmit,
    watch,
    register
  } = useForm<SchemaFormStep>({
    resolver: yupResolver(schemaFormStep),
    defaultValues
  });

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

  const handleFormSubmit = (data: SchemaFormStep) => {
    console.log(`🚀 ~ file: index.tsx:45 ~ handleFormSubmit ~ data:`, data)

  };

  const watchedFields = watch(['distance', 'color', 'size']);
  const formIsValid = Object.values(watchedFields).every(field => field);

  return (
    <div onSubmit={handleSubmit(handleFormSubmit)} className={generateCSS('container-component', ['container-steps-pdp'], css)}>
      <form>
        <ContainerStep1 {...{ formIsValid, inputOptionsColor, inputOptionsDistance, inputOptionsSize, register }} />
        <Modal register={register} />
      </form>
    </div>
  );

}
