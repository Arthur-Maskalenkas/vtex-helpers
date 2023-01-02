import { Quadrants, schema_root_custom_app_badge_custom } from "../_interfaces/_schemas-mapped";
import { ListFilteredItems } from "./filter";
import { schema_flags_custom, schema_option_content, schema_option_image } from "../_interfaces";
import { sortQuadrant } from "../../components/badges-avanti/utils/sort";
import { DEV_VARS_MAX_ITEMS_ON_BOTTOM_QUADRANT, DEV_VARS_MAX_ITEMS_ON_LEFT_QUADRANT, DEV_VARS_MAX_ITEMS_ON_RIGHT_QUADRANT } from '../dev-vars'


export const remapSchema = (schema?: ListFilteredItems, containerQuadrants?: schema_flags_custom): schema_root_custom_app_badge_custom | null => {


  if (!schema || !containerQuadrants) return null

  const pathToLinkAttributes = (quadrant: Quadrants, colletcionName: string) => (
    schema?.[quadrant]?.find(item => item?.__editorItemTitle === colletcionName)?.matchLinksAttributes
  )


  const pathToListLinkAttributes = (quadrant: Quadrants) => (
    schema?.[quadrant]
  )

  const normalizeString = (text?: string) => {
    if (!text) return
    const preValue = String(text).replace(/-/g, ' ')

    return preValue?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s-]+/g, '-').toLowerCase()
  }


  const pathSchemaQuadrantTopRight = schema?.quadrantTopRight
  const pathSchemaQuadrantTopLeft = schema?.quadrantTopLeft
  const pathSchemaQuadrantBottom = schema?.quadrantBottom

  const patchQuadrantTopRight = containerQuadrants?.quadrantTopRight?.[0]
  const patchQuadrantTopLeft = containerQuadrants?.quadrantTopLeft?.[0]
  const patchQuadrantBottom = containerQuadrants?.quadrantBottom?.[0]
  return {
    quadrantTopLeft: {
      hasCollection: !!pathSchemaQuadrantTopLeft && pathSchemaQuadrantTopLeft?.length > 0,
      name: 'quadrantTopLeft',
      priorityConfigContainer: {
        prioritySystemOnQuadrant: patchQuadrantTopLeft._priorityConfigContainer?.[0]?.prioritySystemOnQuadrant,
        isInverted: patchQuadrantTopLeft?._priorityConfigContainer?.[0]?.isInverted
      },
      groupStyles: patchQuadrantTopLeft?._positioningContainer?.[0] ?? {
        horizontalDistance: '0px',
        verticalDistance: '0px',
        positionFlow: 'center'
      },
      contentList: pathSchemaQuadrantTopLeft?.map((collection) => ({
        HTMLAttributes: {
          ...(!!collection?.priority && { [`data-priority-${collection?.priority}`]: true }),
          ...(!!collection?.typeContent && { [`data-type-content-${normalizeString(collection?.typeContent)}`]: true }),
          ...(!!collection?.variant && { [`data-${normalizeString(collection?.variant)}`]: true }),
          ...(!!collection?.__editorItemTitle && { [`data-highlight-${normalizeString(collection?.__editorItemTitle)}`]: true }),

          ...(!!pathToLinkAttributes('quadrantTopLeft', collection.__editorItemTitle)?.matchLinkOnCategoryId?.__editorItemTitle
            && { [`data-match-category-id-${normalizeString(pathToLinkAttributes('quadrantTopLeft', collection.__editorItemTitle)?.matchLinkOnCategoryId?.__editorItemTitle)}`]: true }),

          ...(!!pathToLinkAttributes('quadrantTopLeft', collection.__editorItemTitle)?.matchLinkOnBrandId?.__editorItemTitle && { [`data-match-brand-id-${normalizeString(pathToLinkAttributes('quadrantTopLeft', collection.__editorItemTitle)?.matchLinkOnBrandId?.__editorItemTitle)}`]: true }),
          ...(!!pathToLinkAttributes('quadrantTopLeft', collection.__editorItemTitle)?.matchLinkOnProductId?.__editorItemTitle && { [`data-match-product-id-${normalizeString(pathToLinkAttributes('quadrantTopLeft', collection.__editorItemTitle)?.matchLinkOnProductId?.__editorItemTitle)}`]: true }),

          ...(pathToListLinkAttributes('quadrantTopLeft')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnCollections
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-collection-id-${normalizeString(collection.__editorItemTitle)}`]: true
              }
            }, {})),


          ...(pathToListLinkAttributes('quadrantTopLeft')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnProductField
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-product-field-name-${normalizeString(collection.__editorItemTitle)}-value-${normalizeString(collection.extraCampToFilter_1)}`]: true
              }
            }, {})),

          ...(pathToListLinkAttributes('quadrantTopLeft')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnVariations
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-variation-name-${normalizeString(collection.__editorItemTitle)}-value-${normalizeString(collection.extraCampToFilter_1)}`]: true
              }
            }, {})),

        },
        badgesStyles: collection.typeContent === 'image' ?
          ({
            src: (collection.items as schema_option_image[])?.[0].src,
            alt: (collection.items as schema_option_image[])?.[0].alt,
            width: (collection.items as schema_option_image[])?.[0]?.commonPropsBetweenContentAndImage.width ?? 'auto',
            height: (collection.items as schema_option_image[])?.[0]?.commonPropsBetweenContentAndImage?.height ?? 'auto'
          })
          :
          ({
            text: (collection.items as schema_option_content[])?.[0]?.text,
            color: (collection.items as schema_option_content[])?.[0]?.color || '#000',
            fontWeight: (collection.items as schema_option_content[])?.[0]?.fontWeight || '400',
            borderRadius: (collection.items as schema_option_content[])?.[0]?.borderRadius || '0px',
            backgroundColor: (collection.items as schema_option_content[])?.[0]?.backgroundColor || '#fff',
            width: (collection.items as schema_option_content[])?.[0]?.commonPropsBetweenContentAndImage.width || 'auto',
            height: (collection.items as schema_option_content[])?.[0]?.commonPropsBetweenContentAndImage.height || 'auto',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
          } as React.CSSProperties)
        ,
        priority: collection.priority,
        highlight: {
          name: collection.__editorItemTitle
        },
        quadrantOwner: {
          name: 'quadrantTopLeft'
        },
        currentCollection: {

          typeContent: collection.typeContent,
          styles: {
            ...collection.items?.[0],
            commonStyles: collection.items?.[0]?.commonPropsBetweenContentAndImage
          },
          id: collection.id,
        }
      })).sort((a, b) => {
        return sortQuadrant(a.priority, b.priority, patchQuadrantTopLeft._priorityConfigContainer?.[0])
      })
        .slice(0, (!!DEV_VARS_MAX_ITEMS_ON_LEFT_QUADRANT ? (DEV_VARS_MAX_ITEMS_ON_LEFT_QUADRANT as unknown as number) : 10))
    },
    quadrantTopRight: {
      hasCollection: !!pathSchemaQuadrantTopRight && pathSchemaQuadrantTopRight?.length > 0,
      name: 'quadrantTopRight',
      priorityConfigContainer: {
        prioritySystemOnQuadrant: patchQuadrantTopRight._priorityConfigContainer?.[0]?.prioritySystemOnQuadrant,
        isInverted: patchQuadrantTopRight._priorityConfigContainer?.[0]?.isInverted
      },
      groupStyles: patchQuadrantTopRight._positioningContainer?.[0] ?? {
        horizontalDistance: '0px',
        verticalDistance: '0px',
        positionFlow: 'center'
      },
      contentList: pathSchemaQuadrantTopRight?.map((collection) => ({
        badgesStyles: collection.typeContent === 'image' ?
          ({
            src: (collection.items as schema_option_image[])?.[0].src,
            alt: (collection.items as schema_option_image[])?.[0].alt,
            width: (collection.items as schema_option_image[])?.[0]?.commonPropsBetweenContentAndImage.width ?? 'auto',
            height: (collection.items as schema_option_image[])?.[0]?.commonPropsBetweenContentAndImage?.height ?? 'auto'
          })
          :
          ({
            text: (collection.items as schema_option_content[])?.[0]?.text,
            color: (collection.items as schema_option_content[])?.[0]?.color || '#000',
            fontWeight: (collection.items as schema_option_content[])?.[0]?.fontWeight || '400',
            borderRadius: (collection.items as schema_option_content[])?.[0]?.borderRadius || '0px',
            backgroundColor: (collection.items as schema_option_content[])?.[0]?.backgroundColor || '#fff',
            width: (collection.items as schema_option_content[])?.[0]?.commonPropsBetweenContentAndImage.width || 'auto',
            height: (collection.items as schema_option_content[])?.[0]?.commonPropsBetweenContentAndImage.height || 'auto',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
          } as React.CSSProperties)
        ,
        HTMLAttributes: {
          ...(!!collection?.priority && { [`data-priority-${collection?.priority}`]: true }),
          ...(!!collection?.typeContent && { [`data-type-content-${normalizeString(collection?.typeContent)}`]: true }),
          ...(!!collection?.variant && { [`data-${normalizeString(collection?.variant)}`]: true }),
          ...(!!collection?.__editorItemTitle && { [`data-highlight-${normalizeString(collection?.__editorItemTitle)}`]: true }),
          ...(!!pathToLinkAttributes('quadrantTopRight', collection.__editorItemTitle)?.matchLinkOnCategoryId?.__editorItemTitle && { [`data-match-category-id-${normalizeString(pathToLinkAttributes('quadrantTopRight', collection.__editorItemTitle)?.matchLinkOnCategoryId?.__editorItemTitle)}`]: true }),
          ...(!!pathToLinkAttributes('quadrantTopRight', collection.__editorItemTitle)?.matchLinkOnBrandId?.__editorItemTitle && { [`data-match-brand-id-${normalizeString(pathToLinkAttributes('quadrantTopRight', collection.__editorItemTitle)?.matchLinkOnBrandId?.__editorItemTitle)}`]: true }),
          ...(!!pathToLinkAttributes('quadrantTopRight', collection.__editorItemTitle)?.matchLinkOnProductId?.__editorItemTitle && { [`data-match-product-id-${normalizeString(pathToLinkAttributes('quadrantTopRight', collection.__editorItemTitle)?.matchLinkOnProductId?.__editorItemTitle)}`]: true }),

          ...(pathToListLinkAttributes('quadrantTopRight')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnCollections
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-collection-id-${normalizeString(collection.__editorItemTitle)}`]: true
              }
            }, {})),


          ...(pathToListLinkAttributes('quadrantTopRight')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnProductField
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-product-field-name-${normalizeString(collection.__editorItemTitle)}-value-${normalizeString(collection.extraCampToFilter_1)}`]: true
              }
            }, {})),

          ...(pathToListLinkAttributes('quadrantTopRight')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnVariations
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-variation-name-${normalizeString(collection.__editorItemTitle)}-value-${normalizeString(collection.extraCampToFilter_1)}`]: true
              }
            }, {})),

        },
        priority: collection.priority,
        highlight: {
          name: collection.__editorItemTitle
        },
        quadrantOwner: {
          name: 'quadrantTopRight'
        },
        currentCollection: {
          typeContent: collection.typeContent,
          styles: {
            ...collection.items?.[0],
            commonStyles: collection.items?.[0]?.commonPropsBetweenContentAndImage
          },
          id: collection.id,
        }
      })).sort((a, b) => {
        return sortQuadrant(a.priority, b.priority, patchQuadrantTopRight._priorityConfigContainer?.[0])
      })
        .slice(0, (!!DEV_VARS_MAX_ITEMS_ON_RIGHT_QUADRANT ? (DEV_VARS_MAX_ITEMS_ON_RIGHT_QUADRANT as unknown as number) : 10))
    },
    quadrantBottom: {
      hasCollection: !!pathSchemaQuadrantBottom && pathSchemaQuadrantBottom?.length > 0,
      name: 'quadrantBottom',
      priorityConfigContainer: {
        prioritySystemOnQuadrant: patchQuadrantBottom._priorityConfigContainer?.[0]?.prioritySystemOnQuadrant,
        isInverted: patchQuadrantBottom._priorityConfigContainer?.[0]?.isInverted
      },
      groupStyles: patchQuadrantBottom._positioningContainer?.[0] ?? {
        horizontalDistance: '0px',
        verticalDistance: '0px',
        positionFlow: 'center'
      },
      contentList: pathSchemaQuadrantBottom?.map((collection) => ({
        badgesStyles: collection.typeContent === 'image' ?
          ({
            src: (collection.items as schema_option_image[])?.[0].src,
            alt: (collection.items as schema_option_image[])?.[0].alt,
            width: (collection.items as schema_option_image[])?.[0]?.commonPropsBetweenContentAndImage.width ?? 'auto',
            height: (collection.items as schema_option_image[])?.[0]?.commonPropsBetweenContentAndImage?.height ?? 'auto'
          })
          :
          ({
            text: (collection.items as schema_option_content[])?.[0]?.text,
            color: (collection.items as schema_option_content[])?.[0]?.color || '#000',
            fontWeight: (collection.items as schema_option_content[])?.[0]?.fontWeight || '400',
            borderRadius: (collection.items as schema_option_content[])?.[0]?.borderRadius || '0px',
            backgroundColor: (collection.items as schema_option_content[])?.[0]?.backgroundColor || '#fff',
            width: (collection.items as schema_option_content[])?.[0]?.commonPropsBetweenContentAndImage.width || 'auto',
            height: (collection.items as schema_option_content[])?.[0]?.commonPropsBetweenContentAndImage.height || 'auto',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
          } as React.CSSProperties)
        ,
        HTMLAttributes: {
          ...(!!collection?.priority && { [`data-priority-${collection?.priority}`]: true }),
          ...(!!collection?.typeContent && { [`data-type-content-${normalizeString(collection?.typeContent)}`]: true }),
          ...(!!collection?.variant && { [`data-${normalizeString(collection?.variant)}`]: true }),
          ...(!!collection?.__editorItemTitle && { [`data-highlight-${normalizeString(collection?.__editorItemTitle)}`]: true }),
          ...(!!pathToLinkAttributes('quadrantBottom', collection.__editorItemTitle)?.matchLinkOnCategoryId?.__editorItemTitle && { [`data-match-category-id-${normalizeString(pathToLinkAttributes('quadrantBottom', collection.__editorItemTitle)?.matchLinkOnCategoryId?.__editorItemTitle)}`]: true }),
          ...(!!pathToLinkAttributes('quadrantBottom', collection.__editorItemTitle)?.matchLinkOnBrandId?.__editorItemTitle && { [`data-match-brand-id-${normalizeString(pathToLinkAttributes('quadrantBottom', collection.__editorItemTitle)?.matchLinkOnBrandId?.__editorItemTitle)}`]: true }),
          ...(!!pathToLinkAttributes('quadrantBottom', collection.__editorItemTitle)?.matchLinkOnProductId?.__editorItemTitle && { [`data-match-product-id-${normalizeString(pathToLinkAttributes('quadrantBottom', collection.__editorItemTitle)?.matchLinkOnProductId?.__editorItemTitle)}`]: true }),

          ...(pathToListLinkAttributes('quadrantBottom')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnCollections
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-collection-id-${normalizeString(collection.__editorItemTitle)}`]: true
              }
            }, {})),


          ...(pathToListLinkAttributes('quadrantBottom')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnProductField
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-product-field-name-${normalizeString(collection.__editorItemTitle)}-value-${normalizeString(collection.extraCampToFilter_1)}`]: true
              }
            }, {})),

          ...(pathToListLinkAttributes('quadrantBottom')
            ?.find(item => item.__editorItemTitle === collection.__editorItemTitle)
            ?.matchListLinkAttributes?.matchListLinksOnVariations
            ?.reduce((acc, collection) => {
              return {
                ...acc,
                [`data-match-variation-name-${normalizeString(collection.__editorItemTitle)}-value-${normalizeString(collection.extraCampToFilter_1)}`]: true
              }
            }, {})),

        },
        priority: collection.priority,
        highlight: {
          name: collection.__editorItemTitle
        },
        quadrantOwner: {
          name: 'quadrantBottom'
        },
        currentCollection: {
          typeContent: collection.typeContent,
          styles: {
            ...collection.items?.[0],
            commonStyles: collection.items?.[0]?.commonPropsBetweenContentAndImage
          },
          id: collection.id,
        }
      })).sort((a, b) => {
        return sortQuadrant(a.priority, b.priority, patchQuadrantBottom._priorityConfigContainer?.[0])
      })
        .slice(0, (!!DEV_VARS_MAX_ITEMS_ON_BOTTOM_QUADRANT ? (DEV_VARS_MAX_ITEMS_ON_BOTTOM_QUADRANT as unknown as number) : 10))
    }
  }
}
