export const debugLog = (...logMessage: any) => {
	let isDebug = true

	if (isDebug) {
		console.log(...logMessage)
	}
}