import React from "react";
import './styles.scss'



const List = ({ children }: React.PropsWithChildren) => {
		return (
				<ul className={"component-list styled parent-container"}>
						{children}
				</ul>
		)
}


const Screen = ({ children }: React.PropsWithChildren) => {
		return (
				<div className={"component-screen styled parent-container"}>
						{children}
				</div>
		)
}

export const Container = () => null

Container.List = List
Container.Screen = Screen