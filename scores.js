"use strict";
$(document).ready(function() {
    var scoreValues = []; //array for scores
    var nameScores = []; //array for the lastname, firstname : score strings

    var displayScores = function () {
        var totalScore = 0;
		    var numberOfScores = scoreValues.length; //length of the scoreValues array is the number of scores
		    var averageScore = 0;

      //add each score in the array together
      for (var i = 0; i < numberOfScores; i++) {
        totalScore += scoreValues[i];
      }
      //get the average by dividing the total by the number of scores in the array
      averageScore = totalScore / numberOfScores;

      //display the nameScores array, each on a new line
        $("#scores").val( nameScores.join("\n") );
      //fill the average_score text box
        $("#average_score").val(averageScore);
    };

    $("#add_button").click(function() {
      //on add_button click, get the values of each text box
        var score = parseFloat($("#score").val());
        var first = $("#first_name").val();
        var last = $("#last_name").val();

        var nsString = last + ", " + first + ": " + score;
        scoreValues.push (score);
        nameScores.push (nsString);
        // display the scores
        displayScores();
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        //refocus on the first_name text box
        $("#first_name").focus();
    }); // end click()

    $("#clear_button").click(function() {
      //clear the arrays
      scoreValues = [];
      nameScores = [];
      //refresh the display
      displayScores();

        // get the add form ready for next entry, refocus on first_name
      $("#first_name").val( "" );
      $("#last_name").val( "" );
      $("#score").val( "" );
      $("#average_score").val("");
      $("#first_name").focus();
    }); // end click()

    $("#sort_button").click(function() {
      //nameScores array begins with last name, so this sorts it by the first letter of the last name
      nameScores.sort();
      //refresh the display
      displayScores();
    }); // end click()

    $("#first_name").focus();
}); // end ready()
