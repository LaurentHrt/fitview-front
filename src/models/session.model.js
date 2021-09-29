export class SessionModel {
	userId
	sessions
	#days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

	constructor(data) {
		this.userId = data.userId
		this.sessions = data.sessions.map((entry) => ({
			day: this.#days[entry.day],
			sessionLength: entry.sessionLength,
		}))
	}
}
