import React, { useRef } from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from "../../modules"


type TDropdown = {
	title?: string
	text?: string
}

export const Dropdown = ({
	text,
	title
}: TDropdown) => {
	if (!text || !title) {
		return <></>
	}

	const [ isOpen, setIsOpen ] = React.useState<boolean>(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const css = useCssHandles(CSS_HANDLES)

	const classNameIfIsOpen = isOpen
														? 'opened'
														: 'closed'

	const textElement = useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (textElement.current) {
			textElement.current.style.height = isOpen
																				 ? `${textElement.current.scrollHeight}px`
																				 : '0px'
		}
	}, [ isOpen ])

	return (
		<button onClick={() => handleClick()} className={`${applyModifiers(css['container-component'], [
			'dropdown',
			`dropdown-${classNameIfIsOpen}`
		])}`}>
			<div className={`${applyModifiers(css['container-content'], 'title')}`}>
				<h2 dangerouslySetInnerHTML={{__html: title}} className={`${applyModifiers(css['title'], '')}`}>
				</h2>

				<span className={`${applyModifiers(css['icon'], 'status')}`}>
          {isOpen
					 ? '-'
					 : '+'}
        </span>
			</div>
			<div className={`${applyModifiers(css['container-content'], 'text')}`} ref={textElement}>
				<p dangerouslySetInnerHTML={{__html: text}} className={`${applyModifiers(css['text'], '')}`}>
				</p>
			</div>
		</button>
	)
}