declare module 'vtex.styleguide' {
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
}
