import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../modules'
import { Link as LinkVtex } from 'vtex.render-runtime'

type LinkTypes = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'title' | 'children'>

export type LinkProps = { modifier?: string } & LinkTypes

export const Link = ({ href, children, modifier = '', ...props }: LinkProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const thisSrcIsInternal = href?.includes(window.location.host) || href?.charAt(0) === '/'

  if (thisSrcIsInternal) {
    return <LinkVtex
      to={href} {...props}
      className={generateCSS('container-component', ['link', 'link-vtex', modifier], css)}    >
      {children}
    </LinkVtex>
  }

  return <a
    {...props}
    href={href}
    className={generateCSS('container-component', ['link', 'link-default', modifier], css)}>
    {children}
  </a>
}
