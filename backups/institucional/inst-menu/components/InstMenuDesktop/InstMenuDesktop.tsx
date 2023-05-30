import React from "react";
import { ItemInstMenu } from "../../context-global/interfaces"
import { CSS_HANDLES, generateCSS } from "../../modules";
import { useCssHandles } from "vtex.css-handles";

interface IProps {
  schema: ItemInstMenu[]
}

const InstMenuDesktop = ({ schema }: IProps) => {
  console.log(`🚀 ~ file: InstMenuDesktop.tsx:11 ~ InstMenuDesktop ~ schema:`, schema)

  const css = useCssHandles(CSS_HANDLES)
  const currentPath = !!document && document?.location?.pathname?.replace('/', '')

  return (
    <div className={generateCSS('container-component', ['instmenudesktop', 'desktop'], css)}>
      <div className={generateCSS('list', ['options', ''], css)}>
        {schema?.map((item: ItemInstMenu, index: number) => {

          const isCurrentHref = item?.href?.includes(currentPath)

          if (item.type == 'titulo') {
            return (
              <h4 key={index} title={`sessão ${item.text}`} className={generateCSS('list-item', ['option', 'title'], css)} >{item.text}</h4>
            )
          }

          return <a key={index} title={`ir para ${item.text}`} href={item.href} className={generateCSS('list-item', ['option', 'link', isCurrentHref ? 'active' : 'disabled'], css)}>{item.text}</a>
        })}
      </div>
    </div>
  )
}

export default InstMenuDesktop
