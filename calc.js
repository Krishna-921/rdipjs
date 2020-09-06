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
