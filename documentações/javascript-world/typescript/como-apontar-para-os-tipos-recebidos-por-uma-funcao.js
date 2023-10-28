//
// Pode tentar
//
export type GetDiscountsProps = { teste: string } & Pick<DiscountTagProps, 'typeTag'>

const makeSut = (props: Parameters<typeof GetDiscounts>[0]) => {
  return GetDiscounts(props)
}

//
// OU 
//

function sum(a: number, b: string): string {
  return a + b;
}

// 👇️ type SumParams = [a: number, b: string]
type SumParams = Parameters<typeof sum>;

// 👇️ type FirstParam = number
type FirstParam = SumParams[0];

// 👇️ type SecondParam = string
type SecondParam = SumParams[1];