function getFormvalue() {
    //Write your code here
    let form_data=document.getElementById("form1");

	// function alerting() {
	// 	f_name.value=input[0].value;
	// 	l_name.value=input[1].value;
	// 	return ;
	// }
     let f_name=form_data.getElementsByTagName("input")[0].value;
	let l_name=form_data.getElementsByTagName("input")[1].value;

	alert(f_name +" " + l_name);
};
// function getFormValue() {
//     // Get the form element
//     var form = document.getElementById("form1");

//     // Get the values of the first and last name fields
//     var firstName = form.elements["fname"].value;
//     var lastName = form.elements["lname"].value;

//     // Alert the first and last name
//     alert(firstName + lastName);
// }
// function getFormvalue() {
//     // Get the form element
//     let form = document.getElementById("form1");

//     // Get the values of the first and last name fields
//     let firstNameInput = form.getElementsByTagName("input")[0].value;
//     let lastNameInput = form.getElementsByTagName("input")[1].value;

//     // Alert the first and last name
//     alert(firstNameInput + lastNameInput);

//     // Prevent the form from submitting and refreshing the page
//     // return false;
// }


