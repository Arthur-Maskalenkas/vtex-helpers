// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProtocolController {
  handle: <R = any> () => Promise<R>
}