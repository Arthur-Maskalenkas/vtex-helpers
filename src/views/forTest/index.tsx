import './styles.scss'
import { useEffect } from 'react'

export const Application = () => {
  useEffect(() => {
    console.log('teste')
  }, [])

  return (
        <div className={'container-main-app'}>
                olas
        </div>
  )
}