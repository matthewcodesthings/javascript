/**
 * [Valid inputs for the text field]
 * @type {Array}
 */
var validNames = ["Matthew", "Matt"];

/**
 * [Iterates through the validNames array and checks if the
 * text field has a valid input]
 * @return {[alert]} [Tells user they are logged in]
 */
function checkName() {
	var textField = document.getElementById("fieldName");
	for (var i = 0; i < validNames.length; i++) {
		if (textField.value == validNames[i]) {
			return alert("You are " + validNames[i]);
		}
	}
}