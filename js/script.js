let orientation;
let unit = "mm";
let format;

let horizontal;
let vertical;
let marginTopInMM = 20;
let marginBottomInMM = 20;
let marginLeftInMM = 20;
let marginRightInMM = 20;

let fontTitleInMM = 8;

let plannerTitle = "tytuł";


function generate() {

	checkPdfData();
	checkTitleData();

	let planner = new jsPDF(orientation, unit, format);

	createTitle(planner);
	drawMargin(planner);

	planner.save("planer.pdf");

}


function checkTitleData () {

	if(document.getElementById("own-title-radio").checked){
		plannerTitle = document.getElementById("own-title").value;
	}

	if(document.getElementById("date").checked){
		plannerTitle = document.getElementById("get-date").value;
	}

	if(document.getElementById("date-from-to").checked){
		plannerTitle = document.getElementById("get-date-from").value;
		plannerTitle += " - " + document.getElementById("get-date-to").value;
	}

	if(document.getElementById("day-of-week").checked){
		plannerTitle = document.getElementById("get-day-of-week").value;
	}

}


function createTitle (planner) {
	planner.setFont("Arial","bold");
	planner.setFontSize(fontTitleInMM);
	planner.text(marginLeftInMM, marginTopInMM, plannerTitle);
}


function drawMargin(planner) {
	planner.line(marginLeftInMM, marginTopInMM + fontTitleInMM, horizontal - marginRightInMM, marginTopInMM + fontTitleInMM);
	planner.line(marginLeftInMM, marginTopInMM + fontTitleInMM, marginLeftInMM, vertical - marginBottomInMM);
	planner.line(horizontal - marginRightInMM, marginTopInMM + fontTitleInMM, horizontal - marginRightInMM, vertical - marginBottomInMM);
	planner.line(marginLeftInMM, vertical - marginBottomInMM, horizontal - marginRightInMM, vertical - marginBottomInMM);
}


function checkPdfData() {
	checkOrientationAndFormat();
	checkPageSize();
}

function checkOrientationAndFormat() {

	if(document.getElementById("landscape").checked){
		orientation = "l";
	}

	if(document.getElementById("portrait").checked){
		orientation = "p";
	}

	if(document.getElementById("a4").checked){
		format = "A4";
	}

	if(document.getElementById("a5").checked){
		format = "A5";
	}
}	

function checkPageSize() {

	if("l" == orientation && "A4" == format) {
		horizontal = 297;
		vertical = 210;
	}

	if("p" == orientation && "A4" == format) {
		horizontal = 210;
		vertical = 297;
	}

	if("l" == orientation && "A5" == format) {
		horizontal = 210;
		vertical = 148;
	}

	if("p" == orientation && "A5" == format) {
		horizontal = 148;
		vertical = 210;
	}

}

function checkTitleData () {

	if(document.getElementById("own-title-radio").checked){
		plannerTitle = document.getElementById("own-title").value;
	}

	if(document.getElementById("date").checked){
		plannerTitle = document.getElementById("get-date").value;
	}

	if(document.getElementById("date-from-to").checked){
		plannerTitle = document.getElementById("get-date-from").value;
		plannerTitle += " - " + document.getElementById("get-date-to").value;
	}

	if(document.getElementById("day-of-week").checked){
		plannerTitle = document.getElementById("get-day-of-week").value;
	}

}