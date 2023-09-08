import './styles.scss'
import { useEffect } from 'react'
import { factoryControllerLoadRuntime } from '../../services/main/factories/controllers/loadRuntime.ts'

export const Application = () => {
  useEffect(() => {
    console.log('teste 1')

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