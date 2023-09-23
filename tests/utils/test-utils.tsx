import { cleanup, render, type RenderOptions } from '@testing-library/react'
import { afterEach, type SpyInstance, vi } from 'vitest'

// eslint-disable-next-line vitest/no-hooks,vitest/require-top-level-describe
afterEach(() => {
		cleanup()
})

function customRender(ui: React.ReactElement, options: RenderOptions = {}) {
		return render(ui, {
				...options
		})
}

function fetchHelper() {
		global.fetch = vi.fn()
		return fetch as unknown as SpyInstance<any, any>
}

export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
export { fetchHelper }