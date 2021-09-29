import { UserModel } from '../models/user.model'
import { SessionModel } from '../models/session.model'
import { PerformanceModel } from '../models/performance.model'
import { ActivityModel } from '../models/activity.model'
import UtilsService from './utils.service'

const linkToBackend = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/`

/**
 * @description This class provides a set of methods which fetch data from the backend API
 */
class UserService {
	#utilsService

	constructor() {
		this.#utilsService = new UtilsService()
	}

	/**
	 * @description Collect the user #userId general information
	 * @param {number} userId The id of the user
	 * @returns A promise containing the UserModel object of the user #userId
	 */
	async getUserInfo(userId) {
		try {
			const response = await fetch(linkToBackend + 'user/' + userId)
			const data = await response.json()
			return new UserModel(data.data)
		} catch (error) {
			this.#utilsService.displayErrorMessage()
		}
	}

	/**
	 * @description Collect the user #userId activity data
	 * @param {number} userId The id of the user
	 * @returns A promise containing the ActivityModel object of the user #userId
	 */
	async getUserActivity(userId) {
		try {
			const response = await fetch(
				linkToBackend + 'user/' + userId + '/activity'
			)
			const data = await response.json()
			return new ActivityModel(data.data)
		} catch (error) {
			this.#utilsService.displayErrorMessage()
		}
	}

	/**
	 * @description Collect the user #userId average session data
	 * @param {number} userId The id of the user
	 * @returns  A promise containing the SessionModel object of the user #userId
	 */
	async getUserAverageSession(userId) {
		try {
			const response = await fetch(
				linkToBackend + 'user/' + userId + '/average-sessions'
			)
			const data = await response.json()
			return new SessionModel(data.data)
		} catch (error) {
			this.#utilsService.displayErrorMessage()
		}
	}

	/**
	 * @description Collect the user #userId performance data
	 * @param {number} userId The id of the user
	 * @returns A promise containing the PerformanceModel object of the user #userId
	 */
	async getUserPerformance(userId) {
		try {
			const response = await fetch(
				linkToBackend + 'user/' + userId + '/performance'
			)
			const data = await response.json()
			return new PerformanceModel(data.data)
		} catch (error) {
			this.#utilsService.displayErrorMessage()
		}
	}
}

export default UserService
