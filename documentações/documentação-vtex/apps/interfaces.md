https://github.com/vtex-apps/render-runtime/blob/a9961ec5b323b08f44b20020672d64e289f2f5a8/react/typings/runtime.ts#L141

interface BlockEntry {
  after?: BlockInsertion[]
  around?: BlockInsertion[]
  before?: BlockInsertion[]
  blockId: string
  blocks?: BlockInsertion[]
  component: string
  composition?: Composition
  hasContentSchema: boolean
  props?: Record<string, any>
  context?: {
    component: string
    props?: Record<string, any>
  }
  implements: string[]
  originalBlockId?: string
  preview?: Preview
  render: RenderStrategy
  hydration?: HydrationType
  track?: string[]
  title?: string
}