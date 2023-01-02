import { BadgeContentProps } from '../../components/badges-avanti/components';
import { schema_common_image_content, schema_custom_flag } from './../_interfaces';

export const MOCK_COMMON_IMAGE_CONTENT: schema_common_image_content = {
  height: 'auto',
  width: 'auto',
};

export const MOCK_CUSTOM_CONTENT_FLAG_PROPS: BadgeContentProps = {
  commonStyles: MOCK_COMMON_IMAGE_CONTENT,
  __editorItemTitle: 'mock',
  className: '',
  dataId: '',
  dataQuadrant: '',
  dataName: '',
  dataType: 'collection',
  key: '',
  backgroundColor: '',
  borderRadius: '0px',
  text: '',
  color: '',
  fontSize: '15px',
  fontWeight: '400',
}


export const MOCK_SCHEMA_CUSTOM_FLAG: schema_custom_flag = {
  quadrantOwner: {
    name: 'quadrantTopLeft'
  },
  priority: 0,
  highlight: {
    name: 'mock',
    id: '1'
  },

  currentCollection: {
    typeContent: 'image',
    id: 1,
    styles: {
      src: 'mock',
      alt: 'mock',
      commonStyles: MOCK_COMMON_IMAGE_CONTENT
    }
  },
  id: 1

}


export const MOCK_GET_COLLECTION_MAPPED_PROPS: any = {
  collectionQuadrantBottom: {
    hasCollection: false,
    name: 'mock',
    priorityConfigContainer: {
      prioritySystemOnQuadrant: 'priorityByField'
    },
    contentList: [],
    groupStyles: {
      horizontalDistance: '0px',
      verticalDistance: '0px',
      positionFlow: 'leftToRight'
    },
  },

  collectionQuadrantTopRight: {
    hasCollection: false,
    priorityConfigContainer: {
      prioritySystemOnQuadrant: 'priorityByField'
    },
    contentList: [],
    name: 'mock',
    groupStyles: {
      horizontalDistance: '0px',
      verticalDistance: '0px',
      positionFlow: 'leftToRight'
    },
  },

  collectionQuadrantTopLeft: {
    hasCollection: false,
    name: 'mock',
    priorityConfigContainer: {
      prioritySystemOnQuadrant: 'priorityByField'
    },
    contentList: [],
    groupStyles: {
      horizontalDistance: '0px',
      verticalDistance: '0px',
      positionFlow: 'leftToRight'
    },
  }
}
