// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require underscore
//= require_tree .



var startButton = $('<button id= "startButton">Click Me</button>');
var firstClue = $('<p id ="firstClue">First Clue</p>');
var clueBox = $('.clue');
var clueList = ["what do cows make?", "what makes milk?", "some other clue", "yet another clue", "again some thing that resembles a clue"];
var correctAnswers = ["cows", "milk", "cheese", "bread"];
var wrongAnswerMessages = ["I'm sorry we were looking for the CORRECT answer", "You did great! except... you didn't..."];
var rightAnswerMessages = ["I knew I was with a winner!"];
var herAnswer = $('#answer').val();
var submitButton = $('.button');
var clueBox = $('.clue');
var newClue = $("<p id='clueText'>" + clueList[0] + "</p>");
var firstClue = $('#firstClue');
var wrapper = $('.wrapper');
var startButton = $('<button id= "startButton">Click Me</button>');
  
$(document).ready(function(){
  
  $('.game').hide();
  startButton.fadeIn(500);
  startButton.appendTo('.wrapper');

  startButton.click(function(){
    startButton.fadeOut(800);
    $('.game').fadeIn(1000);
    createGameBoard();
    firstClue.appendTo(clueBox);
  });

});


function game(clue){
  $('#answer').val('');
  console.log(clueList.pop());
  clueBox.empty();
  // clue.fadeIn(1000);
  clue.appendTo(clueBox);
  checkAnswer(herAnswer);
};


function createGameBoard(){
  var form = $('<form action="/" method="post" id = "createGameBoard"></form>');
  form.append('<input type="text" class="gameInput" value="answer" id="answer1"/>');
  form.append('<input type="submit" value="button" id="quizSubmitButton" />');
  form.fadeIn(1000);
  $('.wrapper').append(form);

  $('#quizSubmitButton').click(function(){
    var newClue = returnNewWord();
    game(newClue);
  });
 
};

function returnNewWord(){
    if (clueList.length === 0) {
      makeTestResultsAppear();
    } else {
      console.log(clueList.length);
      return clueList.pop();
    }
};




$(function(){ $(document).foundation(); });

