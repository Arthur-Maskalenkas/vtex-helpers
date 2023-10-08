type NotificationType = 'warning' | 'error'

export class NotificationContext {
		private readonly notications: Notification[]

		constructor() {
				this.notications = []
		}

		hasNotifications() {
				return this.notications.length > 0
		}

		addNotification(message: string, type: NotificationType = 'warning') {
				const notication = new Notification(message, type)

				this.notications.push(notication)
		}

}

export class Notification {
		public readonly message: string
		public readonly type: NotificationType

		constructor(message: string, type: NotificationType) {
				this.message = message
				this.type = type
		}

}