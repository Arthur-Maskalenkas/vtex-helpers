import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'

import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import {
	ContextRenderAboutStore,
	ContextRenderCopyright,
	ContextRenderLogo,
	ContextRenderOtherSections,
	ContextRenderPaymentMethods,
	ContextRenderSecurity,
	ContextRenderSocialLinks
} from '../../context-renders'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const RenderMobile = () => {
	const css = useCssHandles(CSS_HANDLES)
	const footerContext = UseGlobalContextAvantiFooter()

	console.log('footerContext', footerContext)
	return (
		<div className={generateCSS('container-component', [ 'render-mobile' ], css)}>
			<ContextRenderLogo/>
			<ContextRenderOtherSections/>
			<ContextRenderAboutStore/>
			<ContextRenderSecurity/>
			<ContextRenderSocialLinks/>
			<ContextRenderPaymentMethods/>
			<ContextRenderCopyright/>
		</div>
	)
}