const linkToBackend = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/`

/**
 * @description This class provide a set of methods which fetch data from the backend API
 */
class UserService {
	/**
	 * @description Collect the user #userId general information
	 * @param {number} userId The id of the user
	 * @returns A promise containing the infos of the user #userId
	 */
	async getUserInfo(userId) {
		try {
			const response = await fetch(linkToBackend + 'user/' + userId)
			const data = await response.json()
			return data.data
		} catch (error) {
			throw new Error('Unable to fetch data')
		}
	}

	/**
	 *
	 * @description Collect the user #userId activity data
	 * @param {number} userId The id of the user
	 * @returns A promise containing the activity date of the user #userId
	 */
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
	 * @description Collect the user #userId average session data
	 * @param {number} userId The id of the user
	 * @returns  A promise containing the average session data of the user #userId
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

	/**
	 *
	 * @description Collect the user #userId performance data
	 * @param {number} userId The id of the user
	 * @returns A promise containing the performance data of the user #userId
	 */
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

export default UserService
