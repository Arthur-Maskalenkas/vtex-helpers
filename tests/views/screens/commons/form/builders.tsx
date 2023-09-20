import {render, userEvent} from '../../../../utils/test-utils.tsx'
import {Form} from '../../../../../src/views/screens/commons/form/form.tsx'
import * as utilsModule from '../../../../../src/views/screens/commons/form/utils.ts'

export class BuilderReactFormEvent {
    #elements: any[] = []

    private constructor() {

    }

    public static a() {
        return new BuilderReactFormEvent()
    }

    public appendInput(id?: string, value?: string, ...rest: any) {
        const attrs = {
            ...rest,
            id,
            value
        }

        this.#elements.push(
            {
                ...attrs,
                attributes: {
                    ...attrs,
                    getNamedItem: (name: string) => {
                        return {value: attrs[name]}
                    }
                }
            }
        )
        return this
    }

    public appendInputWithAttributeDataWithValue(id?: string, value?: string, ...rest: any) {
        const attrs = {
            ...rest,
            id,
            value,
            'data-with-value': true
        }

        this.#elements.push(
            {
                ...attrs,
                attributes: {
                    ...attrs,
                    getNamedItem: (name: string) => {
                        return {value: attrs[name]}
                    }
                }
            }
        )
        return this
    }


    public build() {
        return {
            currentTarget: {
                elements: this.#elements
            }
        }
    }
}

export class BuilderForm {
    #inputs: any[] = []
    #submitOnStart: boolean

    private constructor(submitOnStart = true) {
        this.#submitOnStart = submitOnStart
    }

    public static a(submitOnStart = true) {
        return new BuilderForm(submitOnStart)
    }

    public appendInput(id?: string, value?: string, ...rest: any) {
        this.#inputs.push(
            <input {...rest} id={id} value={value}/>
        )
        return this
    }

    public mockAMapParams(value: string) {
        vi.spyOn(utilsModule, utilsModule.mapParams.name as any)
            .mockImplementation(() => value)
        return this
    }

    public build() {
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

        return {sut: renderedEl.queryByRole('form'), renderedEl, fnSpy}
    }
}