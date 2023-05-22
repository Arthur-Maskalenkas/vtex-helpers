import React from "react"
import { applyModifiers, useCssHandles } from "vtex.css-handles"
import { useRenderSession } from "vtex.session-client"
import { AvantiMenuMobileContextItemProps } from "../../../../typings/types"
import { MenuArrow } from "../../Menu/MenuArrow"
import { CSS_HANDLES } from "../../CSS_HANDLES"
import { toggleClick } from "../../../Utils/toggleClick"
import { SubItems } from "../Items/SubItems"
import { FormatText } from "../../../Utils/FormatString"

export const LoginItem = ({ item }: AvantiMenuMobileContextItemProps) => {

  const css = useCssHandles(CSS_HANDLES)
  const { session } = useRenderSession()
  const emailSession = session?.namespaces?.authentication?.storeUserEmail?.value

  return (
    <li className={applyModifiers(css['mobile-item'], [
          FormatText(item.__editorItemTitle),
          item.items?.length ? 'hasChildren' : '',
        ])}
    >
      <a href={(item.items?.length && item.itemsDef) && emailSession ? undefined : "/account#"}
         onClick={(event) => toggleClick(event, css["mobile-item--Opened"])}
         className={applyModifiers(css["mobile-itemLink"], FormatText(item.__editorItemTitle))}
      >
        <span className={css["mobile-itemTextContent"]}>
          {(item.icon && item.iconDef) && 
            <img alt="Link Icon" src={item.icon} className={css["mobile-itemIcon"]} />
          }
          <span className={css["mobile-itemText"]}>
            {emailSession ? item.myAcc : item.__editorItemTitle}
          </span>
        </span>
        {(item.items?.length && item.itemsDef) && emailSession ? <MenuArrow /> : ""}
      </a>
      {(item.items?.length && item.itemsDef) && emailSession ? <SubItems items={item.items} /> : ""}
    </li>
  )
}
