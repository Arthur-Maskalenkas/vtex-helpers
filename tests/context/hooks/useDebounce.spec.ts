import { describe, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDebounce } from '../../../src/context/hooks/useDebounce.tsx'
import { act } from 'react-dom/test-utils'
import { faker } from '@faker-js/faker'

describe('useDebounce', () => {
  it('should possible call debounce multiple times', () => {
    vi.useFakeTimers()

    const [expected1, expected2, expected3] = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: expected1, delay: 500 }
    })

    expect(result.current).toBe(expected1)

    rerender({ value: expected2, delay: 500 })

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(result.current).toBe(expected2)

    rerender({ value: expected3, delay: 500 })

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(result.current).toBe(expected3)
  })
})