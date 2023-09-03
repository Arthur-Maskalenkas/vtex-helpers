import { cleanup, render, type RenderOptions } from '@testing-library/react'
import { afterEach } from 'vitest'

// eslint-disable-next-line vitest/no-hooks,vitest/require-top-level-describe
afterEach(() => {
  cleanup()
})

function customRender (ui: React.ReactElement, options: RenderOptions = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options
  })
}

export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }