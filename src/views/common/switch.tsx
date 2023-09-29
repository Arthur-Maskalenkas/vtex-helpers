// @ts-ignore
import React, { PropsWithChildren } from 'react'



export type CaseProps = {
		condition: boolean
}


const Case = ({ children }: React.PropsWithChildren<CaseProps>) => children
const DefaultCase = ({ children }: React.PropsWithChildren) => children

export const Switch = () => null


const Container = ({ children }: PropsWithChildren) => {
		let matchChild: any = null
		let defaultCase: any = null

		React?.Children?.forEach(children, (child: any) => {
				if (!matchChild && child.type === Case) {
						const condition = child?.props?.condition
						const conditionResult = Boolean(condition)
						if (conditionResult) {
								matchChild = child
						}
				} else if (!defaultCase && child.type === DefaultCase) {
						defaultCase = child
				}
		});
		return matchChild ?? defaultCase ?? null
}

Switch.Container = Container
Switch.Case = Case
Switch.DefaultCase = DefaultCase