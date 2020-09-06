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