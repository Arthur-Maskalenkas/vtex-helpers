import {
} from '../../src/context/reducers/reducer/reducer.ts'
import { type States } from '../../src/context/reducers/types.ts'
import {
  generateDefaultStates
} from '../../src/context/reducers/reducer/utils/generateDefaultStates'

export class StatesBuilder {
  #state: States
  private constructor () {
    this.#state = generateDefaultStates()
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

  public appendPrivateListOptionsWithFNAttribute (fn: () => any) {
    const mainIndex = this.#state.privateListOptions.size

    this.#state.privateListOptions.set(`item_${mainIndex}_title`, fn)

    return this
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
}