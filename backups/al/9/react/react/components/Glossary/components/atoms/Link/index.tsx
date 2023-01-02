import React from 'react'

import styles from './styles.css'

type LinkProps = {
  children: React.ReactNode
  href: string
}

export const Link = ({ href, children }: LinkProps) => {
  return (
    <a href={href} className={`${styles.containerLink} `}>
      {children}
    </a>
  )
}
