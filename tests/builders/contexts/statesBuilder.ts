import { BuilderDefaultStates } from '../../../src/context/reducer/generateDefaultStates'
import { type States } from '../../../src/context/reducer/types.ts'

export class StatesBuilder {
  #state: States

  private constructor () {
    this.#state = BuilderDefaultStates.aDefaultStates({} as any)
  }

  public static a () {
    return new StatesBuilder()
  }

  public appendIsOpenedTrue () {
    this.#state = {
      ...this.#state,
      isOpened: true
    }
    return this
  }

  public appendIsOpenedFalse () {
    this.#state = {
      ...this.#state,
      isOpened: false
    }
    return this
  }

  public appendPrivateListOptionsWithFNAttribute (fn: any) {
    const mainIndex = this.#state.privateListOptions.size

    this.#state.privateListOptions.set(`item_${mainIndex}_title`, fn)

    return this
  }

  public appendParamsWithChildrens (options: appendPrivateListOptionsWithOptions = {}) {
    const { lengthChildrens = 1, mainIndex = 1 } = options
    const result: any = {
      [`option.${mainIndex}`]: {
        title: `Opção ${mainIndex}`,
        items: {}
      }
    }

    for (let i = 1; i <= lengthChildrens; i++) {
      const key = `option.${mainIndex}.${i}`
      result[`option.${mainIndex}`].items[key] = {
        title: `Opção ${mainIndex}.${i}`
      }
    }

    return result
  }

  public appendPrivateListOptionsWithItemsAttribute (options: appendPrivateListOptionsWithOptions = {}) {
    const { lengthChildrens = 1 } = options

    const mainIndex = this.#state.privateListOptions.size

    const childrens = Array.from({ length: lengthChildrens }, (_, index) => `item_${mainIndex}_${index}_title`)

    this.#state.privateListOptions.set(`item_${mainIndex}_title`, childrens)

    return this
  }

  build () {
    return this.#state
  }
}

type appendPrivateListOptionsWithOptions = {
  lengthChildrens?: number
  mainIndex?: number
}