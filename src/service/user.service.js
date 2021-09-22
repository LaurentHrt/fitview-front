const linkToBackend = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/`

export default class UserService {
	async getUserInfo(userId) {
		try {
			const response = await fetch(linkToBackend + 'user/' + userId)
			const data = await response.json()
			return data.data
		} catch (error) {
			throw new Error('Unable to fetch data')
		}
	}

	async getUserActivity(userId) {
		try {
			const response = await fetch(
				linkToBackend + 'user/' + userId + '/activity'
			)
			const data = await response.json()
			return data.data
		} catch (error) {
			throw new Error('Unable to fetch data')
		}
	}

	/**
	 * @description
	 * @param {*} userId
	 * @returns
	 */
	async getUserAverageSession(userId) {
		try {
			const response = await fetch(
				linkToBackend + 'user/' + userId + '/average-sessions'
			)
			const data = await response.json()
			return data.data
		} catch (error) {
			throw new Error('Unable to fetch data')
		}
	}

	async getUserPerformance(userId) {
		try {
			const response = await fetch(
				linkToBackend + 'user/' + userId + '/performance'
			)
			const data = await response.json()
			return data.data
		} catch (error) {
			throw new Error('Unable to fetch data')
		}
	}
}
