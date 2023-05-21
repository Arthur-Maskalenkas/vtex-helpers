import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { ImageNormal, ImageNormalProps, SanitizeText } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderSecurity = () => {
	const css = useCssHandles(CSS_HANDLES)
	const context = UseGlobalContextAvantiFooter()?._screen_config_security?.[0]
	const containerClassName = generateCSS('container-component', [
		'context-render',
		'security'
	], css)

	return (
		<div className={containerClassName}>
			<SanitizeText text={context?.__editorItemTitle}/>

			<ul>
				{context?.items?.map((item, index) => {
					const imageAttrs: ImageNormalProps = {
						src: item?.src,
						title: item?.__editorItemTitle,
						alt: item?.alt,
						className: 'logo'
					}

					return (
						<li key={index}>
							<ImageNormal {...imageAttrs} />
						</li>
					)
				})}
			</ul>

		</div>
	)
}