import { render } from '../../utils/test-utils'
import { expect } from 'vitest'
import { Icon } from '../../../src/views/atoms/icon'

describe('icon', () => {
  it('should add classname from icon choosed', () => {
    const { container } = render(
          <Icon icon={'arrow-top'}/>
    )

    const sut = container.getElementsByClassName('container-app-icon')[0]

    expect(sut).toBeInTheDocument()
    expect(sut).toHaveClass('arrow-top')
    expect(sut).not.toHaveClass('arrow-down')
  })

  it('should render the icon with width and height passed', () => {
    const { container } = render(
            <Icon
                width={30}
                height={30}
                icon={'arrow-top'}/>
    )

    const sut = container.getElementsByTagName('svg')[0]

    expect(sut).toBeInTheDocument()
    expect(sut).toHaveAttribute('width', '30')
    expect(sut).toHaveAttribute('height', '30')
  })
})