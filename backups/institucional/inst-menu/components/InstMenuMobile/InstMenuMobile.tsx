import React, { useState } from "react";
import { ItemInstMenu } from "../../context-global/interfaces"
import { CSS_HANDLES, generateCSS } from "../../modules";
import { useCssHandles } from "vtex.css-handles";

interface IProps {
  schema: ItemInstMenu[]
}

const InstMenuMobile = ({ schema }: IProps) => {
  console.log(`🚀 ~ file: InstMenuMobile.tsx:11 ~ InstMenuMobile ~ schema:`, schema)
  const css = useCssHandles(CSS_HANDLES)

  const MenuIcon = () => (
    <svg className={generateCSS('icon', ['instmenumobile', 'toggle-state-isopen'], css)} xmlns="http://www.w3.org/2000/svg" width="11.212" height="6.986" viewBox="0 0 11.212 6.986">
      <path id="arrow" d="M19.914,20.108a1.282,1.282,0,0,1,1-.484,1.378,1.378,0,0,1,1.032.484l4.194,4.162a1.143,1.143,0,0,1,.371.92,1.469,1.469,0,0,1-.4.984,1.424,1.424,0,0,1-1,.387,1.209,1.209,0,0,1-.936-.387l-3.259-3.226-3.259,3.291a1.344,1.344,0,0,1-.984.371,1.241,1.241,0,0,1-.92-.4,1.319,1.319,0,0,1-.452-1,1.132,1.132,0,0,1,.452-.936Zm1,3.678Z" transform="translate(26.512 26.61) rotate(180)" fill="#491835" />
    </svg>
  )

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  const firstTitle = schema?.find(item => item.type === 'titulo')

  return (
    <div className={generateCSS('container-content', ['instmenumobile', 'instMenuMobileContainer', `${isOpen ? 'opened' : 'closed'}`, 'mobile'], css)}>
      <button aria-label="Expandir opções" onClick={handleMenu} className={generateCSS('container-content', ['title', 'text'], css)}>{firstTitle?.text}<MenuIcon /></button>
      {isOpen ?
        (<div className={generateCSS('list', ['options', ''], css)}>
          {schema?.map((item: ItemInstMenu, index: number) => {
            if (item.text === firstTitle?.text) {
              return <></>
            }

            if (item.type == 'titulo') {
              return (
                <h4 key={index} title={`sessão ${item.text}`} className={generateCSS('list-item', ['option', 'title'], css)} >{item.text}</h4>
              )
            }

            return <a key={index} title={`ir para ${item.text}`} href={item.href} className={generateCSS('list-item', ['option', 'link'], css)}>{item.text}</a>
          })}
        </div>)
        :
        null
      }
    </div>
  )
}

export default InstMenuMobile
