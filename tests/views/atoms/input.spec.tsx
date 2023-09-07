import { render, userEvent } from '../../utils/test-utils.tsx'
import { Input } from '../../../src/views/atoms/input'
import { describe, expect, it } from 'vitest'

describe('input', () => {
  it('should work correctly with debounce call', async () => {
    const { getByTestId } = render(<Input.QueryOptions id={'default-id'} name={'default-name'}
                                                         data-testid={'default-id'}/>)

    const sut = getByTestId('default-id')

    await userEvent.type(sut, 'teste')

    expect(sut).toHaveValue('teste')
  })
})