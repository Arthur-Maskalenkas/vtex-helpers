import { useSearchProductContext } from "../context";
import { Button } from "../../commons/button/button.tsx";



const ButtonBack = () => {
		const { dispatch } = useSearchProductContext()
		const handleClick = () => {
				dispatch({ type: 'ACTION_HANDLE_BACK_MODULE' })
		}

		return (
				<Button.Container onClick={handleClick}>
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