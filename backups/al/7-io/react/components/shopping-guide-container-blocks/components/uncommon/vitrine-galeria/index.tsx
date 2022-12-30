import React from 'react'
import { __SCHEMA_SITE_EDITOR_DEFAULT_BLOCKITEM, __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_5_IMAGES, __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_ONE_IMAGES, __SCHEMA_SITE_EDITOR_DEFAULT_TAB } from '../../../../../context/_interfaces/_schemas'
import { CollectionProductTab, CollectionSliderProductTab, CollectionSliderTabs, CollectionTabs } from '../../collections'



type CollectionTab = {
  eachTabHave5Images: boolean,
  items: __SCHEMA_SITE_EDITOR_DEFAULT_TAB[]
}


export const VitrineGaleria = ({ items, eachTabHave5Images }: CollectionTab) => {
  const [currentTab, setCurrentTab] = React.useState(0)

  return (
    <div>
      {/* Tabs desktop */}
      <div data-content-desktop={true}>
        <CollectionTabs currentTab={currentTab} items={items} setCurrentTab={setCurrentTab} />
      </div>

      {/* Tabs mobile */}
      <div data-content-mobile={true} data-content-slider={true}>
        <CollectionSliderTabs currentTab={currentTab} items={items} setCurrentTab={setCurrentTab} />
      </div>

      {/* Content Desktop */}
      <ul data-content-desktop={true} >
        <CollectionProductTab currentTab={currentTab} eachTabHave5Images={eachTabHave5Images} items={items} />
      </ul>

      {/* Content Mobile */}
      <div data-content-mobile={true} data-content-slider={true}>
        <CollectionSliderProductTab currentTab={currentTab} eachTabHave5Images={eachTabHave5Images} items={items} />
      </div>
    </div >
  )
}

