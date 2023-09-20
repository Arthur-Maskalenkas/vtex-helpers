import { Form } from '../../../../../src/views/screens/commons/form/form.tsx'
import { render, userEvent } from '../../../../utils/test-utils.tsx'
import { afterEach, expect } from 'vitest'
import { ListOptions } from '../../../../../src/views/molecules/listOptions.tsx'
import { BuilderForm, BuilderReactFormEvent } from './builders.tsx'
import { mapParams } from '../../../../../src/views/screens/commons/form/utils.ts'

describe(Form.name, () => {
  afterEach(
    () => {
      vi.restoreAllMocks()
    }
  )
  describe('fn callback', () => {
    it('should not call fn when not have a value', () => {
      const { fnSpy } = BuilderForm
        .a()
        .build()

      expect(fnSpy).not.toHaveBeenCalled()
    })

    it('should call clearSubmit with inputs resolved', () => {
      const { fnSpy } = BuilderForm
        .a()
        .mockAMapParams('paramCollection=value.0')
        .build()

      expect(fnSpy).toHaveBeenCalledWith('paramCollection=value.0')
    })
  })

  describe('mapParams', () => {
    it.todo('should return a Map with any error', () => {})

    it.todo('should a return error on Map if input have "data-with-value" attribute but not have value', () => {})

    it('should map multiple inputs', () => {
      const params: any = BuilderReactFormEvent.a()
        .appendInput('paramCollection', 'collection')
        .appendInput('paramCategory', 'category')
        .appendInput('paramSpecification', 'specificationId=specificationValue')
        .build()

      const result = mapParams(params)

      expect(result).toBe('paramCollection=collection,paramCategory=category,paramSpecification=specificationId=specificationValue')
    })

    it('should join params by character "=" if input have "data-with-value" attribute', () => {
      const params: any = BuilderReactFormEvent.a()
        .appendInput('paramSpecification', 'specificationId=specificationValue', 'data-with-value')
        .build()

      const result = mapParams(params)

      expect(result).toBe('paramSpecification=specificationId=specificationValue')
    })
  })

  describe('provider', () => {
    it.todo('should provide a URL generated')
    it.todo('should provide a name of input with error and a error message')
    it.todo('should show generic message error if any fn throw an error')
  })
})