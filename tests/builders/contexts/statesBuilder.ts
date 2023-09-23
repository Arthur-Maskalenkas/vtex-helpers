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

  build () {
    return this.#state
  }
}