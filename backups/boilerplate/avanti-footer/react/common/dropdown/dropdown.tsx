import React, { useRef } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from "../../modules"
import { SanitizeText } from '../sanitize-text/sanitize-text'
import { IconArrow } from './icon-arrow'

type TDropdown = {
  title?: string
  text?: string
  children?: any
}

export const Dropdown = ({
  title,
  text,
  children
}: TDropdown) => {
  if (!title) {
    return <></>
  }



  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const css = useCssHandles(CSS_HANDLES)

  const classNameIfIsOpen = isOpen
    ? 'opened'
    : 'closed'

  const refContainerComponent = useRef<HTMLDivElement>(null)
  const refContainerTitle = useRef<HTMLButtonElement>(null)
  const refContainerChildren = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (refContainerComponent.current && refContainerChildren.current && refContainerTitle.current) {
      const heightChildren = refContainerChildren.current.scrollHeight
      const heightTitle = refContainerTitle.current.scrollHeight

      refContainerComponent.current.style.maxHeight = isOpen
        ? `${heightChildren + heightTitle}px`
        : `${heightTitle}px`
    }
  }, [isOpen])

  return (
    <div ref={refContainerComponent} className={generateCSS('container-component', ['dropdown', classNameIfIsOpen], css)}    >
      <button ref={refContainerTitle} title={`${isOpen ? 'Diminuir' : 'Expandir'}`} onClick={handleClick} className={generateCSS('container-content', ['dropdown', 'title'], css)}      >
        <IconArrow />
        <SanitizeText text={title} customClass='title' />
      </button>
      <div ref={refContainerChildren} className={generateCSS('container-content', ['dropdown', 'children'], css)}>
        {!!children ? (
          children
        ) :
          (
            <SanitizeText text={text} customClass='content' />

          )}
      </div>
    </div>
  )
}
