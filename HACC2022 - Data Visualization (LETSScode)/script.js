//import * as Utils from './Utils.js';
//import * as ChartJS from './ChartJS.js';

const fileForm = document.getElementById('fileForm');
const csvFile = document.getElementById('csvFile');
const fileChosen = document.getElementById('fileChosen');
const dataTypeSelect = document.getElementById('dataTypeSelect');
const dataGroupSelect = document.getElementById('dataGroupSelect');
var data; //data[0] = header elements, data[1~] = data
			//ex. data[0][0] = age, data[1][0] = 18, data[2][0] = 15 ...
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
	formSelectionBar();
	//test
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
			fileChosen.innerHTML = "No file added";
			submitted.innerHTML = "Not submitted";
		}
		document.getElementById(appear).style.display = "block";
		document.getElementById(hide).style.display = "none";
		return false;
	}
}

function formSelectionBar() {
	if (csvFileAdded && csvFileSubmitted) {
		for (var i = 0; i < data[0].length; i++) {
			addOption(dataTypeSelect, data[0][i], i);
			addOption(dataGroupSelect, data[0][i], i);
		}
	}
}

function addOption(bar, dataName, dataVal) {
	var option = document.createElement('option');
	option.text = dataName;
	option.value = dataVal;
	bar.add(option, 0);
}

function generateChart() {

}