import './styles.scss'
import { type ButtonHTMLAttributes } from 'react'

export const Text = ({ children }: React.PropsWithChildren) => {
  return (
      <button className={'component-button text common'}>
        {children}
      </button>
  )
}

export const Button = ({ children, ...rest }: React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button {...rest} className={'component-button button common'}>
        {children}
    </button>
  )
}
Button.Text = Text