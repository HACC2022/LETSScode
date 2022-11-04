import { generateBar, generateLine, generatePie, generateRadar, generatePolarArea } from "./ChartJS.js";

const fileForm = document.getElementById('fileForm');
const csvFile = document.getElementById('csvFile');
const fileChosen = document.getElementById('fileChosen');
const dataSelect = document.getElementById('dataSelect');
const chartSelect =  document.getElementById('chartSelect');
const labelSelect = document.getElementById('labelSelect');
const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');
var data; //data[0] = header elements, data[1~] = data
			//ex. data[0][0] = age, data[1][0] = 18, data[2][0] = 15 ...
var myChart;
var csvFileAdded = false;
var csvFileSubmitted = false;
var datas = [];
var labels = [];

csvFile.addEventListener('change', function () {
	fileChosen.innerHTML = csvFile.files.item(0).name;
	submitted.innerHTML = "Not submitted";
	csvFileAdded = true;
	csvFileSubmitted = false;
	for (var i = dataSelect.length-1; i > 0; i--) {
		dataSelect.remove(i);
	}
	for (var i = labelSelect.length-1; i > 1; i--) {
		labelSelect.remove(i);
	}
	datas = [];
	labels = [];
	data = undefined;
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
		} else {
			formSelectionBar();
		}
		document.getElementById(appear).style.display = "block";
		document.getElementById(hide).style.display = "none";
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

window.toNum = function(str) {
	if (typeof str != 'string') {
		return str;
	}
	if (!isNaN(str) && !isNaN(parseFloat(str))) {
		console.log('parsed');
		str = parseInt(str);
		str = Number(str);
		return str;
	}
	return str;
}

window.generateChart = function() {
	var selectedData = dataSelect.options[dataSelect.selectedIndex].value;
	var selectedChart = chartSelect.options[chartSelect.selectedIndex].value;
	var selectedLabel = labelSelect.options[labelSelect.selectedIndex].value;
	var selectedDataName = dataSelect.options[dataSelect.selectedIndex].text;

	if ((selectedData == "null")||(selectedChart == "null")||(selectedLabel == 
	"null")) {
		alert("Please select the data type, chart type, and label for your desired chart to be created.");
		return;
	}

	var newIdx = 0;
	if (selectedLabel != "void") {
		for (var i = 0; i < data.length-1; i++) {
			data[i+1][selectedData] = toNum(data[i+1][selectedData]);
			if (typeof data[i+1][selectedData] != 'number') {
				continue;
			}
			labels[newIdx] = data[i+1][selectedLabel];
			datas[newIdx] = data[i+1][selectedData];
			newIdx++;
		}
	} else {
		for (var i = 0; i < data.length-1; i++) {
			data[i+1][selectedData] = toNum(data[i+1][selectedData]);
			if (typeof data[i+1][selectedData] != 'number') {
				continue;
			}
			labels[newIdx] = "";
			datas[newIdx] = data[i+1][selectedData];
			newIdx++;
		}
	}
	if (datas.length == 0) {
		alert("Please select a data type with numbers, not words.");
		return;
	}

	document.getElementById('newChartButton').style.display = "block";
	document.getElementById('saveChartButton').style.display = "block";
	canvas.style.display = "block";
	switch(selectedChart) {
		case "0":
			myChart = generateBar(labels, datas, selectedDataName);
			break;
		case "1":
			myChart = generateLine(labels, datas, selectedDataName);
			break;
		case "2":
			myChart = generatePie(labels, datas, selectedDataName);
			break;
		case "3":
			myChart = generateRadar(labels, datas, selectedDataName);
			break;
		case "4":
			myChart = generatePolarArea(labels, datas, selectedDataName);
			break;
	}
}

window.resetPage = function() {
	document.getElementById('newChartButton').style.display = "none";
	document.getElementById('saveChartButton').style.display = "none";
	document.getElementById('saveChartLink').style.display = "none";
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	myChart.destroy();
	canvas.style.display = "none";
}

window.saveChart = function() {
	document.getElementById('saveChartLink').href = canvas.toDataURL('png');
	document.getElementById('saveChartLink').style.display = "block";
}

window.returnHome = function() {
	resetPage();
	for (var i = dataSelect.length-1; i > 0; i--) {
		dataSelect.remove(i);
	}
	for (var i = labelSelect.length-1; i > 1; i--) {
		labelSelect.remove(i);
	}
	datas = [];
	labels = [];
	data = undefined;
	csvFile.value = null;
}
