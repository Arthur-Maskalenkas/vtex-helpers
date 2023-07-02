import React, { useEffect, useState } from "react"
import { applyModifiers, useCssHandles } from "vtex.css-handles"
import { useAvantiMenu, useAvantiMenuMobile } from "../../../../context/AvantiMenuContext"
import { CategoriesMenu, MenuItemsFirstLevel } from "../../../../typings/types"
import { CSS_HANDLES } from "../../CSS_HANDLES"
import { MenuArrow } from "../MenuArrow"
import { toggleClick } from "../../../Utils/toggleClick"
import { SecondLevelCategory } from "./SecondLevelCategory"
import { FormatText } from "../../../Utils/FormatString"
import { MenuIcon } from "../MenuIcon"

export const FirstLevelCategory = ({ item }: MenuItemsFirstLevel) => {

  const [category, setCategory] = useState<CategoriesMenu>()
  const { categories } = useAvantiMenu()
  const { props } = useAvantiMenuMobile()
  const css = useCssHandles(CSS_HANDLES)
  const { __editorItemTitle, tagTitle, target, hasName, seeAll, highlightMob, categoryId, menuBarIcon, menuIconVisibleOnMobile, color } = item

  useEffect(() => {
    setCategory(categories.find((category) => category.id === categoryId))
  }, [categories, setCategory, categoryId])

  return (
    <>
      {category &&
        <li className={applyModifiers(css['mobile-menuItem'], [
          FormatText(__editorItemTitle),
          category.children.length ? 'hasChildren' : '',
          highlightMob ? 'highlightMob' : ''
        ]
        )}
        >
          <a onClick={(event) => toggleClick(event, css['mobile-menuItem--Opened'])}
            href={category.children.length && props.secondDef ? undefined : category?.url}
            title={hasName ? category?.title : tagTitle}
            target={target ? "_blank" : "_self"}
            className={applyModifiers(css['mobile-menuItemLink'], [
              FormatText(category ? category.name : ''),
              category.children.length ? 'hasChildren' : '',
              highlightMob ? 'highlightMob' : ''
            ]
            )}
          >
            <span className={css['mobile-menuItemLinkText']} style={{ color: color ?? color }}>
              {menuIconVisibleOnMobile && <MenuIcon src={menuBarIcon} />}
              {hasName ? category.name : __editorItemTitle}
            </span>
            {category.children.length && props.secondDef ? <MenuArrow fill={color} /> : ''}
          </a>
          {category.children.length && props.secondDef ?
            <SecondLevelCategory
              children={category.children}
              title={hasName ? category.name : __editorItemTitle}
              titleURL={category.url}
              seeAll={seeAll}
            />
            : ''}
        </li>
      }
    </>
  )
}
