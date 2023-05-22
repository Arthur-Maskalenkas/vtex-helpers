import React from "react"
import { applyModifiers, useCssHandles } from "vtex.css-handles"
import { MenuArrow } from "../../Menu/MenuArrow"
import { CSS_HANDLES } from "../../CSS_HANDLES"
import { toggleClick } from "../../../Utils/toggleClick"
import { SubItems } from "./SubItems"
import { AvantiMenuMobileContextItemProps } from "../../../../typings/types"
import { FormatText } from "../../../Utils/FormatString"

export const NormalItem = ({ item }: AvantiMenuMobileContextItemProps) => {
  
  const css = useCssHandles(CSS_HANDLES)

  return (
    <li className={applyModifiers(css['mobile-item'], [
          FormatText(item.__editorItemTitle),
          item.items?.length ? 'hasChildren' : '',
        ])}
    >
      <a href={item.items?.length && item.itemsDef ? undefined : item.url}
         onClick={(event) => toggleClick(event, css["mobile-item--Opened"])}
         className={applyModifiers(css["mobile-itemLink"], FormatText(item.__editorItemTitle))}
      >
        <span className={css["mobile-itemTextContent"]}>
          {(item.icon && item.iconDef) && 
            <img alt={item.__editorItemTitle} src={item.icon} className={css["mobile-itemIcon"]} />
          }
          <span className={css["mobile-itemText"]}>{item.__editorItemTitle}</span>
        </span>
        {item.items?.length && item.itemsDef ? <MenuArrow /> : ""}
      </a>
      {item.items?.length && item.itemsDef ? <SubItems items={item.items} /> : ""}
    </li>
  )
}
