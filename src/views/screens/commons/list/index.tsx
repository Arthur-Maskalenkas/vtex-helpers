import React from 'react'
import './styles.scss'



const Container = ({ children }: React.PropsWithChildren) => {
		return (
					<ul className="component-list container common">
							{children}
					</ul>
		)
}
const Item = ({ children, index }: React.PropsWithChildren<{ index: string }>) => {
		return (
					<li className="component-list item common" key={index}>
							{children}
					</li>
		)
}

export const List = () => null

List.Container = Container
List.Item = Item