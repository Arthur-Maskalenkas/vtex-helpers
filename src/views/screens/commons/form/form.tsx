import { Button as ButtonCommon } from '../button/button.tsx'
import './styles.scss'
export const Button = ({ children }: React.PropsWithChildren) => {
  return (
      <ButtonCommon type={'submit'}>
            {children}
      </ButtonCommon>
  )
}

export const Form = ({ children, handleSubmit }: React.PropsWithChildren<{ handleSubmit: (data: Record<string, any>) => void }>) => {
  const clearSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Array.from(event.currentTarget.elements).reduce((acc: any, element: any) => {
      if (element.id) {
        acc[element.id] = element.value
      }
      return acc
    }, {})
    handleSubmit(data)
  }

  return (
        <form onSubmit={clearSubmit} className={'component-form form common'}>
            {children}
        </form>
  )
}
Form.Button = Button