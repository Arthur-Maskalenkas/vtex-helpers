import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Dropdown, SanitizeText, Link } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderOtherSections = () => {
	const css = useCssHandles(CSS_HANDLES)
	const context = UseGlobalContextAvantiFooter()
	const containerClassName = generateCSS('container-component', [
		'context-render',
		'other-sections'
	], css)


	return (
		<ul className={containerClassName}>
			{context?._screen_config_other_section?.[0]?.items?.map((item, index) => (
				<li className={generateCSS('list-item', [
					'other-sections',
					'section-1'
				], css)} key={index}>
					<Dropdown title={item.__editorItemTitle}>
						<SanitizeText text={item.__editorItemTitle} customClass='title'/>
						<ul className={generateCSS('list', [
							'other-sections',
							'sections-2'
						], css)}>
							{item?.items?.map((item, index) => (
								<li className={generateCSS('list-item', [
									'other-sections',
									'section-2'
								], css)} key={index}>
									<Link href={item.href} target={item.target
																								 ? '_blank'
																								 : '_self'}>
										<SanitizeText text={item?.__editorItemTitle}/>
									</Link>
								</li>
							))}
						</ul>
					</Dropdown>
				</li>
			))}
		</ul>
	)
}