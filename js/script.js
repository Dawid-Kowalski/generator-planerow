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

let gridRows;
let gridColumns = []; 

function generate() {

	checkPdfData();
	checkTitleData();

	let planner = new jsPDF(orientation, unit, format);

	createTitle(planner);
	drawMargin(planner);

	drawGridLandscape(planner);

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

function drawGridLandscape (planner) {
	rows = parseInt(document.getElementById("grid-rows-landscape").value);

	for(i=0;i<rows;i++) {
		let columns = parseInt(document.getElementById("grid-col-landscape-" + i).value);
		gridColumns.push(columns);
	}

	let gridLandscape1rowHigh = document.getElementById("grid-landscape-1-row-high").value;
	let gridLandscape2rowHigh = document.getElementById("grid-landscape-2-row-high").value;
	let gridLandscape3rowHigh = document.getElementById("grid-landscape-3-row-high").value;

	let plannerHigh = vertical - marginTopInMM - marginBottomInMM - fontTitleInMM;
	let plannerWidth = horizontal - marginLeftInMM - marginRightInMM;


	let firstRowHigh = plannerHigh * (gridLandscape1rowHigh/100);
	let secondRowHigh = plannerHigh * (gridLandscape2rowHigh/100);

	if(2==rows){

		planner.line(marginLeftInMM, marginTopInMM + fontTitleInMM + firstRowHigh, horizontal - marginRightInMM, marginTopInMM + fontTitleInMM + firstRowHigh);

		let gridLandscapeRowCol1Width = plannerWidth / gridColumns[0];

		for(i = 0; i< gridColumns[0]; i++) {
			planner.line(marginLeftInMM + i*gridLandscapeRowCol1Width, marginTopInMM + fontTitleInMM, marginLeftInMM + i*gridLandscapeRowCol1Width, marginTopInMM + fontTitleInMM + firstRowHigh);
		}

		let gridLandscapeRowCol2Width = plannerWidth / gridColumns[1];

		for(i = 0; i< gridColumns[1]; i++) {
			planner.line(marginLeftInMM + i*gridLandscapeRowCol2Width, marginTopInMM + fontTitleInMM + firstRowHigh, marginLeftInMM + i*gridLandscapeRowCol2Width, vertical - marginBottomInMM);
		}
	}

	if(3==rows){

		planner.line(marginLeftInMM, marginTopInMM + fontTitleInMM + firstRowHigh, horizontal - marginRightInMM, marginTopInMM + fontTitleInMM + firstRowHigh);
		planner.line(marginLeftInMM, marginTopInMM + fontTitleInMM + firstRowHigh + secondRowHigh, horizontal - marginRightInMM, marginTopInMM + fontTitleInMM + firstRowHigh + secondRowHigh);


		let gridLandscapeRowCol1Width = plannerWidth / gridColumns[0];

		for(i = 0; i< gridColumns[0]; i++) {
			planner.line(marginLeftInMM + i*gridLandscapeRowCol1Width, marginTopInMM + fontTitleInMM, marginLeftInMM + i*gridLandscapeRowCol1Width, marginTopInMM + fontTitleInMM + firstRowHigh);
		}

		let gridLandscapeRowCol2Width = plannerWidth / gridColumns[1];

		for(i = 0; i< gridColumns[1]; i++) {
			planner.line(marginLeftInMM + i*gridLandscapeRowCol2Width, marginTopInMM + fontTitleInMM + firstRowHigh, marginLeftInMM + i*gridLandscapeRowCol2Width, marginTopInMM + fontTitleInMM + firstRowHigh + secondRowHigh);
		}

		let gridLandscapeRowCol3Width = plannerWidth / gridColumns[2];

		for(i = 0; i< gridColumns[2]; i++) {
			planner.line(marginLeftInMM + i*gridLandscapeRowCol3Width, marginTopInMM + fontTitleInMM + firstRowHigh + secondRowHigh, marginLeftInMM + i*gridLandscapeRowCol3Width, vertical - marginBottomInMM);
		}	

	}

	if(1==rows){

		let gridLandscapeRowColWidth = plannerWidth / gridColumns[0];

		for(i = 0; i< gridColumns[0]; i++) {
			planner.line(marginLeftInMM + i*gridLandscapeRowColWidth, marginTopInMM + fontTitleInMM, marginLeftInMM + i*gridLandscapeRowColWidth, vertical - marginBottomInMM);
		}
	}	
}