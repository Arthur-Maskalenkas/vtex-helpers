import { Button as ButtonCommon } from '../button/button.tsx'
import './styles.scss'
import { mapParams } from './utils.ts'
export const Button = ({ children }: React.PropsWithChildren) => {
  return (
      <ButtonCommon type={'submit'}>
            {children}
      </ButtonCommon>
  )
}

export const Form = ({ children, handleSubmit }: React.PropsWithChildren<{ handleSubmit: (data: string) => void }>) => {
  const clearSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const paramsMapped = mapParams(event)

    paramsMapped && handleSubmit(paramsMapped)
  }

  return (
        <form role={'form'} onSubmit={clearSubmit} className={'component-form form common'}>
            {children}
        </form>
  )
}
Form.Button = Button