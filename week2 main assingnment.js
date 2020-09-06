//js code of calculator
var oldVal;
// var ekam = 0;
var op = 0;
function show(x)
{
	document.getElementById("solution").value+=x;
	return document.getElementById("solution").value;
}
function clr()
{
	document.getElementById("solution").value = "";
	return document.getElementById("solution").value;
}
function add()
{
	var retval = equalFun();
	oldVal = Number(document.getElementById("solution").value);
	clr();
	op = 1;
	document.getElementById("status").value = "+";
	return retval;
}
function sub()
{
	var retval = equalFun();
	oldVal = Number(document.getElementById("solution").value);
	clr();
	op = 2;
	document.getElementById("status").value = "-";
	return retval;
}
function mul()
{
	var retval = equalFun();
	oldVal = Number(document.getElementById("solution").value);
	clr();
	op = 3;
	document.getElementById("status").value = "x";
	return retval;
}
function divide()
{
	var retval = equalFun();
	oldVal = Number(document.getElementById("solution").value);
	clr();
	op = 4;
	document.getElementById("status").value = "/";
	return retval;
}
function percent()
{
	var retval = equalFun();
	oldVal = Number(document.getElementById("solution").value);
	clr();
	op = 5;
	document.getElementById("status").value = "%";
	return retval;
}
function absolute()
{
	equalFun();
	document.getElementById("solution").value = Math.abs(Number(document.getElementById("solution").value));
	op = 0;
	document.getElementById("status").value = "";
	return document.getElementById("solution").value;
}
function sqroot()
{
	equalFun();
	document.getElementById("solution").value = Math.sqrt(Number(document.getElementById("solution").value)).toFixed(3);
	op = 0;
	document.getElementById("status").value = "";
	return document.getElementById("solution").value;
}
function equalFun()
{
	if (op === 1)
	{
		document.getElementById("solution").value = oldVal + Number(document.getElementById("solution").value);
		op = 0;
	}
	if (op === 2)
	{
		document.getElementById("solution").value = oldVal - Number(document.getElementById("solution").value);
		op = 0;
	}
	if (op === 3)
	{
		document.getElementById("solution").value = oldVal * Number(document.getElementById("solution").value);
		op = 0;
	}
	if (op === 4)
	{
		document.getElementById("solution").value = oldVal / Number(document.getElementById("solution").value);
		op = 0;
	}
	if (op === 5)
	{
		document.getElementById("solution").value = (oldVal * Number(document.getElementById("solution").value))/100;
		op = 0;
	}
	document.getElementById("status").value = "";
	return document.getElementById("solution").value;
}
// js code of form
$('#name').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z_][a-zA-Z0-9_ ]*$/;
	var is_name = re.test(input.val());
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('#phoneno').on('input', function() {
	var input=$(this);
	var re = /^[0-9]{10}$/;
	var is_number = re.test(input.val());
	if(is_number){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('#email').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$("#submit button").click(function(event){
	if (document.getElementById("name").value === "") {alert("Name Required!");}
	else if (document.getElementById("phoneno").value === "") {alert("Phone Number Required!");}
	else if (document.getElementById("email").value === "") {alert("Email-ID Required!");}
	var form_data=$("#formValidate").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=$("#"+form_data[input]['name']);
		var valid=element.hasClass("valid");
		if (!valid){ error_free=false;}
	}
	if (!error_free){
		event.preventDefault(); 
	}
});
//js code of palindrome and anagram:
function pallindrome()
{
	var inp = document.getElementById("pal").value;
	if(inp === "")
	{
		alert("Input required");
		return;
	}
	else if(inp === inp.split("").reverse().join(""))
	{
		alert("Yes, it is a pallindrome");
		return true;
	}
	else
	{
		alert("No, it is not a pallindrome");
		return false;
	}
}

function anagram()
{
	var x = document.getElementById("input1").value;
	var y = document.getElementById("input2").value;
	if(x === "" || y === "")
	{
		alert("Input required");
		return;
	}
	else if(x.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('') === y.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join(''))
	{
		alert("Yes, it is an anagram");
		return true;
	}
	else
	{
		alert("No, it is not an anagram");
		return false;
	}
}
// js code of game
