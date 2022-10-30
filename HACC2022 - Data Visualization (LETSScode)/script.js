import { ctx, generateTest, generateBar, generateLine, generatePie, generateRadar, generateScatter } from "./ChartJS.js";

const fileForm = document.getElementById('fileForm');
const csvFile = document.getElementById('csvFile');
const fileChosen = document.getElementById('fileChosen');
const dataSelect = document.getElementById('dataSelect');
const chartSelect =  document.getElementById('chartSelect');
const labelSelect = document.getElementById('labelSelect');
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
	console.log(data.length);
	console.log(data[0]);
	console.log(data[0].length);
	console.log(data[0][0]);
})

window.csvToArray = function(csv, delimiter=",") {
	var array = [];
	const rows = csv.split("\n");
	for (var i = 0; i < rows.length; i++) {
		var elements = rows[i].split(delimiter);
		array[i] = elements;
	}
	return array;
}

window.changePage = function(appear, hide, ignore=false) {
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

window.formSelectionBar = function() {
	if (csvFileAdded && csvFileSubmitted) {
		for (var i = 0; i < data[0].length; i++) {
			addOption(dataSelect, data[0][i], i);
			addOption(labelSelect, data[0][i], i);
		}
	}
}

window.addOption = function(bar, dataName, dataVal) {
	var option = document.createElement('option');
	option.text = dataName;
	option.value = dataVal;
	bar.add(option);
}

window.generateChart = function() {
	var selectedData = dataSelect.options[dataSelect.selectedIndex].value;
	var selectedChart = chartSelect.options[chartSelect.selectedIndex].value;
	var selectedLabel = labelSelect.options[labelSelect.selectedIndex].value;

	if ((selectedData == "null")||(selectedChart == "null")||(selectedLabel == 
	"null")) {
		alert("Please select the data type, chart type, and label for your desired chart to be created.");
		return;
	}

	var labels = [];
	if (selectedLabel != "void") {
		for (var i = 0; i < data.length-1; i++) {
			labels[i] = data[i+1][selectedLabel];
		}
	}
	var datas = [];
	for (var i = 0; i < data.length-1; i++) {
		datas[i] = data[i+1][selectedData];
	}

	switch(selectedChart) {
		case "0":
			generateBar(labels, datas);
			break;
		case "1":
			generateLine(labels, datas);
			break;
		case "2":
			generatePie(labels, datas);
			break;
		case "3":
			generateRadar(labels, datas);
			break;
		case "4":
			generateScatter(labels, datas);
			break;
	}
}