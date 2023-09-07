import { render, userEvent } from '../../utils/test-utils.tsx'
import { Input } from '../../../src/views/atoms/input'
import { describe, expect, it } from 'vitest'
import { faker } from '@faker-js/faker'
import * as appContext from '../../../src/context'
import * as useDebounceModule from '../../../src/context/hooks/useDebounce.tsx'

const makeSut = () => {
  const component = render(<Input.QueryOptions id={'default-id'} name={'default-name'} data-testid={'default-id'}/>)

  const sut = component.getByTestId('default-id')

  return {
    sut
  }
}

describe('input', () => {
  it('should render correctly', async () => {
    const text = faker.lorem.words(3)
    const { sut } = makeSut()

    await userEvent.type(sut, text)

    expect(sut).toHaveValue(text)
  })

  it('should call action present in context with correct value', async () => {
    const spyDispatch = vi.fn()
    const text = 'abc'

    vi.spyOn(appContext, 'useApplicationReducerContext')
      .mockImplementation(() => ({
        dispatch: spyDispatch,
        state: {} as any
      }))

    vi.spyOn(useDebounceModule, 'useDebounce')
      .mockImplementation(() => text)

    const { sut } = makeSut()

    await userEvent.type(sut, text)

    expect(spyDispatch).toHaveBeenCalledWith({
      type: 'ACTION_HANDLE_SEARCH_OPTION',
      payload: {
        data: {
          target: text,
          typeSearch: 'all'
        }
      }
    })

    expect(spyDispatch).toHaveBeenCalled()
  })
})