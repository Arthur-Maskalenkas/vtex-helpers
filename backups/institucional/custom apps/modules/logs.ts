import { CMSHelper } from "./cms-helper"

export const logIfIsDevWorkspace = (message:string,varDebug: any) => {
	if (!CMSHelper.thisIsDevWorkspace()) return
	console.log(message,varDebug)
}