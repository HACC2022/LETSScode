//https://dev.to/faddalibrahim/how-to-create-a-custom-file-upload-button-using-html-css-and-javascript-1c03
//https://sebhastian.com/javascript-csv-to-array/

const fileForm = document.getElementById('fileForm');
const csvFile = document.getElementById('csvFile');
const fileChosen = document.getElementById('fileChosen');
let data; //

//csvFile.addEventListener('change', function () {
//	fileChosen.textContext = this.files[0].name;
//})
$(document).ready(function () {
	$("#fileButton").click(function () {
		fileChosen.textContext = this.files[0].name;
	})
});

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
	console.log(data);
})

function csvToArray(str, delimiter=",") {
	const classNames = str.slice(0, str.indexOf("\n")).split(delimiter);
	const rows = str.slice(str.indexOf("\n")+1).split("\n");
	const array = rows.map(function (row) {
		const dataCsv = row.split(delimiter);
		const el = classNames.reduce(function (object, header, index) {
			object[header] = dataCsv[index];
			return object;
		}, {});
		return el;
	});
	return array;
}