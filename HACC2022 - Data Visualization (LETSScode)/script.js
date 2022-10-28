//https://dev.to/faddalibrahim/how-to-create-a-custom-file-upload-button-using-html-css-and-javascript-1c03
//https://sebhastian.com/javascript-csv-to-array/

const fileForm = document.getElementById('fileForm');
const csvFile = document.getElementById('csvFile');
const fileChosen = document.getElementById('fileChosen');
var data; //data[0] = header elements, data[1~] = data
			//ex. data[0][0] = age, data[1][0] = 18
var csvFileAdded = false;
var csvFileSubmitted = false;

csvFile.addEventListener('change', function () {
	fileChosen.innerHTML = csvFile.files.item(0).name;
	csvFileAdded = true;
})

fileForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const input = csvFile.files[0]
	const reader = new FileReader();
	reader.onload = function (event) {
		const text = event.target.result;
		const dataCsv = csvToArray(text);
		data = dataCsv;
	};
	reader.readAsText(input);
	submitted.innerHTML = "Submitted";
	if (typeof data != 'undefined') {
		csvFileSubmitted = true;
	}
	console.log(data);
	console.log(data[0]);
	console.log(data[0][0]);
})

function csvToArray(csv, delimiter=",") {
	var array = [];
	const rows = csv.split("\n");
	for (var i = 0; i < rows.length; i++) {
		var elements = rows[i].split(delimiter);
		array[i] = elements;
	}
	return array;
}

function changePage(appear, hide, ignore=false) {
	if ((csvFileAdded && csvFileSubmitted) || (ignore)) {
		if (ignore) {
			csvFileAdded = false;
			csvFileSubmitted = false;
		}
		document.getElementById(appear).style.display = "block";
		document.getElementById(hide).style.display = "none";
		return false;
	}
}