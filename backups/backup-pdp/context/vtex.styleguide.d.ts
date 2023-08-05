export * from 'vtex.styleguide'

type SpinnerProps = {
  color: string
  size: number
}

declare module 'vtex.styleguide' {
  export const Spinner: React.FC<SpinnerProps>;
}
