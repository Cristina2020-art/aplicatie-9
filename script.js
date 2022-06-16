
// get inputs and radio/checkbox buttons
var inputs = document.querySelectorAll("input[type='text'], input[type='number'], input[type='tel']"),
    buttons = document.querySelectorAll("input[type='radio'], input[type='checkbox']");

// main title is updated if returning user (if localStorage set)
var mainTitle = document.getElementById("mainTitle");

// change h1 title if returning user otherwise set to default
var storedName = localStorage.firstName
if(storedName)
	mainTitle.innerHTML = "Welcome back " + storedName + ",<br/>continue with your quote";
else 
	mainTitle.innerHTML = "Get a quote"


// get and set localStorage for radio/checkbox buttons
Array.prototype.forEach.call(buttons, function (el, index, array) {
    // get element Id to use as localStorage property name
	var dataName = el.getAttribute("name"),
	// set dataStored var
		dataStored = localStorage.getItem(dataName);
	// if dataStored and dataStored = the input value
	// set input to checked
	if(dataStored && el.value == dataStored){
		el.checked = true
	}
		
	// on blur save data input
	el.addEventListener('click', function (event) {
		localStorage.setItem(dataName, event.target.value);
	});
});

// get and set localStorage for text/number/tel inputs
Array.prototype.forEach.call(inputs, function (el, index, array) {
	// get element Id to use as localStorage property name
	var dataName = el.getAttribute("id"),
	// set dataStored var
		dataStored = localStorage.getItem(dataName);
	// if dataStored set input value to data
	if(dataStored)
		el.value = localStorage.getItem(dataName)
	
	// on blur save data input
	el.addEventListener('blur', function (event) {
		localStorage.setItem(dataName, event.target.value);
		console.log(localStorage.getItem(dataName))
	});
});


// for simple debugging
console.log(localStorage)
function logStorage(){
	console.log(localStorage)
}
function clearStorage(){
	localStorage.clear()
	logStorage()
}