// No teste abaixo eu estou aplicando um spy e mokando o retorno da função useRuntime

// react/components/DiscountTag/testes.tsx
import React from 'react'
import { useRuntime } from 'vtex.render-runtime'



export const Teste = () => {
  const { account } = useRuntime()
  return (
    <div className="container-app-teste">
      {account}
    </div>
  )
}

// react/__mocks__/vtex.render-runtime.tsx
export const useRuntime = jest.fn()

//
// * mokando o retorno da função useRuntime
//

// 1. react/__test__/components/react/components/DiscountTag/teste.test.tsx
import React from 'react'
import { render } from '@vtex/test-tools/react'
import { Teste } from "../../../../../components/DiscountTag/testes";
import { useRuntime } from "vtex.render-runtime";



const mockRuntime = useRuntime

beforeEach(() => {
  jest.clearAllMocks()
  mockRuntime.mockImplementation(() => ({
    account: 'vtexgame1'
  }))
})


describe(Teste.name, () => {
  it('Should render vtexgame2', () => {
    mockRuntime.mockImplementation(() => ({
      account: 'vtexgame2'
    }))

    const { container, getByText } = render(<Teste />)

    expect(getByText('vtexgame2')).toBeTruthy()
    expect(mockRuntime).toHaveBeenCalled()
  })

})


// 2. react/__test__/components/react/components/DiscountTag/index.test.tsx

import React from 'react'
import { render } from '@vtex/test-tools/react'
import { Teste } from "../../../../../components/DiscountTag/testes";
import { useRuntime } from "vtex.render-runtime";



describe(Teste.name, () => {
  let useRuntimeSpy: jest.Mock<any, any>

  beforeEach(() => {
    jest.clearAllMocks()

    useRuntimeSpy = useRuntime.mockImplementation(() => ({
      account: 'vtexgame1'
    }))
  })


  it('Should render vtexgame2', () => {
    useRuntimeSpy.mockImplementation(() => ({
      account: 'vtexgame2'
    }))

    const { container, getByText } = render(<Teste />)

    expect(getByText('vtexgame2')).toBeTruthy()
    expect(useRuntimeSpy).toHaveBeenCalled()
  })

})
