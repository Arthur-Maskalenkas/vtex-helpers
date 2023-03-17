import { act, renderHook, RenderHookResult } from '@testing-library/react'
import { AppProvider, useAppProvider } from '.'
import React from 'react'
import {
  type Reducer,
  type reducer_schema_filter,
  type reducer_schema_step,
  type schema___ProviderShoppingGuide,
  type State
} from './_interfaces'
import { buildMockFilter, buildMockStep, buildMockStepAnswered, mock_initial_state } from './mocks/mock-context'

type SutTypes = {
  sut: { current: Reducer }
}

const makeSut = (initialState: Partial<State> = mock_initial_state()): SutTypes => {
  const wrapper = ({ children }: any) => (
    <AppProvider {...initialState as any}>{children}</AppProvider>
  )

  const { result } = renderHook(() => useAppProvider(), { wrapper })

  return {
    sut: result
  }
}

describe('AppProvider', () => {
  // it('Should increment currentStep', () => {
  //   const { sut } = makeSut({ currentStep: 2 })
  //
  //   act(() => { sut.current.dispatch({ type: 'next_step' }) })
  //
  //   expect(sut.current.state?.currentStep).toBe(3)
  // })

  describe('Reducer attributes', () => {
    describe('steps', () => {
      it('Should init correctly', () => {
        const { sut } = makeSut()

        const expectedData: reducer_schema_step[] = [
          buildMockStep(0, 1, 0),
          buildMockStep(1, 3, 1),
          buildMockStep(2, 3, 2),
          buildMockStep(3, 3, 3)
        ]

        expect(sut.current.state.steps).toEqual(expectedData)
      })

      it('Should work correctly after advanced to next step', () => {
        const { sut } = makeSut()

        const expectedData: reducer_schema_step[] = [
          buildMockStep(0, 2, 0),
          buildMockStep(1, 1, 1),
          buildMockStep(2, 3, 2),
          buildMockStep(3, 3, 3)
        ]

        act(() => { sut.current.dispatch({ type: 'next_step' }) })

        expect(sut.current.state.steps).toEqual(expectedData)
      })

      it('Should work correctly after dispath two times next step', () => {
        const { sut } = makeSut()

        const expectedData: reducer_schema_step[] = [
          buildMockStep(0, 2, 0),
          buildMockStep(1, 2, 1),
          buildMockStep(2, 1, 2),
          buildMockStep(3, 3, 3)
        ]

        act(() => { sut.current.dispatch({ type: 'next_step' }) })

        act(() => { sut.current.dispatch({ type: 'next_step' }) })

        expect(sut.current.state.steps).toEqual(expectedData)
      })

      it('Should work correctly after dispath three times next step', () => {
        const { sut } = makeSut()

        const expectedData: reducer_schema_step[] = [
          buildMockStep(0, 2, 0),
          buildMockStep(1, 2, 1),
          buildMockStep(2, 2, 2),
          buildMockStep(3, 1, 3)
        ]

        act(() => { sut.current.dispatch({ type: 'next_step' }) })
        act(() => { sut.current.dispatch({ type: 'next_step' }) })
        act(() => { sut.current.dispatch({ type: 'next_step' }) })

        expect(sut.current.state.steps).toEqual(expectedData)
      })
    })

    describe('currentStep', () => {
      it('Should init correctly', () => {
        const { sut } = makeSut()

        const expectedData: reducer_schema_step = buildMockStep(0, 1, 0)

        expect(sut.current.state.currentStep).toEqual(expectedData)
      })

      it('Should work correctly after advanced to next step', () => {
        const { sut } = makeSut()

        const expectedData: reducer_schema_step = buildMockStep(1, 1, 1)

        act(() => { sut.current.dispatch({ type: 'next_step' }) })

        expect(sut.current.state.currentStep).toEqual(expectedData)
      })

      it('Should work correctly after dispath two times next step', () => {
        const { sut } = makeSut()

        const expectedData: reducer_schema_step = buildMockStep(1, 1, 1)

        act(() => { sut.current.dispatch({ type: 'next_step' }) })

        expect(sut.current.state.currentStep).toEqual(expectedData)
      })
    })

    describe('steps answered', () => {
      it('Should init correctly', () => {
        const { sut } = makeSut()

        const expectedData: [] = []

        expect(sut.current.state.steps_answered).toEqual(expectedData)
      })

      it('Should work correctly after dispath answer step one times', () => {
        const { sut } = makeSut()

        const mock_step_answered_1 = buildMockStepAnswered(0, 3)

        act(() => { sut.current.dispatch({ type: 'answer_step', payload: { data: mock_step_answered_1 } }) })

        const expectItemsFiltereds = [buildMockStepAnswered(0, 3)]

        expect(sut.current.state.steps_answered).toMatchObject(expectItemsFiltereds)
        expect(sut.current.state.steps_answered).toHaveLength(1)
      })

      it('Should work correctly after dispath answer step two times', () => {
        const { sut } = makeSut()

        const mock_step_answered_1 = buildMockStepAnswered(0, 3)
        const mock_step_answered_2 = buildMockStepAnswered(1, 1)

        act(() => { sut.current.dispatch({ type: 'answer_step', payload: { data: mock_step_answered_1 } }) })
        act(() => { sut.current.dispatch({ type: 'answer_step', payload: { data: mock_step_answered_2 } }) })

        const expectItemsFiltereds = [buildMockStepAnswered(0, 3), buildMockStepAnswered(1, 1)]

        expect(sut.current.state.steps_answered).toMatchObject(expectItemsFiltereds)
        expect(sut.current.state.steps_answered).toHaveLength(2)
      })

      it('Should work correctly after dispath answer step three times', () => {
        const { sut } = makeSut()

        const mock_step_answered_1 = buildMockStepAnswered(0, 3)
        const mock_step_answered_2 = buildMockStepAnswered(1, 1)
        const mock_step_answered_3 = buildMockStepAnswered(2, 10)

        act(() => { sut.current.dispatch({ type: 'answer_step', payload: { data: mock_step_answered_1 } }) })
        act(() => { sut.current.dispatch({ type: 'answer_step', payload: { data: mock_step_answered_2 } }) })
        act(() => { sut.current.dispatch({ type: 'answer_step', payload: { data: mock_step_answered_3 } }) })

        const expectItemsFiltereds = [buildMockStepAnswered(0, 3), buildMockStepAnswered(1, 1), buildMockStepAnswered(2, 10)]

        expect(sut.current.state.steps_answered).toMatchObject(expectItemsFiltereds)
        expect(sut.current.state.steps_answered).toHaveLength(3)
      })
    })
  })
})