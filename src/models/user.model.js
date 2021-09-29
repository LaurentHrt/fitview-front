export class UserModel {
	id
	userInfos
	todayScore
	keyData

	constructor(data) {
		this.id = data.id
		this.userInfos = data.userInfos
		this.todayScore = data.todayScore
		this.keyData = data.keyData
	}
}
