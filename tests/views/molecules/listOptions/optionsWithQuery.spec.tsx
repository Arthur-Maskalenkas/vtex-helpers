import { ListOptions } from '../../../../src/views/molecules/listOptions.tsx'
import { render } from '../../../utils/test-utils.tsx'
import * as appContext from '../../../../src/context'
import { type ApplicationReducerProvider } from '../../../../src/context'
import { expect } from 'vitest'

class BuildOptionsWithQuery {
  #context: ApplicationReducerProvider

  private constructor () {
    this.#context = {
      state: {
        query: 'any-query',
        searchableListOptions: [
          { title: 'option 1', value: 'option-1' },
          { title: 'option 2', value: 'option-2' }

        ]
      },
      dispatch: null
    } as any
  }

  public static a () {
    return new BuildOptionsWithQuery()
  }

  withoutQuery () {
    this.#context.state.query = null
    return this
  }

  withoutSearchableListOptions () {
    this.#context.state.searchableListOptions = []
    return this
  }

  build () {
    vi.spyOn(appContext, 'useApplicationReducerContext')
      .mockImplementation(() => (this.#context))

    const renderedEl = render(<ListOptions.OptionsWithQuery />)

    return { sut: renderedEl.queryByRole('list'), renderedEl }
  }
}

describe(ListOptions.OptionsWithQuery.name, () => {
  it('should render a list of options present on searchableListOptions', () => {
    const { sut } = BuildOptionsWithQuery
      .a()
      .build()

    expect(sut).toBeInTheDocument()
    expect(sut!.children).toHaveLength(2)
  })

  it('should not render a list of options when query is null', () => {
    const { sut } = BuildOptionsWithQuery
      .a()
      .withoutQuery()
      .build()

    expect(sut).not.toBeInTheDocument()
  })

  it('should not render a list of options when searchableListOptions is null', () => {
    const { sut } = BuildOptionsWithQuery
      .a()
      .withoutSearchableListOptions()
      .build()

    expect(sut).not.toBeInTheDocument()
  })
})