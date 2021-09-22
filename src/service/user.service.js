import { Activity } from '../models/Activity'
const linkToBackend = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/`

export default class UserService {
	async getUserInfo(userId) {
		const response = await fetch(linkToBackend + 'user/' + userId)
		const data = await response.json()
		return data.data
	}

	async getUserActivity(userId) {
		const response = await fetch(
			linkToBackend + 'user/' + userId + '/activity'
		)
		const data = await response.json()
		return data.data
	}

	/**
	 * @description
	 * @param {*} userId
	 * @returns
	 */
	async getUserAverageSession(userId) {
		const response = await fetch(
			linkToBackend + 'user/' + userId + '/average-sessions'
		)
		const data = await response.json()
		return data.data
	}

	async getUserPerformance(userId) {
		const response = await fetch(
			linkToBackend + 'user/' + userId + '/performance'
		)
		const data = await response.json()
		return data.data
	}
}
