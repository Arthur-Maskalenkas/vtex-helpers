import React from 'react'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import useProduct from "vtex.product-context/useProduct";
import { useUmComponenteContext } from "./context";
import styles from './styles.css'

export type UmComponenteProps = {
  children: React.ReactNode
}

export const UmComponente = ({ children }: UmComponenteProps) => {

  console.log('props recebidas no componente!', children)

  const productCtx: ProductContextState = useProduct();
  console.log('Contexto de produto consumido no componente!', productCtx);

  React.useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();

        console.log('api consumida no componente!', data)
      } catch (e) {
        console.log('erro ao consumir api no componente!', e)
      }
    }

    getApi();
  }, []);

  const { getQuantityProducts } = useUmComponenteContext()
  console.log('contexto sendo consumido pelo componente!', getQuantityProducts)

  return (
    <div className={styles.containerUmComponente}>
      um-componente
    </div>
  )
}
