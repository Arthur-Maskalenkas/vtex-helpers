// react/components/DiscountTag/testes.tsx
import React from 'react'
import { usePriceDiscounts } from "../../hooks/usePriceDiscounts";



export const Teste = () => {
  const { data } = usePriceDiscounts()

  return (
    <div className="container-app-teste">
      <p>{data}</p>
    </div>
  )
}

// react/__test__/components/react/components/DiscountTag/index.test.tsx
import React from 'react'
import { render } from '@vtex/test-tools/react'
import { Teste } from "../../../../../components/DiscountTag/testes";
import * as ModuleUsePriceDiscounts from "../../../../../hooks/usePriceDiscounts";



describe(Teste.name, () => {
  let usePriceDiscountsSpy: jest.SpyInstance<any, any>

  beforeEach(() => {
    jest.clearAllMocks()
    usePriceDiscountsSpy = jest.spyOn(ModuleUsePriceDiscounts, 'usePriceDiscounts')
  })


  it('Should render vtexgame2', () => {
    usePriceDiscountsSpy.mockImplementation(() => ({
      data: 'mockedValue'
    }))

    const { getByText } = render(<Teste />)

    expect(usePriceDiscountsSpy).toHaveBeenCalled()
    expect(getByText('mockedValue')).toBeTruthy()
  })

})
