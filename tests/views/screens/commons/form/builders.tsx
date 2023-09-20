import { render, userEvent } from '../../../../utils/test-utils.tsx'
import { Form } from '../../../../../src/views/screens/commons/form/form.tsx'

export class BuilderForm {
  #inputs: any[] = []
  #submitOnStart: boolean

  private constructor (submitOnStart = true) {
    this.#submitOnStart = submitOnStart
  }

  public static a (submitOnStart = true) {
    return new BuilderForm(submitOnStart)
  }

  public appendInput (id?: string, value?: string, ...rest: any) {
    this.#inputs.push(
            <input {...rest} id={id} value={value}/>
    )
    return this
  }

  public build () {
    const fnSpy = vi.fn()
    const renderedEl = render(
            <Form handleSubmit={fnSpy}>
                {this.#inputs}
                <Form.Button>Submit</Form.Button>
                </Form>
    )

    if (this.#submitOnStart) {
      const renderedButton = renderedEl.getByRole('button')
      userEvent.click(renderedButton)
    }

    return { sut: renderedEl.queryByRole('form'), renderedEl, fnSpy }
  }
}