import { SpinnerProps } from "../common"


declare module 'vtex.styleguide' {
  export const ToastConsumer
  export const ToastProvider
  export const withToast

  export const ToastContext: Context
  type ToastContextType = {
    showToast: ({
      message,
      duration,
    }: {
      message: string
      duration: number
    }) => unknown
  }
  export const Spinner: React.FC<SpinnerProps>
}
