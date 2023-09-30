export const useForm = (event: React.FormEvent<HTMLFormElement>) => {
		const data = new FormData(event.currentTarget)
		const form = Object.fromEntries(data.entries())

		return form
}