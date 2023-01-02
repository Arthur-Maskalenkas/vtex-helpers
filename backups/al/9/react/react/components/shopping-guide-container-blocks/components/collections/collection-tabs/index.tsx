import React from 'react'
import {__SCHEMA_SITE_EDITOR_DEFAULT_TAB} from '../../../../../context/_interfaces/_schemas'
import {Button} from '../../common'


import styles from './styles.css'

export type CollectionTabsProps = {
	items: __SCHEMA_SITE_EDITOR_DEFAULT_TAB[],
	currentTab: number,
	setCurrentTab: (index: number) => void
}

export const CollectionTabs = ({
																 items,
																 currentTab,
																 setCurrentTab
															 }: CollectionTabsProps) => {
	return (
		<ul className={styles.containerBlockCollectionTabs}>
			{items?.map((tab, index) => {
				const logicForActiveTab = currentTab === index
				return (
					<>
						<li key={index}>
							<Button variant='tab' isActive={logicForActiveTab}
											onClick={() => setCurrentTab(index)}>{tab.__editorItemTitle}</Button>
						</li>
					</>
				)
			})}
		</ul>
	)
}