import { type reducer_schema_filter, type reducer_schema_step, schema_step, type State } from '../_interfaces'

export const mock_initial_state = () => (
  {
    __schema_configs_result: [
      {
        __editorItemTitle: 'Configurações Resultado',
        title: 'resultado - titulo',
        description: 'resultado - descrição'
      }

    ],
    __schema_configs_search: [
      {
        __editorItemTitle: 'Configurações De Busca',
        title: 'busca - titulo',
        description: 'busca - descrição',
        idCategorie: 'busca - id da categoria'
      }
    ],
    __schema_steps: [
      {
        __editorItemTitle: 'etapa [0] - titulo',
        description: 'etapa [0] - descrição',
        specificationID: 'etapa [0] - id especificação',
        filters: [
          {
            __editorItemTitle: 'filtro  [0] - titulo',
            specificationValue: 'filtro [0] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [1] - titulo',
            specificationValue: 'filtro [1] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [2] - titulo',
            specificationValue: 'filtro [2] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          }
        ]
      },
      {
        __editorItemTitle: 'etapa [1] - titulo',
        description: 'etapa [1] - descrição',
        specificationID: 'etapa [1] - id especificação',
        filters: [
          {
            __editorItemTitle: 'filtro  [0] - titulo',
            specificationValue: 'filtro [0] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [1] - titulo',
            specificationValue: 'filtro [1] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [2] - titulo',
            specificationValue: 'filtro [2] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          }
        ]
      },
      {
        __editorItemTitle: 'etapa [2] - titulo',
        description: 'etapa [2] - descrição',
        specificationID: 'etapa [2] - id especificação',
        filters: [
          {
            __editorItemTitle: 'filtro  [0] - titulo',
            specificationValue: 'filtro [0] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [1] - titulo',
            specificationValue: 'filtro [1] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [2] - titulo',
            specificationValue: 'filtro [2] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          }
        ]
      },
      {
        __editorItemTitle: 'etapa [3] - titulo',
        description: 'etapa [3] - descrição',
        specificationID: 'etapa [3] - id especificação',
        filters: [
          {
            __editorItemTitle: 'filtro  [0] - titulo',
            specificationValue: 'filtro [0] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [1] - titulo',
            specificationValue: 'filtro [1] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          },
          {
            __editorItemTitle: 'filtro  [2] - titulo',
            specificationValue: 'filtro [2] - valor da especificação',
            __screen_image: [
              {
                src: 'a'
              }
            ]
          }
        ]
      }
    ]
  } as unknown as State
)

export const buildMockStep = (index: number, status: 1 | 2 | 3, position: number): reducer_schema_step => {
  return {
    filter_answered: null,
    __editorItemTitle: `etapa [${index}] - titulo`,
    description: `etapa [${index}] - descrição`,
    specificationID: `etapa [${index}] - id especificação`,
    filters: [
      {
        __editorItemTitle: 'filtro  [0] - titulo',
        specificationValue: 'filtro [0] - valor da especificação',
        __screen_image: [
          {
            src: 'a'
          }
        ]
      },
      {
        __editorItemTitle: 'filtro  [1] - titulo',
        specificationValue: 'filtro [1] - valor da especificação',
        __screen_image: [
          {
            src: 'a'
          }
        ]
      },
      {
        __editorItemTitle: 'filtro  [2] - titulo',
        specificationValue: 'filtro [2] - valor da especificação',
        __screen_image: [
          {
            src: 'a'
          }
        ]
      }
    ],
    status,
    position
  }
}

export const buildMockFilter = (index: number, parentPosition: number): reducer_schema_filter => {
  return {
    __editorItemTitle: `filtro  ${index} - titulo`,
    specificationValue: `filtro ${index} - valor da especificação`,
    parentPosition,
    __screen_image: [
      {
        src: '1'
      }
    ]
  }
}

export const buildMockStepAnswered = (positionStep: number, indexFilter: number, isCurrentStep = true): reducer_schema_step => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return {
    specificationID: `etapa [${positionStep}] - id especificação`,
    position: positionStep,
    status: isCurrentStep
      ? 1
      : 2,
    filters: [{
      __editorItemTitle: 'filtro  [0] - titulo',
      specificationValue: 'filtro [0] - valor da especificação',
      __screen_image: [
        {
          src: 'a'
        }
      ]
    },
    {
      __editorItemTitle: 'filtro  [1] - titulo',
      specificationValue: 'filtro [1] - valor da especificação',
      __screen_image: [
        {
          src: 'a'
        }
      ]
    },
    {
      __editorItemTitle: 'filtro  [2] - titulo',
      specificationValue: 'filtro [2] - valor da especificação',
      __screen_image: [
        {
          src: 'a'
        }
      ]
    }],

    filter_answered: {
      parentPosition: positionStep,
      __editorItemTitle: `filtro  ${indexFilter} - titulo`,
      specificationValue: `filtro ${indexFilter} - valor da especificação`,
      __screen_image: [
        {
          src: '1'
        }
      ]
    }
  } as reducer_schema_step
}