import { Button } from '../../../src/views/atoms/button'
import { render, userEvent } from '../../utils/test-utils'
import { vi, expect } from 'vitest'

describe('button', () => {
  it('should render the button', async () => {
    const spyClick = vi.fn()

    const { getByText } = render(<Button onClick={spyClick}>teste</Button>)
    const button = getByText('teste')

    await userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(spyClick).toHaveBeenCalled()
  })
})