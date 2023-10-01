import React from "react";



const Section = ({ children }: React.PropsWithChildren) => {
		return (
				<section className={"component-section styled"}>
						{children}
				</section>
		)
}
const AttrTitle = ({ children }: React.PropsWithChildren) => {
		return (
				<h2 className={"component-attr-title styled"}>
						{children}
				</h2>
		)
}

const SectionTitle = ({ children }: React.PropsWithChildren) => {
		return (
				<h1 className={"component-section-title styled"}>
						{children}
				</h1>
		)
}

const AttrDescription = ({ children }: React.PropsWithChildren) => {
		return (
				<p className={"component-attr-description styled"}>
						{children}
				</p>
		)
}

const List = ({ children }: React.PropsWithChildren) => {
		return (
				<ul className={"component-list styled"}>
						{children}
				</ul>
		)
}

export const Styleds = () => null

Styleds.Section = Section
Styleds.AttrTitle = AttrTitle
Styleds.List = List
Styleds.AttrDescription = AttrDescription