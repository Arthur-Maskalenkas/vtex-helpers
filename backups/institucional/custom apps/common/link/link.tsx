import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Link as LinkVtex } from 'vtex.render-runtime'
import { CSS_HANDLES, generateCSS } from '../../modules'


type LinkTypes = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'title' | 'children'>

export type LinkProps = { modifier?: string, fullWidth?: boolean } & LinkTypes

export const Link = ({
  href,
  children,
  fullWidth,
  modifier = '',
  ...props
}: LinkProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const thisSrcIsInternal = href?.includes(window?.location?.host) || href?.charAt(0) === '/'

  if (thisSrcIsInternal) {
    return <LinkVtex
      to={href} {...props}
      className={generateCSS('container-component', [
        'link',
        'forked-from-vtex',
        modifier,
        `${fullWidth ? 'style-full-width' : 'style-width-normal'}`
      ], css)}>
      {children}
    </LinkVtex>
  }

  return <a
    {...props}
    href={href}
    className={generateCSS('container-component', [
      'link',
      'default',
      modifier,
      `${fullWidth ? 'style-full-width' : 'style-width-normal'}`
    ], css)}>
    {children}
  </a>
}
