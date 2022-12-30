import React from 'react'

import type {CategoryTerm} from '../../context/reducer'
import {useGlossary} from '../../context'
import {Link} from '../atoms/Link'
import styles from './styles.css'
import {MessageError} from "../atoms/MessageError";

export const CategoriesContainer = () => {
  const {getGlossary} = useGlossary()

  const {categoryTermsFiltereds} = getGlossary()

  return (
    <div className={styles.containerCategories}>
      {categoryTermsFiltereds.length > 0 ?
        (
          <>
            <ul className={styles.list1}>
              {categoryTermsFiltereds.map((term: CategoryTerm, index: number) => (
                <li key={index}>
                  <a className={styles.title} href={term.href || '/'}>
                    {term.name}
                  </a>
                  <ul className={styles.list2}>
                    {term?.children
                      ?.sort((a, b) => a.name.localeCompare(b.name))
                      .map((child: CategoryTerm, index: number) => (
                        <li>
                          <Link href={child.href || '/'} key={index}>
                            {child.name}
                          </Link>

                          <ul className={styles.list3}>
                            {child?.children
                              ?.sort((a, b) => a.name.localeCompare(b.name))
                              .map((child: CategoryTerm, index: number) => (
                                <li>
                                  <Link href={child.href || '/'} key={index}>
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        ) :
        (
          <>
            <MessageError/>
          </>
        )}

    </div>
  )
}
