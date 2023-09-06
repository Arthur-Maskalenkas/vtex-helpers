import { type ParamsBuildDefaultStates } from '../../../../src/context/reducer/generateDefaultStates/protocols.ts'
import { BuilderDefaultStates } from '../../../../src/context/reducer/generateDefaultStates'
import { type States } from '../../../../src/context/reducer/types.ts'
import { ModelInternalListOptions } from '../../../../src/context/reducer/domain/models/modelInternalListOptions.ts'
import { ModelListOptions } from '../../../../src/context/reducer/domain/models/modelListOptions.ts'

describe(BuilderDefaultStates.name, () => {
  it('should generate default states', () => {
    const paramFn = vi.fn as any
    const params: ParamsBuildDefaultStates = {
      manualList: {
        'option.1': {
          title: 'Opção 1',
          items: {
            'option.1.1': {
              title: 'Opção 1.1'
            },
            'option.1.2': {
              title: 'Opção 1.2'
            }
          }
        },
        anyAttributeName: {
          title: 'Any Title',
          component: paramFn
        }
      }
    }

    const expected: Partial<States> = {
      internalListOptions: new Map<any, any>([
        ['option.1', new ModelInternalListOptions('Opção 1', null, null)],
        ['option.1/option.1.1', new ModelInternalListOptions('Opção 1.1', null, 'option.1')],
        ['option.1/option.1.2', new ModelInternalListOptions('Opção 1.2', null, 'option.1')],
        ['anyAttributeName', new ModelInternalListOptions('Any Title', paramFn, null)]
      ]),
      listOptions: [
        new ModelListOptions('Opção 1', 'option.1', null, null),
        new ModelListOptions('Any Title', 'anyAttributeName', paramFn, null)
      ]
    }

    const result = BuilderDefaultStates.aDefaultStates(params)

    expect(result).toStrictEqual(expected)
  })
})