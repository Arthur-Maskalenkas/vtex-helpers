import './styles.scss'
import { type ButtonHTMLAttributes } from 'react'



export const Text = ({ children }: React.PropsWithChildren) => {
		return (
				<span className={'component-button text common'}>
						{children}
				</span>
		)
}

export const Container = ({ children, ...rest }: React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
		return (
				<button {...rest} className={'component-button button common'}>
						{children}
				</button>
		)
}

export const Button = () => null

Button.Container = Container
Button.Text = Text