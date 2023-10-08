import { ExternalModelRuntime } from "../../external/models/runtime.ts";
import { NotificationContext } from "../../notificationContext.ts";



export class InternalModelPage extends NotificationContext {
		public readonly routeId: string | null
		public readonly blockId: string | null
		public readonly url: string | null
		public readonly name: string | null

		constructor(args: ExternalModelRuntime.Pages | null) {
				super()

				const { blockId, path, routeId } = args ?? {}

				this.routeId = routeId ?? null
				this.blockId = blockId ?? null
				this.url = path ?? null
				this.name = path ?? null
		}

		public isValid() {
				return this.hasNotifications()
		}
}