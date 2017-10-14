$(document).ready(function(){

	var loses = 0;

	var wins = 0;

	var total = 0;

	var targetNumber = Math.floor(Math.random() * 25+25);

	$("#targetNumber").text(targetNumber);

	var choice1 = Math.floor(Math.random() * 9+1);
	var choice2 = Math.floor(Math.random() * 9+1);
	var choice3 = Math.floor(Math.random() * 9+1);
	var choice4 = Math.floor(Math.random() * 9+1);

	function newgame(){

		var targetNumber = Math.floor(Math.random() * 25+25);

		$("#targetNumber").text(targetNumber);

		var choice1 = Math.floor(Math.random() * 9+1);
		var choice2 = Math.floor(Math.random() * 9+1);
		var choice3 = Math.floor(Math.random() * 9+1);
		var choice4 = Math.floor(Math.random() * 9+1);

		 total = 0;

		$("#score").text(total);
	};

	$("#red").on("click", function(){

		total = total + choice1;

		$("#score").text(total);

		if (total === targetNumber) {
			alert("You Win!");
			wins++;
			$("#win").text(wins);
			newgame();
		}

		else if (total >= targetNumber) {
			alert("retry!");
			loses++;
			$("loss").text(loses);
			newgame();
		}
	});

	$("#blue").on("click", function(){

		total = total + choice2;

		$("#score").text(total);

		if (total === targetNumber) {
			alert("You Win!");
			wins++;
			$("#win").text(wins);
			newgame();
		}

		else if (total >= targetNumber) {
			alert("retry!");
			loses++;
			$("#loss").text(loses);
			newgame();
		};
	});

	$("#green").on("click", function(){

		total = total + choice3;

		$("#score").text(total);

		if (total === targetNumber) {
			alert("You Win!");
			wins++;
			$("#win").text(wins);
			newgame();
		}

		else if (total >= targetNumber) {
			alert("retry!");
			loses++;
			$("#loss").text(loses);
			newgame();
		};
	});

	$("#yellow").on("click", function(){

		total = total + choice4;
		console.log(total);

		$("#score").text(total);

		if (total === targetNumber) {
			alert("You Win!");
			wins++;
			$("#win").text(wins);
			newgame();
		}

		else if (total >= targetNumber) {
			alert("retry!");
			loses++;
			$("#loss").text(loses);
			newgame();
		};
	});
});