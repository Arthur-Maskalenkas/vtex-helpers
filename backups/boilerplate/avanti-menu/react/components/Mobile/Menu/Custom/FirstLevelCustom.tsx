import React from "react"
import { applyModifiers, useCssHandles } from "vtex.css-handles"
import { MenuItemsFirstLevel } from "../../../../typings/types"
import { CSS_HANDLES } from "../../CSS_HANDLES"
import { MenuArrow } from "../MenuArrow"
import { SecondLevelCustom } from "./SecondLevelCustom"
import { toggleClick } from "../../../Utils/toggleClick"
import { FormatText } from "../../../Utils/FormatString"
import { useAvantiMenuMobile } from "../../../../context/AvantiMenuContext"
import { MenuIcon } from "../MenuIcon"

export const FirstLevelCustom = ({ item }: MenuItemsFirstLevel) => {

  const css = useCssHandles(CSS_HANDLES)
  const { props } = useAvantiMenuMobile()
  const { __editorItemTitle, url, tagTitle, items, target, highlightMob, seeAll, menuBarIcon, menuIconVisibleOnMobile, color } = item

  return (
    <>
      {item &&
        <li className={applyModifiers(css['mobile-menuItem'], [
          FormatText(__editorItemTitle),
          items?.length ? 'hasChildren' : '',
          highlightMob ? 'highlightMob' : ''
        ]
        )}
        >
          <a onClick={(event) => toggleClick(event, css['mobile-menuItem--Opened'])}
            href={items?.length && props.secondDef ? undefined : `${url || ''}`}
            title={tagTitle || __editorItemTitle}
            target={target ? "_blank" : "_self"}
            className={applyModifiers(css['mobile-menuItemLink'], [
              FormatText(__editorItemTitle),
              items?.length ? 'hasChildren' : '',
              highlightMob ? 'highlightMob' : ''
            ]
            )}
          >
            <span className={css['mobile-menuItemLinkText']} style={{ color: color ?? color }}>
              {menuIconVisibleOnMobile && <MenuIcon src={menuBarIcon} />}
              {__editorItemTitle}
            </span>
            {items?.length && props.secondDef ? <MenuArrow fill={color} /> : ''}
          </a>
          {items?.length && props.secondDef ?
            <SecondLevelCustom
              items={items}
              title={__editorItemTitle}
              titleURL={`${url || ''}`}
              seeAll={seeAll}
            />
            : ''}
        </li>
      }
    </>
  )
}
