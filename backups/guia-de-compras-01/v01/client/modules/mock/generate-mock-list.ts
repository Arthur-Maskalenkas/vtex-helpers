export type TGenerateMockList = {
  list: any,
  quantityMock: number,
}

export const GenerateMockList = ({ list, quantityMock }: TGenerateMockList) => {
  return Array(quantityMock).fill(list)
}
