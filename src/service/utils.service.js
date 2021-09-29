/**
 * @description This class provides a set of utils methods like display an error message...
 */
class UtilsService {
	#errorMessage =
		"Nous n'avons pas pu nous connecter au serveur. Merci de rééssayer ultérieurement"

	/**
	 * @description display an error message for the user
	 */
	displayErrorMessage() {
		window.alert(this.#errorMessage)
	}
}

export default UtilsService
