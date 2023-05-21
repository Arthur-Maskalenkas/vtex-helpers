import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useRuntime } from 'vtex.render-runtime'
import { ImageResponsive, ImageResponsiveProps, Link } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderLogo = () => {
	const css = useCssHandles(CSS_HANDLES)
	const containerClassName = generateCSS('container-component', [
		'context-render',
		'logo'
	], css)
	const context = UseGlobalContextAvantiFooter()?._screen_config_logo?.[0]

	const {deviceInfo} = useRuntime()
	const isMobile = deviceInfo.isMobile

	const imageAttrs: ImageResponsiveProps = {
		isMobile,
		mobile: {
			height: '30',
			width: '165',
			src: context?.srcMobile ?? ''
		},

		desktop: {
			height: '30',
			width: '165',
			src: context?.srcDesktop ?? ''
		},

		title: context?.__editorItemTitle,
		alt: context?.alt,
		className: 'logo'
	}


	return (
		<div className={containerClassName}>
			<Link href='/'>
				<ImageResponsive {...imageAttrs} />
			</Link>
		</div>
	)
}