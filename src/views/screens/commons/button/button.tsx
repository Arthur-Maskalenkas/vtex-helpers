import './styles.scss'
import { type ButtonHTMLAttributes } from 'react'



export const Text = ({ children }: React.PropsWithChildren) => {
		return (
				<span className={'component-button text common'}>
						{children}
				</span>
		)


}

export const Container = ({ children, fullWidth = false, fullHeight = false, ...rest }: {
		fullWidth?: boolean,
		fullHeight?: boolean
} & React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
		const customClass = `${fullWidth ? 'fullWidth' : ''} ${fullHeight ? 'fullHeight' : ''}`

		return (
				<button {...rest} className={`component-button container common ${customClass}`}>
						{children}
				</button>
		)
}

export const Button = () => null

Button.Container = Container
Button.Text = Text