import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { ImageNormal, ImageNormalProps, SanitizeText, Link } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderSocialLinks = () => {
	const css = useCssHandles(CSS_HANDLES)
	const socialLinks = UseGlobalContextAvantiFooter()?._screen_config_social_links?.[0]
	const containerClassName = generateCSS('container-component', [
		'context-render',
		'social-links'
	], css)

	return (
		<div className={containerClassName}>
			<SanitizeText text={socialLinks?.__editorItemTitle}/>

			<ul>

				{socialLinks?.items?.map((item, index) => {

					const imageAttrs: ImageNormalProps = {
						src: item?.src,
						title: item?.__editorItemTitle,
						alt: item?.alt,
						className: 'logo'
					}


					return (

						<li key={index}>
							<Link href={item.href}>
								<ImageNormal {...imageAttrs} />
							</Link>
						</li>
					)
				})}
			</ul>

		</div>
	)
}