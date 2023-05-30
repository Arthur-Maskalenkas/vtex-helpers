import React, { useRef } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from "../../modules"
import { SanitizeText } from '../sanitize-text/sanitize-text'

type TDropdown = {
  title?: string
}

export const Dropdown = ({
  title,
  children
}: React.PropsWithChildren<TDropdown>) => {
  if (!title || !children) {
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

      refContainerComponent.current.style.height = isOpen
        ? `${heightChildren + heightTitle}px`
        : `${heightTitle}px`
    }
  }, [isOpen])

  return (
    <div ref={refContainerComponent} className={generateCSS('container-component', ['dropdown', classNameIfIsOpen], css)}    >
      <button ref={refContainerTitle} onClick={handleClick} className={generateCSS('container-content', ['dropdown', 'title'], css)}      >
        <SanitizeText text={title} customClass='title' />
        <span className={generateCSS('icon', ['dropdown', 'status'], css)}>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div ref={refContainerChildren} className={generateCSS('container-content', ['dropdown', 'children'], css)}>
        {children}
      </div>
    </div>
  )
}
