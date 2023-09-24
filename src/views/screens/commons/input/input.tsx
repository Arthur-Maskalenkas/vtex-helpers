import React, { type InputHTMLAttributes } from 'react'
import './styles.scss'



const Container = ({ children }: React.PropsWithChildren) => {
		return (
				<div className="component-input container common">
						{children}
				</div>
		)
}
const Label = ({ children, htmlFor }: React.PropsWithChildren<{ htmlFor: string }>) => {
		return (
				<label htmlFor={htmlFor} className="component-input label common">
						{children}
				</label>
		)
}

const Description = ({ children, ariaDescribedBy }: React.PropsWithChildren<{ ariaDescribedBy: string }>) => {
		return (
				<span id={ariaDescribedBy} className="component-input description common">
						{children}
				</span>
		)
}

export const Input = ({ value, id, name, ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
		return <input  {...rest} type={"text"} value={value} id={id} name={name} className="component-input input common"/>
}

Input.Container = Container
Input.Label = Label
Input.Description = Description