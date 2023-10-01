import { useSearchProductContext } from "../context";
import { Button } from "../../commons/button/button.tsx";



const ButtonBack = () => {
		const { dispatch, states } = useSearchProductContext()
		const handleClick = () => {
				console.log('#!! 🔥 header 16:31', states)
				dispatch({ type: 'ACTION_HANDLE_BACK_MODULE' })
		}

		const isDisabled = states.currentModule === 'form'

		return (
				<Button.Container onClick={handleClick} disabled={isDisabled}>
						<Button.Text>Voltar</Button.Text>
				</Button.Container>
		)
}

const Title = () => {
		const { states } = useSearchProductContext()

		return (
				<h1>{states?.currentModule}</h1>
		)
}


export const Header = () => {
		return (
				<header>
						<ButtonBack/>
						<Title/>
				</header>
		)
}