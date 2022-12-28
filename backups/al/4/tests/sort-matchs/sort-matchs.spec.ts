import { SortMatchs } from "../../src/sort-matchs/sort-matchs"

type sutTypes = {
  sut: SortMatchs
}

const makeSut = (): sutTypes => {
  const sut = new SortMatchs()
  return {
    sut
  }
}

describe('sortMatchs', () => {
  describe('priorityByList', () => {
    it('Should call specific method to resolve priorityByList', () => {
      const { sut } = makeSut()

      const listSpy = jest.spyOn(sut, 'resolvePriorityByList' as any)

      const list = [1, 2]

      const result = list.sort((a, b) => sut.sort(a, b, false, 'priorityByList'))

      expect(listSpy).toHaveBeenCalled()
      expect(listSpy).toHaveBeenCalledWith(false)
    })

    it('Should sort by priorityByList', () => {
      const { sut } = makeSut()

      const list = [1, 3, 2, 4]

      const result = list.sort((a, b) => sut.sort(a, b, false, 'priorityByList'))

      expect(result).toEqual(list)
    })

    it("Should invert matchs if isInverted is true", () => {
      const { sut } = makeSut()

      const list = [5, 4, 1, 4, 2, 1]

      const result = list.sort((a, b) => sut.sort(a, b, true, 'priorityByList'))

      expect(result).toEqual([1, 2, 4, 1, 4, 5])
    })
  })

  describe('priorityByField', () => {
    it('Should call specific method to resolve priorityByField', () => {
      const { sut } = makeSut()

      const listSpy = jest.spyOn(sut, 'resolvePriorityByField' as any)

      const list = [1, 2]

      const result = list.sort((a, b) => sut.sort(a, b, false, 'priorityByField'))

      expect(listSpy).toHaveBeenCalled()
      expect(listSpy).toHaveBeenCalledWith(2, 1, false)
    })

    it('Should sort by priorityByField', () => {
      const { sut } = makeSut()

      const list = [1, 3, 2, 4]

      const result = list.sort((a, b) => sut.sort(a, b, false, 'priorityByField'))

      expect(result).toEqual([4, 3, 2, 1])
    })

    it('Should priorize list of matchs if priority is equal', () => {
      const { sut } = makeSut()

      const list = [5, 4, 1, 4, 2, 1]

      const result = list.sort((a, b) => sut.sort(a, b, false, 'priorityByField'))

      expect(result).toEqual([5, 4, 4, 2, 1, 1])
    })

    it("Should invert matchs if isInverted is true", () => {
      const { sut } = makeSut()

      const list = [5, 4, 1, 4, 2, 1]

      const result = list.sort((a, b) => sut.sort(a, b, true, 'priorityByField'))

      expect(result).toEqual([1, 1, 2, 4, 4, 5])
    })
  })
})