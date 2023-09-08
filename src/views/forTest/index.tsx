import './styles.scss'
import { useEffect } from 'react'
import { factoryControllerLoadRuntime } from '../../services/main/factories/controllers/loadRuntime.ts'

export const Application = () => {
  useEffect(() => {
    console.log('teste 111')

    fetch('/api/catalog_system/pvt/products/7754/specification').then(async r => await r.json()).then((r) => {
      console.log('teste 222', r)
    })

    factoryControllerLoadRuntime().handle().then((runtime) => {
      console.log('#!! 🔥 index 08:54', runtime)
    })
  }, [])

  return (
        <div className={'container-main-app'}>
                olas
        </div>
  )
}