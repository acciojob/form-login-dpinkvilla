function getFormvalue() {
    //Write your code here
    let form_data=document.getElementById("form1");

	// function alerting() {
	// 	f_name.value=input[0].value;
	// 	l_name.value=input[1].value;
	// 	return ;
	// }
     let f_name=form_data.getElementByTagName("input")[0].value;
	let l_name=form_data.getElementByTagName("input")[1].value;

	alert(f_name + l_name);
};
