import {
  schema_site_editor_default_option_content,
  schema_site_editor_default_option_image,
  schema_site_editor_default_root_app_badge_custom,
  schema_site_editor_remapped_custom_flag,
  schema_site_editor_remapped_custom_quadrant,
  schema_site_editor_remapped_root_custom_app_badge_custom
} from '../_interfaces'
import { FilterDefaultSchema } from '../filter-default-schema/filter-default-schema'
import { SortMatchs } from '../sort-matchs/sort-matchs'

export class RemapSchema {
  constructor (
    private readonly schema: schema_site_editor_default_root_app_badge_custom,
    private readonly Filter: FilterDefaultSchema,
    private readonly SortMatchs: SortMatchs
  ) { }

  public remap (): schema_site_editor_remapped_root_custom_app_badge_custom | null {
    if (!this?.schema) {
      return {
        quadrantBottom: null,
        quadrantTopLeft: null,
        quadrantTopRight: null
      }
    }

    return {
      ...Object.keys(this.schema)?.reduce((acc: schema_site_editor_remapped_root_custom_app_badge_custom, key: keyof schema_site_editor_default_root_app_badge_custom) => {
        const currentQuadrantContainer = this?.schema[key]?.[0]

        if (!currentQuadrantContainer) {
          return {
            ...acc,
            [key]: null
          }
        }

        return {
          ...acc,
          [key]: {
            name: key,
            // vai pegar do novo filtro
            hasCollection: true,
            priorityConfigContainer: {
              isInverted: currentQuadrantContainer?._screen_config_priority[0]?.isInverted,
              prioritySystemOnQuadrant: currentQuadrantContainer?._screen_config_priority[0]?.prioritySystemOnQuadrant
            },
            dataHTMLOnContainerFlag: {
              style: {
                ...key === 'quadrantTopLeft' && {
                  left: currentQuadrantContainer?._screen_config_position[0]?.horizontalDistance ?? '0px',
                  top: currentQuadrantContainer?._screen_config_position[0]?.verticalDistance ?? '0px'
                },

                ...key === 'quadrantTopRight' && {
                  right: currentQuadrantContainer?._screen_config_position?.[0].horizontalDistance ?? '0px',
                  top: currentQuadrantContainer?._screen_config_position?.[0].verticalDistance ?? '0px'
                },

                ...key === 'quadrantBottom' && {
                  bottom: currentQuadrantContainer?._screen_config_position?.[0].verticalDistance,

                  ...currentQuadrantContainer?._screen_config_position?.[0] ?? {
                    horizontalDistance: '0px',
                    verticalDistance: '0px',
                    positionFlow: 'leftToRight'
                  },

                  ...currentQuadrantContainer?._screen_config_position?.[0].positionFlow === 'leftToRight' && {
                    left: currentQuadrantContainer?._screen_config_position?.[0].horizontalDistance,
                    flexDirection: 'row'
                  },

                  ...currentQuadrantContainer?._screen_config_position?.[0].positionFlow === 'rightToLeft' && {
                    right: currentQuadrantContainer?._screen_config_position?.[0].horizontalDistance,
                    flexDirection: 'row-reverse'
                  },

                  ...currentQuadrantContainer?._screen_config_position?.[0].positionFlow === 'center' && {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    flexDirection: 'row'
                  }
                }
              }
            },
            // vai jogar um filter depois de collection.
            listOfFlags: currentQuadrantContainer?.collection
              ?.map(collection => this.Filter.filterCollection(collection))
              ?.filter(Boolean)
              ?.map((collection) => ({
                priority: Number(collection?.priority),
                quadrantOwner: key,
                currentCollection: {
                  typeContent: collection?.typeContent,

                  styles: {
                    ...collection?.items?.[0]
                  }
                },
                HTMLAttributes: {
                  ...collection?.HTMLMatch
                },
                badgesStyles: collection?.typeContent === 'image'
                  ? ({
                      src: (collection?.items as schema_site_editor_default_option_image[])?.[0]?.src,
                      alt: (collection?.items as schema_site_editor_default_option_image[])?.[0]?.alt,
                      width: (collection?.items as schema_site_editor_default_option_image[])?.[0]?.commonPropsBetweenContentAndImage?.width ?? 'auto',
                      height: (collection?.items as schema_site_editor_default_option_image[])?.[0]?.commonPropsBetweenContentAndImage?.height ?? 'auto'
                    })
                  : ({
                      text: (collection?.items as schema_site_editor_default_option_content[])?.[0]?.text,
                      color: (collection?.items as schema_site_editor_default_option_content[])?.[0]?.color || '#000',
                      fontSize: (collection?.items)?.[0]?.fontSize || '14px',
                      lineHeight: (collection?.items)?.[0]?.lineHeight || '14px',
                      fontWeight: (collection?.items as schema_site_editor_default_option_content[])?.[0]?.fontWeight || '400',
                      borderRadius: (collection?.items as schema_site_editor_default_option_content[])?.[0]?.borderRadius || '0px',
                      backgroundColor: (collection?.items as schema_site_editor_default_option_content[])?.[0]?.backgroundColor || '#fff',
                      width: (collection?.items as schema_site_editor_default_option_content[])?.[0]?.commonPropsBetweenContentAndImage?.width || 'auto',
                      height: (collection?.items as schema_site_editor_default_option_content[])?.[0]?.commonPropsBetweenContentAndImage?.height || 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      zIndex: 10
                    })
              } as schema_site_editor_remapped_custom_flag))
              ?.sort((a, b) => this.SortMatchs.sort(Number(a.priority), Number(b.priority), currentQuadrantContainer?._screen_config_priority?.[0]?.isInverted, currentQuadrantContainer?._screen_config_priority?.[0]?.prioritySystemOnQuadrant))
          } as schema_site_editor_remapped_custom_quadrant
        } as schema_site_editor_remapped_root_custom_app_badge_custom
      }, {
        quadrantBottom: null,
        quadrantTopLeft: null,
        quadrantTopRight: null
      })

    }
  }
}