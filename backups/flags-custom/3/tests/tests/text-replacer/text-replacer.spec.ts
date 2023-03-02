import { TextReplacer } from '../../src/text-replacer/text-replacer'
import { DataRefined } from '../../src/_interfaces'

type SutTypes = {
  sut: TextReplacer
}

const makeSut = (): SutTypes => {
  const sut = new TextReplacer()

  return {
    sut
  }
}

describe('Text Replacer()', () => {
  describe('rules', () => {
    it('Should return text if variable is not mentioned on text', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          sellingPrice: 1,
          listPrice: 2,
          discountInValue: 3,
          discountInPercentage: 4
        }
      }

      const mock_text = 'any text'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual('any text')
    })

    it('Should return null if no have text on param', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          sellingPrice: 1,
          listPrice: 2,
          discountInValue: 3,
          discountInPercentage: 4
        }
      }

      const mock_text = null

      const result = sut.replaceVars(null, mock_refined_data)

      expect(result).toEqual(null)
    })

    it('Should return null if no have data on param', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {}

      const mock_text = null

      const result = sut.replaceVars(null, mock_refined_data)

      expect(result).toEqual(null)
    })

    it('Should replace any text', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          sellingPrice: 1,
          listPrice: 2,
          discountInValue: 3,
          discountInPercentage: 4
        }
      }
      const mock_text = 'any text R${sellingPrice} R${listPrice} R${discountInValue} {discountInPercentage}%'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual('any text R$1.00 R$2.00 R$3.00 4%')
    })

    it('Should  return  text if all variables mentioned have value', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          sellingPrice: 1,
          listPrice: 2,
          discountInValue: 3,
          discountInPercentage: 4
        }
      }
      const mock_text = 'any text {sellingPrice} {listPrice} {discountInValue} {discountInPercentage}'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual('any text 1.00 2.00 3.00 4')
    })

    it('Should not return any text if any variable mentioned dont have value', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          sellingPrice: 1,
          discountInValue: 3,
          discountInPercentage: 4
        }
      }
      const mock_text = 'any text {sellingPrice} {listPrice} {discountInValue} {discountInPercentage}'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual(null)
    })
  })

  describe('Discount percentage', () => {
    it('Should replace text variable formatted', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          discountInPercentage: 4
        }
      }

      const mock_text = 'any text {discountInPercentage}'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual('any text 4')
    })

    it('Should format correctly', () => {
      const { sut } = makeSut()

      const list_mock_refined_datas: DataRefined[] = [
        { price: { discountInPercentage: 4.75 } },
        { price: { discountInPercentage: 4.7 } },
        { price: { discountInPercentage: 4.700 } }
      ]

      const mock_text = 'any text {discountInPercentage}'

      const result = list_mock_refined_datas.map(mock_refined_data => {
        return sut.replaceVars(mock_text, mock_refined_data)
      })

      expect(result).toEqual(
        [
          'any text 4',
          'any text 4',
          'any text 4'
        ]
      )
    })
  })

  describe('discount value', () => {
    it('Should replace text variable', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          discountInValue: 5
        }
      }

      const mock_text = 'any text {discountInValue}'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual('any text 5.00')
    })

    it('Should format correctly', () => {
      const { sut } = makeSut()
      const list_mock_refined_datas: DataRefined[] = [
        { price: { discountInValue: 4.75 } },
        { price: { discountInValue: 4.7 } },
        { price: { discountInValue: 4.700 } }
      ]

      const mock_text = 'any text {discountInValue}'

      const result = list_mock_refined_datas.map(mock_refined_data => {
        return sut.replaceVars(mock_text, mock_refined_data)
      })

      expect(result).toEqual(
        [
          'any text 4.75',
          'any text 4.70',
          'any text 4.70'
        ]
      )
    })
  })

  describe('selling price', () => {
    it('Should replace text variable', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          sellingPrice: 5
        }
      }

      const mock_text = 'any text {sellingPrice}'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual('any text 5.00')
    })

    it('Should format correctly', () => {
      const { sut } = makeSut()
      const list_mock_refined_datas: DataRefined[] = [
        { price: { sellingPrice: 4.75 } },
        { price: { sellingPrice: 4.7 } },
        { price: { sellingPrice: 4.700 } }
      ]

      const mock_text = 'any text {sellingPrice}'

      const result = list_mock_refined_datas.map(mock_refined_data => {
        return sut.replaceVars(mock_text, mock_refined_data)
      })

      expect(result).toEqual(
        [
          'any text 4.75',
          'any text 4.70',
          'any text 4.70'
        ]
      )
    })
  })

  describe('list price', () => {
    it('Should replace text variable', () => {
      const { sut } = makeSut()

      const mock_refined_data: DataRefined = {
        price: {
          listPrice: 5
        }
      }

      const mock_text = 'any text {listPrice}'

      const result = sut.replaceVars(mock_text, mock_refined_data)

      expect(result).toEqual('any text 5.00')
    })

    it('Should format correctly', () => {
      const { sut } = makeSut()
      const list_mock_refined_datas: DataRefined[] = [
        { price: { listPrice: 4.75 } },
        { price: { listPrice: 4.7 } },
        { price: { listPrice: 4.700 } }
      ]

      const mock_text = 'any text {listPrice}'

      const result = list_mock_refined_datas.map(mock_refined_data => {
        return sut.replaceVars(mock_text, mock_refined_data)
      })

      expect(result).toEqual(
        [
          'any text 4.75',
          'any text 4.70',
          'any text 4.70'
        ]
      )
    })
  })
})