import { IntlShape } from "react-intl"
import { FormatCurrencyProps } from "../modules"

declare module 'vtex.format-currency' {


  export const formatCurrency: React.FC<FormatCurrencyProps>

}
