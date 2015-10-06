addLoadListener(searchBox)

function searchBox() {

// To add a new field, simply copy and paste a new line below, modifying the parameters
// First parameter is the ID of the form field
// Second parameter is the text to appear in the field by default

mySelectedField("prod_search", "search products");
}

function mySelectedField(selectedField, fieldText) {

	var myClickedField = document.getElementById(selectedField);
	if (myClickedField == null) return;
	var myClickedFieldValue = myClickedField.value;
	if (myClickedFieldValue == null) return;
	
	myClickedField.onfocus = function() {
		if (this.value == fieldText)
			myClickedField.value = "";
	}
	
	myClickedField.onblur = function() {
		if (this.value == '')
			myClickedField.value = fieldText;
	}

}