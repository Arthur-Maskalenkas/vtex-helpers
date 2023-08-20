import {Filter, FilterParams} from "../protocols/filter-protocol";


export class FilterExtensionWithoutContent implements Filter {
  public fieldToFilter = 'content'

  public verifyIfIsValid({extension}: FilterParams): boolean {
    return Reflect.ownKeys(extension.content).length > 0;
  }
}
