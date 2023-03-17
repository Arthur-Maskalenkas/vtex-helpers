import { InputHTMLAttributes } from "react"

export type TInputRadioProps = {
  name: string
  id: string | number
  modifier: string
} & InputHTMLAttributes<HTMLInputElement>
