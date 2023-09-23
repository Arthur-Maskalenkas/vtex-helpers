import { faker } from '@faker-js/faker'
import { render, userEvent } from '../../utils/test-utils.tsx'
import { Button } from '../../../src/views/atoms/button'
import { type IconProps } from '../../../src/views/atoms/icon'
import { expect } from 'vitest'

describe('button', () => {
  it('should render the button', async () => {
    const spyClick = vi.fn()

    const argText = faker.word.sample(5)

    const { container, getByText } = render(
            <Button.Container onClick={spyClick}>
                {argText}
            </Button.Container>
    )

    const sut = container.getElementsByClassName('container-app-button')[0]

    await userEvent.click(sut)

    expect(getByText(argText)).toBeInTheDocument()
    expect(sut).toBeInTheDocument()
    expect(spyClick).toHaveBeenCalled()

    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="container-app-button  undefined atom"
      >
        ${argText}
      </button>
    `)
  })

  it('should render the button with icon if "icon" props is passed', async () => {
    const argText = faker.word.sample(5)

    const iconProps: IconProps = {
      icon: 'arrow-top',
      height: 30,
      width: 30
    }

    const sut = render(
            <Button.Container icon={iconProps}>
                {argText}
            </Button.Container>
    )

    const text = sut.getByText(argText)
    const icon = sut.getByLabelText(iconProps.icon)
    const svg = icon.getElementsByTagName('svg')[0]
    const childrens = sut?.container?.firstChild?.childNodes

    const expectedHeight = iconProps.height?.toString()
    const expectedWidth = iconProps.width?.toString()

    expect(text).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(svg).toHaveAttribute('height', expectedHeight)
    expect(svg).toHaveAttribute('width', expectedWidth)
    expect(childrens).toHaveLength(2)
  })
  //
  // it('should render the button with the correct text', () => {
  //   const { getByText } = render(<Button>teste</Button>)
  //   const button = getByText('teste')
  //
  //   expect(button).toBeInTheDocument()
  // })
  //
  // it('should add a class "with icon" if button has more than one child', () => {
  //   const { container } = render(
  //           <Button>
  //               <span>filho 1</span>
  //               <span>filho 2</span>
  //           </Button>
  //   )
  //
  //   const button = container.getElementsByClassName('with-icon')[0]
  //
  //   expect(button).toBeInTheDocument()
  //   expect(button).toHaveClass('container-app-button')
  // })
})