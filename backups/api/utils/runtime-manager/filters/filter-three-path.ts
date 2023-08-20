import {Filter, FilterParams} from "../protocols/filter-protocol";


export class FilterThreePath implements Filter {
  constructor(
    public fieldToFilter?: string
  ) {
    this.fieldToFilter = fieldToFilter
  }


  public verifyIfIsValid({threePath}: FilterParams): boolean {
    if (!threePath) return true

    return threePath.includes(this.fieldToFilter);

  }
}
