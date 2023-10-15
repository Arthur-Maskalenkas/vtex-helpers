export type GetDiscountsProps = { teste: string } & Pick<DiscountTagProps, 'typeTag'>

const makeSut = (props: Parameters<typeof GetDiscounts>[0]) => {
  return GetDiscounts(props)
}