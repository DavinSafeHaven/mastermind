$(document).ready(function(){
	var currentColor = "white";
	var currentBoardCells = ["board40", "board41", "board42", "board43"];
	var currentPegCells = ["peg40", "peg41", "peg42", "peg43"];
	var currentRow = 11;
	var possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

	var cell1Color, cell2Color, cell3Color, cell4Color;

	var colors = {
		"rgb(0, 128, 0)": "green",
		"rgb(255, 255, 0)": "yellow",
		"rgb(255, 0, 0)": "red",
		"rgb(0, 128, 0)": "blue",
		"rgb(255, 165, 0)": "orange",
		"rgb(255, 192, 203)": "pink",
	}

	var code = [
		possibleColors[Math.floor(Math.random()*6)],
		possibleColors[Math.floor(Math.random()*6)],
		possibleColors[Math.floor(Math.random()*6)],
		possibleColors[Math.floor(Math.random()*6)]
	];
	
	for(let i=0; i<44; i++){
		let cell = "<div class=\"boardCell\" id=board"+i+"></div>";
		$(".board").append(cell);
	}

	for(let i=0; i<44; i++){
		let cell = "<div class=\"pegCell\" id=peg"+i+"></div>";
		$(".pegs").append(cell);
	}

	$(".board").css("grid-template-rows", "repeat(11, 73.18px)");
	$(".board").css("grid-template-columns", "repeat(4, 73.18px)");
	$(".boardCell").css("border", "1px solid black");
	$(".boardCell").css("border-radius", "50%");
	$(".boardCell").css("background-color", "white");

	$(".pegs").css("grid-template-rows", "repeat(22, 36.59px)");
	$(".pegs").css("grid-template-columns", "repeat(2, 36.59px)");
	$(".pegCell").css("border", "1px solid black");
	$(".pegCell").css("border-radius", "50%");
	$(".pegCell").css("background-color", "gray");

	$(".color").each(function(){
		let color = $(this).attr("id");
		$(this).css("background-color", color);
	});

	$(".color").click(function(){
		let color = $(this).attr('id");
		currentColor = color;
		$(".currentColor".css("background-color", color);
	});

});