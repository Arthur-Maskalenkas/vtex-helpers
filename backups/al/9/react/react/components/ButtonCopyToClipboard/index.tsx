import React from 'react'
import useCopyToClipboard from "./utils";

import {ToastConsumer, ToastProvider} from 'vtex.styleguide'


export const ButtonCopyToClipboardPage = () => {
	const [, copy] = useCopyToClipboard()

	const handleCopy = async (showToast: any, wordToCopy: string) => {
		const wordExistInClipboard = await copy(wordToCopy)

		try {
			if (!wordExistInClipboard) {
				showToast({
					message: 'Erro ao copiar. Tente novamente mais tarde.',
				})

				return
			}

			showToast({
				message: `palavra ${wordToCopy} copiada com sucesso.`,
			})

		} catch (e) {
			showToast({
				message: 'Erro ao copiar. Tente novamente mais tarde.',
			})
		}
	}

	const randomWord = 'uma palavra aleatoria para copiar'

	return (
		<div>
			<ToastProvider positioning="window">
				<ToastConsumer>
					{({showToast}: { showToast: any }) => (
						<button
							onClick={() => handleCopy(showToast, randomWord)}>{randomWord}</button>
					)}
				</ToastConsumer>
			</ToastProvider>
		</div>

	)
}