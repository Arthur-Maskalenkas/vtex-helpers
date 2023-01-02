import { RefinedDataOnProductContext } from "../../../components/badges-avanti/_interfaces"
import { Quadrants, schema_collection_flags, schema_flags_custom, schema_linkField } from "../../_interfaces"
import { filterAttributeCtx, filterListAttributesCtx } from "./utils"


export interface ListFilteredItems {
  quadrantBottom?: schema_filter_collection_flags[]
  quadrantTopRight?: schema_filter_collection_flags[]
  quadrantTopLeft?: schema_filter_collection_flags[]
}

export interface schema_filter_collection_flags extends schema_collection_flags {
  matchListLinkAttributes?: {
    matchListLinksOnProductField: schema_linkField[] | null;
    matchListLinksOnCollections: schema_linkField[] | null;
    matchListLinksOnVariations: schema_linkField[] | null;
  }
  matchLinksAttributes?: {
    matchLinkOnCategoryId: schema_linkField | null;
    matchLinkOnBrandId: schema_linkField | null;
    matchLinkOnProductId: schema_linkField | null;
  }
}



export const filterLinksOnAllQuadrants =
  (collection?: schema_flags_custom,
    refinedDataOnProductContext?: RefinedDataOnProductContext):
    ListFilteredItems | null => {
    const quadrants: Quadrants[] = [
      'quadrantTopLeft',
      'quadrantTopRight',
      'quadrantBottom'
    ]

    if (!collection || !refinedDataOnProductContext) return null



    const LinksQuadrants: ListFilteredItems | null =
    {
      quadrantBottom: [],
      quadrantTopRight: [],
      quadrantTopLeft: []
    }



    quadrants
      ?.forEach(quadrantRef => {
        (collection?.[quadrantRef])
          ?.forEach((currentQuadrantValue) => {
            return currentQuadrantValue?.collection
              ?.filter(collectionValue => !!collectionValue.isActive)
              ?.map(collectionValue => {
                const {
                  theLinksPresentsInThisProductContextByProductField,
                  theLinksPresentsInThisProductContextByProduct,
                  theLinksPresentsInThisProductContextByCategoryId,
                  theLinksPresentsInThisProductContextByBrand,
                  theLinksPresentsInThisProductContextByCollections,
                  theLinksPresentsInThisProductContextByVariations
                } = collectionValue?._containerConfigsOfLinksPresentsOnProductContext?.[0]

                const matchLinksAttributes = {
                  matchLinkOnCategoryId: filterAttributeCtx(theLinksPresentsInThisProductContextByCategoryId, refinedDataOnProductContext),
                  matchLinkOnBrandId: filterAttributeCtx(theLinksPresentsInThisProductContextByBrand, refinedDataOnProductContext),
                  matchLinkOnProductId: filterAttributeCtx(theLinksPresentsInThisProductContextByProduct, refinedDataOnProductContext)
                }

                const matchListLinkAttributes = {
                  matchListLinksOnProductField: filterListAttributesCtx(theLinksPresentsInThisProductContextByProductField, refinedDataOnProductContext, 'listOfProductFields'),
                  matchListLinksOnCollections: filterListAttributesCtx(theLinksPresentsInThisProductContextByCollections, refinedDataOnProductContext, 'listOfCollections'),
                  matchListLinksOnVariations: filterListAttributesCtx(theLinksPresentsInThisProductContextByVariations, refinedDataOnProductContext, 'listOfVariations')
                }

                const hasMatchLinksAttributes = Object.values(matchLinksAttributes).some(value => value !== null)

                const hasMatchListLinkAttributes = Object.keys(matchListLinkAttributes)?.some(key => {
                  if (!!matchListLinkAttributes?.[(key as unknown as keyof typeof matchListLinkAttributes)]) {
                    return (matchListLinkAttributes as any)?.[(key as unknown as keyof typeof matchListLinkAttributes)].length > 0
                  }

                  return false
                })

                if (hasMatchLinksAttributes || hasMatchListLinkAttributes) {

                  const customCollectionValue: schema_filter_collection_flags = {
                    ...collectionValue,
                    matchLinksAttributes,
                    matchListLinkAttributes
                  }


                  LinksQuadrants[quadrantRef]?.push(customCollectionValue)
                }
              })
          })
      })


    return LinksQuadrants
  }
