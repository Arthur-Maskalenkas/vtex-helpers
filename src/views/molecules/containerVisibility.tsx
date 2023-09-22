import React from 'react'



const InsideContent = ({ children }: React.PropsWithChildren) => {
		return (
					<div className={'container-inside-content'}>
							{children}
					</div>
		)
}

const OutsideContent = ({ children }: React.PropsWithChildren) => {
		return (
					<div className={'container-outside-content'}>
							{children}
					</div>
		)
}

export const ContainerVisibility = () => null

ContainerVisibility.InsideContent = InsideContent
ContainerVisibility.OutsideContent = OutsideContent