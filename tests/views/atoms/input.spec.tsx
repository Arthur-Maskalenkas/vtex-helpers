import { render, userEvent } from '../../utils/test-utils.tsx'
import { Input } from '../../../src/views/atoms/input'
import { describe, expect, it, type Mock } from 'vitest'
import { faker } from '@faker-js/faker'
import * as appContext from '../../../src/context'
import * as useDebounceModule from '../../../src/context/hooks/useDebounce.tsx'

class BuildInputQueryOptions {
  #props: Parameters<typeof Input.QueryOptions>[0]
  private constructor () {
    this.#props = {
      id: 'default-id',
      name: 'default-name',
      'data-testid': 'default-id'
    } as any
  }

  public static a () {
    return new BuildInputQueryOptions()
  }

  public appendSpyOnDispatchContext (fnSpy: Mock<any, any>) {
    vi.spyOn(appContext, 'useApplicationReducerContext')
      .mockImplementation(() => ({
        dispatch: fnSpy,
        state: {} as any
      }))

    return this
  }

  public appendStubOnDebounce (text: string) {
    vi.spyOn(useDebounceModule, 'useDebounce')
      .mockImplementation(() => text)

    return this
  }

  build () {
    return render(<Input.QueryOptions {...this.#props}/>).getByTestId((this as any).#props['data-testid'])
  }
}

describe(Input.QueryOptions.name, () => {
  it('should render correctly', async () => {
    const sut = BuildInputQueryOptions.a().build()
    const text = faker.lorem.words(3)

    await userEvent.type(sut, text)

    expect(sut).toHaveValue(text)
  })

  it('should call action present in context with correct value', async () => {
    const spyDispatch = vi.fn()
    const text = faker.lorem.words(3)

    const sut = BuildInputQueryOptions
      .a()
      .appendSpyOnDispatchContext(spyDispatch)
      .appendStubOnDebounce(text)
      .build()

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
  })
})