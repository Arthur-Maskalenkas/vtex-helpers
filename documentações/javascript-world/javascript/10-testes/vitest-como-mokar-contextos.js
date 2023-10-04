import { beforeEach, describe, expect, it, SpyInstance, vi } from "vitest";
import { Header } from "../../../../../src/views/screens/searchProduct/components/header.tsx";
import { render } from "../../../../utils/test-utils.tsx";
import * as SearchProductContextModule from "../../../../../src/views/screens/searchProduct/context/index.tsx";

describe(`${Header.name} Tests Suite`, () => {

  let searchProductContextModule: SpyInstance<any, any>

  beforeEach(() => {
    searchProductContextModule = vi.spyOn(SearchProductContextModule, 'useSearchProductContext')
  })

  it('Should render correctly2', () => {
    searchProductContextModule.mockImplementation(() => {
      return {
        states: {
          currentModule: 'product'
        } as any,
        dispatch: vi.fn()
      }
    })


    const { getByRole } = render(<Header />);


    expect(getByRole('heading', { name: 'product' })).toBeInTheDocument()
  })
})

//
//
// OU
//
//
import * as ModuleSearchProductContext from "../../../../../../../src/views/screens/searchProduct/context";
import { useSearchProductContext } from "../../../../../../../src/views/screens/searchProduct/context";

describe(() => {
  let params, searchProductContextSpy

  beforeEach(() => {
    searchProductContextSpy = vi.spyOn(ModuleSearchProductContext, 'useSearchProductContext').mockReturnValue({
      dispatch: vi.fn(),
      states: {} as any
    })
  })

  it('Should call dispatch ACTION_HANDLE_CHANGE_TO_MODULE_PRODUCT when click on button "Ver mais informações"', () => {
    const { getByRole } = render(<ProductSummary {...params} />)

    const button = getByRole('button', { name: /ver mais informações/i })

    userEvent.click(button)

    const contextSpy = useSearchProductContext()

    expect(contextSpy.dispatch).toHaveBeenCalledWith({
      type: 'ACTION_HANDLE_CHANGE_TO_MODULE_PRODUCT',
      payload: { data: params.product }
    })

  })


})