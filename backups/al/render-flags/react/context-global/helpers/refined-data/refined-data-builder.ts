import { PPicker } from './protocols'
import {
  PickBasicField,
  PickCollectionField,
  PickPriceField,
  PickSpecificationField,
  PickVariationField
} from './pickers'
import { RefinedData } from './refined-data'

export class RefinedDataBuilder {
  listOfPickers: PPicker[] = []

  pickBrandField (): this {
    this.listOfPickers.push(new PickBasicField('brand'))
    return this
  }

  pickCategory (): this {
    this.listOfPickers.push(new PickBasicField('category'))
    return this
  }

  pickProductField (): this {
    this.listOfPickers.push(new PickBasicField('product'))
    return this
  }

  pickSellerField (): this {
    this.listOfPickers.push(new PickBasicField('seller'))
    return this
  }

  pickCollectionField (): this {
    this.listOfPickers.push(new PickCollectionField('collection'))
    return this
  }

  pickVariationField (): this {
    this.listOfPickers.push(new PickVariationField('variation'))
    return this
  }

  pickSpecificationField (): this {
    this.listOfPickers.push(new PickSpecificationField('specification'))
    return this
  }

  pickPriceField (): this {
    this.listOfPickers.push(new PickPriceField('price'))
    return this
  }

  build (): RefinedData {
    return new RefinedData(this.listOfPickers, 'summary')
  }
}
