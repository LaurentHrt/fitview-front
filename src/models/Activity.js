export class Activity {
	calories
	#day
	kilogram

	constructor(data) {
		this.calories = data.calories
		this.day = data.day
		this.kilogram = data.kilogram
	}

	get dayAsDate() {
		return new Date(this.day)
	}
}
