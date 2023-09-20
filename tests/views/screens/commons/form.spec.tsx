import { Form } from '../../../../src/views/screens/commons/form/form.tsx'
import { render, userEvent } from '../../../utils/test-utils.tsx'
import { expect } from 'vitest'

describe(Form.name, () => {
  it('should call clearSubmit with inputs', () => {
    const fnSpy = vi.fn()

    const { getByRole } = render(
            <Form handleSubmit={fnSpy}>
                <input id={'paramCollection'} value={'value.0'}/>

                <Form.Button>Submit</Form.Button>
            </Form>
    )

    const sut = getByRole('form')
    const button = getByRole('button')

    userEvent.click(button)

    console.log(fnSpy.mock.calls[0][0])

    expect(fnSpy).toHaveBeenCalledWith('paramCollection=value.0')
  })

  it('should receive multiple inputs', () => {
    const fnSpy = vi.fn()

    const { getByRole } = render(
            <Form handleSubmit={fnSpy}>
                <input id={'paramCollection'} value={'collection.0'}/>
                <input id={'paramCategory'} value={'category.0'}/>
                <input
                    id={'paramSpecification'}
                    value={'specificationId=specificationValue'}
                    data-with-value={true}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
    )
    const sut = getByRole('form')
    const button = getByRole('button')

    userEvent.click(button)

    console.log(fnSpy.mock.calls[0][0])

    expect(fnSpy).toHaveBeenCalledWith('paramCollection=collection.0,paramCategory=category.0,paramSpecification=specificationId=specificationValue')
  })

  it('should join params by character "=" if input have "data-with-value" attribute', () => {
    const fnSpy = vi.fn()

    const { getByRole } = render(
            <Form handleSubmit={fnSpy}>
                <input
                    id={'paramSpecification'}
                    value={'specificationId=specificationValue'}
                    data-with-value={true}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
    )
    const sut = getByRole('form')
    const button = getByRole('button')

    userEvent.click(button)

    expect(fnSpy).toHaveBeenCalledWith('paramSpecification=specificationId=specificationValue')
  })

  it('should not call when not have inputs', () => {
    const fnSpy = vi.fn()

    const { getByRole } = render(
            <Form handleSubmit={fnSpy}>
                <Form.Button>Submit</Form.Button>
            </Form>
    )
    const sut = getByRole('form')
    const button = getByRole('button')

    userEvent.click(button)

    expect(fnSpy).not.toHaveBeenCalled()
  })

  it('should not call fn if input have "data-with-value" attribute but not have value', () => {
    const fnSpy = vi.fn()

    const { getByRole } = render(
            <Form handleSubmit={fnSpy}>
                <input
                    id={'paramSpecification'}
                    value={'specificationId'}
                    data-with-value={true}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
    )
    const sut = getByRole('form')
    const button = getByRole('button')

    userEvent.click(button)

    expect(fnSpy).not.toHaveBeenCalled()
  })
})