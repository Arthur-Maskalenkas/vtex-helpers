// componente com a mesma funcionlidade do rich-text presente na vtex.

import React, { useMemo } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import insane from '@vtex/insane'
import marked, { Renderer } from 'marked'
import escapeHtml from 'escape-html'
import { MarkedHelper, SanitizerHelper } from './utils'

export type SanitizeTextProps = {
  text?: string
  customClass?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'li'
}

export const SanitizeText = ({ text, customClass = 'default-class', as }: SanitizeTextProps) => {
  if (!text) {
    return <></>
  }
  const css = useCssHandles(CSS_HANDLES)

  const [isMounted, setMounted] = React.useState(false)


  const renderer = React.useRef<Renderer>()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) {
    renderer.current = new Renderer()
    renderer.current.strong = (content: string) => MarkedHelper.configStrong(content, css, generateCSS)
    renderer.current.paragraph = (content: string) => MarkedHelper.configNormalText(content, 'p', css, generateCSS)
    renderer.current.strong = (content: string) => MarkedHelper.configStrong(content, css, generateCSS)
    renderer.current.em = (content: string) => MarkedHelper.configNormalText(content, 'em', css, generateCSS)
    renderer.current.heading = (text, level, raw) => MarkedHelper.configHeading(text, level, raw, css, generateCSS)
    renderer.current.link = (href: string, title: string, content: string) => MarkedHelper.configLink(href, title, content, css, generateCSS)
    renderer.current.image = (href: string, title: string, content: string) => MarkedHelper.configImage(href, title, content, css, generateCSS)
    renderer.current.list = (body: string, ordered: boolean) => MarkedHelper.configList(body, ordered, css, generateCSS)
    renderer.current.listitem = (content: string) => MarkedHelper.configListItem(content, css, generateCSS)
    renderer.current.html = (html) => escapeHtml(html)
  }

  const HTMLSanitized = useMemo(() => {
    marked.setOptions({
      gfm: true,
      breaks: true,
      sanitize: false, // Use insane lib for sanitizing
      smartLists: true,
      renderer: renderer.current,
    })

    let html = marked(text)
    // Encontra as tags do nível superior
    const topLevelTagMatches = html.match(/<([a-z][a-z0-9]*)\b[^>]*>(.*?)<\/\1>/gs) || []

    // Se houver apenas uma tag no nível superior, substitui essa tag pela tag presente na prop 'as'
    if (topLevelTagMatches.length === 1 && Boolean(as)) {
      const tag = topLevelTagMatches?.[0]?.match(/<([a-z][a-z0-9]*)\b[^>]*>/)?.[1]
      const tagRegEx = new RegExp(`<(/)?${tag}(\\b|>)`, 'g')
      html = html.replace(tagRegEx, `<$1${as}$2`)
    }

    return insane(
      html,
      SanitizerHelper.getConfig()
    )
  }, [text])

  return (
    <div className={generateCSS('sanitized', ['container', customClass], css)} dangerouslySetInnerHTML={{ __html: HTMLSanitized }} />
  )
}
