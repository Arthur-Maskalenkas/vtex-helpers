import { Button as ButtonCommon } from '../button/button.tsx'
import './styles.scss'
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
    const inputValues = Array.from(event.currentTarget.elements)

    const params: string[] = []

    for (const input of inputValues) {
      const [id, value, thisInputHaveValue] = ['id', 'value', 'data-with-value']
        .map(attr => input?.attributes?.getNamedItem(attr)?.value)

      if (input?.id && value) {
        if (!thisInputHaveValue) {
          params.push(`${id}=${value}`)
          continue
        }

        const [splitId, splitValue] = value.split('=')

        if (!splitValue) continue

        params.push(`${id}=${splitId}=${splitValue}`)
      }
    }

    params?.length && handleSubmit(params.join(','))
  }

  return (
        <form role={'form'} onSubmit={clearSubmit} className={'component-form form common'}>
            {children}
        </form>
  )
}
Form.Button = Button