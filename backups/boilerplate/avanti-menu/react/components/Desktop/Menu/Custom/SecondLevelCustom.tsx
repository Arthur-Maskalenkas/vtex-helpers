import React, { useState } from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'

import type {
  MenuItemsSecond,
  MenuItemsSubLevel,
} from '../../../../typings/types'
import { CSS_HANDLES } from '../../CSS_HANDLES'
import { MenuArrow } from '../MenuArrow'
import { MenuItemsTitle } from '../MenuItemsTitle'
import { FormatText } from '../../../Utils/FormatString'
import { ThirdLevelCustom } from './ThirdLevelCustom'
import { Banner } from '../Banner/Banner'
import {
  useAvantiMenu,
  useAvantiMenuDesktop,
} from '../../../../context/AvantiMenuContext'
import { MenuSeeAllButton } from '../MenuSeeAllButton'
import { MenuIcon } from '../MenuIcon'
import { ThirdLevelCategory } from '../Category/ThirdLevelCategory'

type Categories = {
  id?: number
  name?: string
  hasChildren?: boolean
  url?: string
  children?: Categories[] | undefined
  Title?: string
  MetaTagDescription?: string
}

export const SecondLevelCustom = ({
  items,
  title,
  titleURL,
  banner,
  seeAll,
}: MenuItemsSubLevel) => {
  const css = useCssHandles(CSS_HANDLES)
  const { props } = useAvantiMenuDesktop()
  const newItems: MenuItemsSecond[] | undefined = props.secondMaxItems
    ? items?.slice(0, props.secondMaxItems)
    : items

  const [disabledScroll, setDisabledScroll] = useState(false)

  const mouseOver = () => {
    setDisabledScroll(true)
  }

  const mouseOut = () => {
    setDisabledScroll(false)
  }
  const { categories } = useAvantiMenu()
  const getChildren = (categoryId: number) => {
    if (categoryId) {
      const categoriesFind = categories?.find(
        category => category.id === categoryId
      )
      if (categoriesFind) {
        return categoriesFind
      }
      if (!categoriesFind) {
        categories.map(categoryFirst => {
          return categoryFirst.children.find(
            (sub: Categories) => sub.id === categoryId
          )
        })
      }
    }
    return
  }

  return (
    <>
      {newItems?.length || (banner?.length && props.banners) ? (
        <div className={css['desktop-menuSecondItemsWrapper']}>
          <MenuItemsTitle url={titleURL} modifier="Second">
            {title}
          </MenuItemsTitle>
          {seeAll && <MenuSeeAllButton url={titleURL} modifier="Second" />}
          <div
            className={`${css['desktop-menuSecondItemsContainer']} ${disabledScroll
              ? css['desktop-menuSecondItems--disabled-scroll']
              : ''
              }`}
          >
            <ul className={css['desktop-menuSecondItems']}>
              {newItems?.map(
                (
                  {
                    __editorItemTitle,
                    items,
                    desktop,
                    tagTitle,
                    url,
                    highlightDesk,
                    seeAll,
                    menuBarIconDef,
                    menuBarIcon,
                    menuIconVisibleOnDesktop,
                    color,
                    categoryId,
                  },
                  index
                ) =>
                  desktop && (
                    <li
                      className={applyModifiers(css['desktop-menuSecondItem'], [
                        FormatText(__editorItemTitle),
                        items?.length ? 'hasChildren' : '',
                        highlightDesk ? 'highlightDesk' : ''
                      ])}
                      key={index}
                    >
                      <a
                        href={`${titleURL}${url || ''}`}
                        title={tagTitle || __editorItemTitle}
                        className={applyModifiers(
                          css['desktop-menuSecondItemLink'],
                          [
                            FormatText(__editorItemTitle),
                            items?.length ? 'hasChildren' : '',
                            highlightDesk ? 'highlightDesk' : '',
                          ]
                        )}
                      >
                        <span
                          className={css['desktop-menuSecondItemLinkText']}
                          style={{ color: color ?? color }}
                        >
                          {menuBarIconDef && menuIconVisibleOnDesktop && <MenuIcon src={menuBarIcon} />}
                          {__editorItemTitle}
                        </span>
                        {items?.length && props.thirdDef ? (
                          <MenuArrow fill={color} />
                        ) : (
                          ''
                        )}
                      </a>
                      {props.thirdDef && !categoryId ? (
                        <ThirdLevelCustom
                          items={items}
                          title={__editorItemTitle}
                          titleURL={`${titleURL}${url || ''}`}
                          seeAll={seeAll}
                        />
                      ) : (
                        <ThirdLevelCategory
                          children={getChildren(categoryId as number)?.children}
                          title={getChildren(categoryId as number)?.name}
                          titleURL={getChildren(categoryId as number)?.url}
                          banner={banner}
                          seeAll={seeAll}
                        />
                      )}
                      <div
                        onMouseOver={mouseOver}
                        onMouseOut={mouseOut}
                        className={css['desktop-overlay']}
                      />
                    </li>
                  )
              )}
            </ul>
            {banner?.length && props.banners ? (
              <Banner banner={banner} alt={title} />
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
