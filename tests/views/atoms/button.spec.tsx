import {Button} from "../../../src/views/atoms/button";
import {render,screen,userEvent } from '../../utils/test-utils'

describe('button', () => {
    it('should render the button', async () => {
        const spyClick = vi.fn()

        render(<Button onClick={spyClick}>teste</Button>)
        const button = screen.getByText('teste')

        await userEvent.click(button)

        expect(button).toBeInTheDocument()
        expect(spyClick).toHaveBeenCalled()
    })
})