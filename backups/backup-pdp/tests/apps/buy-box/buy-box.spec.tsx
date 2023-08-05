import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import BuyBox from '../../../BuyBox';
import { _MaybeProduct } from '../../types/product-context';
import { ProductContextDataBuilder } from './model/product-context-data-builder';
import { useProduct } from '../../../__mocks__/vtex.product-context'


jest.mock('../../../__mocks__/vtex.product-context', () => ({
  useProduct: jest.fn()
}));


jest.mock('../../../apps/buy-box/strategies/normal-page-strategy', () => {
  const originalModule = jest.requireActual('../../../apps/buy-box/strategies/normal-page-strategy');

  const MockedNormalPageStrategy = jest.fn(() => (
    <p>normal page rendered</p>
  )) as any;

  MockedNormalPageStrategy.canRender = originalModule.NormalPageStrategy.canRender;

  return {
    NormalPageStrategy: MockedNormalPageStrategy,
  };
});

jest.mock('../../../apps/buy-box/strategies/bpc-page-strategy', () => {
  const originalModule = jest.requireActual('../../../apps/buy-box/strategies/bpc-page-strategy');

  const MockedBPCPageStrategy = jest.fn(() => (
    <p>BPC page rendered</p>
  )) as any;

  MockedBPCPageStrategy.canRender = originalModule.BPCPageStrategy.canRender;

  return {
    BPCPageStrategy: MockedBPCPageStrategy,
  };
});

jest.mock('../../../apps/buy-box/strategies/premium-1-page-strategy', () => {
  const originalModule = jest.requireActual('../../../apps/buy-box/strategies/premium-1-page-strategy');

  const MockedPremium1PageStrategy = jest.fn(() => (
    <p>Premium 1 page rendered</p>
  )) as any;

  MockedPremium1PageStrategy.canRender = originalModule.Premium1PageStrategy.canRender;

  return {
    Premium1PageStrategy: MockedPremium1PageStrategy,
  };
});

jest.mock('../../../apps/buy-box/strategies/premium-2-page-strategy', () => {
  const originalModule = jest.requireActual('../../../apps/buy-box/strategies/premium-2-page-strategy');

  const MockedPremium2PageStrategy = jest.fn(() => (
    <p>Premium 2 page rendered</p>
  )) as any;

  MockedPremium2PageStrategy.canRender = originalModule.Premium2PageStrategy.canRender;

  return {
    Premium2PageStrategy: MockedPremium2PageStrategy,
  };
});



const renderSut = (mockProductContext?: _MaybeProduct) => {
  (useProduct as jest.Mock).mockImplementation(() => mockProductContext)

  render(
    <BuyBox />
  )
}


describe('Heading Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })


  it('Should render a normal page', () => {
    const productContextMock = ProductContextDataBuilder
      .aProductContext()
      .withPropertiesToRenderNormalPage()
      .build()

    renderSut(productContextMock)
    const componentNormalPage = screen.getByText('normal page rendered');

    expect(componentNormalPage).toBeInTheDocument()
  });

  it('Should render a bpc page if productReference has text "bpc" on init', () => {
    const productContextMock = ProductContextDataBuilder
      .aProductContext()
      .withPropertiesToRenderBPCPage()
      .build()

    renderSut(productContextMock)

    const componentNormalPage = screen.getByText('BPC page rendered');

    expect(componentNormalPage).toBeInTheDocument()
  });

  it('Should render a premium 1 page if product specification has reference to premium 1 page', () => {
    const productContextMock = ProductContextDataBuilder
      .aProductContext()
      .withPropertiesToRenderPremium1Page()
      .build()

    renderSut(productContextMock)

    const componentNormalPage = screen.getByText(/premium 1 page rendered/i);

    expect(componentNormalPage).toBeInTheDocument()
  });

  it('Should render a premium 2 page if product specification has reference to premium 2 page', () => {
    const productContextMock = ProductContextDataBuilder
      .aProductContext()
      .withPropertiesToRenderPremium2Page()
      .build()

    renderSut(productContextMock)

    const componentNormalPage = screen.getByText(/premium 2 page rendered/i);

    expect(componentNormalPage).toBeInTheDocument()
  });
});
