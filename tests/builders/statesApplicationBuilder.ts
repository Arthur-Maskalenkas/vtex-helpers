import {
  type StatesApplication,
  statesDefault
} from '../../src/views/context/reducers/reducerApplication/reducerApplication.ts'

export class StatesApplicationBuilder {
  #state: StatesApplication
  private constructor () {
    this.#state = statesDefault
  }

  public static aStatesApplication () {
    return new StatesApplicationBuilder()
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