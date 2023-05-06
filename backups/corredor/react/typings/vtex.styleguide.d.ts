import { SpinnerProps } from "../common"


declare module 'vtex.styleguide' {
  export const ToastConsumer
  export const ToastProvider
  export const withToast

  export const Spinner: React.FC<SpinnerProps>
}
