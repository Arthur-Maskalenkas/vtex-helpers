// @ts-ignore
import React, { PropsWithChildren } from 'react'



export type CaseProps = {
		condition: boolean
}


const Case = ({ children }: React.PropsWithChildren<CaseProps>) => children
const DefaultCase = ({ children }: React.PropsWithChildren) => children

export const Switch = () => null


const Container = ({ children }: PropsWithChildren) => {
		const matchChild = React.Children.toArray(children).find(
				(child: any) => (child?.type !== DefaultCase && child?.props?.condition) || child?.type === DefaultCase
		)

		return matchChild
}

Switch.Container = Container
Switch.Case = Case
Switch.DefaultCase = DefaultCase