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

var clueList = _.shuffle([]);
var correctAnswers = [];
var wrongAnswerMessages = [];
var rightAnswerMessages = [];


$(document).ready(function(){
  console.log('im working');
  var userLoginButton = $('<button id="userLoginButton">User Login</button>');
  var nonUserButton = $('<button id="nonUserButton">Who needs a user login anyway?</button>');
  var wrapper = $('.wrapper');
  userLoginButton.fadeIn(500);
  nonUserButton.fadeIn(500);
  userLoginButton.appendTo(wrapper);
  nonUserButton.appendTo(wrapper);
  $('.game').hide();

  userLoginButton.click(function(){
    console.log("user sign in");
    userLoginButton.fadeOut(200);
    nonUserButton.fadeOut(200);
    userLoginForm();
  });

  nonUserButton.click(function(){
    displayQuizCreationForm();
    userLoginButton.fadeOut(200);
    nonUserButton.fadeOut(200);
  });
});


function userLoginForm(){
  
}


function displayQuizCreationForm(){
  var newQuizButton = $('<button id="newQuizButton">New Quiz!</button>');
  var editQuizButton = $('<button id="editQuizButton">Edit Quiz!</button>');
  newQuizButton.fadeIn(500);
  editQuizButton.fadeIn(500);
  $('.wrapper').append(newQuizButton);
  $('.wrapper').append(editQuizButton);

  newQuizButton.click(function(){
    newQuizButton.fadeOut(200);
    editQuizButton.fadeOut(200);
    displayQuestionAnswerForm();
  });

  editQuizButton.click(function(){
    newQuizButton.fadeOut(200);
    editQuizButton.fadeOut(200);
    console.log("this should bring them to a login page");
  });
}


function displayQuestionAnswerForm(){

  var form = $('<form id = "createQuizForm"></form>');
  form.append('<p>First Clue</p>');
  form.append('<input type="text" class="quizCreationInput" value="question" id="question1"/>');
  form.append('<input type="text" class="quizCreationInput" value="answer" id="answer1"/>');
  form.append('<p>Second Clue</p>');
  form.append('<input type="text" class="quizCreationInput" value="question" id="question2"/>');
  form.append('<input type="text" class="quizCreationInput" value="answer" id="answer2"/>');
  form.append('<p>Third Clue</p>');
  form.append('<input type="text" class="quizCreationInput" value="question" id="question3"/>');
  form.append('<input type="text" class="quizCreationInput" value="answer" id="answer3"/>');
  form.append('<p>Fourth Clue</p>');
  form.append('<input type="text" class="quizCreationInput" value="question" id="question4"/>');
  form.append('<input type="text" class="quizCreationInput" value="answer" id="answer4"/>');
  form.append('<p>Fifth Clue</p>');
  form.append('<input type="text" class="quizCreationInput" value="question" id="question5"/>');
  form.append('<input type="text" class="quizCreationInput" value="answer" id="answer5"/>');
  form.append('<input type="submit" value="button" id="quizCreationSubmitButton" />');
  form.fadeIn(1000);
  $('.wrapper').append(form);

  $("#quizCreationSubmitButton").click(function(){
    submitQuiz();
    recipientInfoForm();
    console.log('yippeeee kai yayyyy');
  });
}


function submitQuiz(){
  var quizData = {
    'question1'     :$('#question1').val(),
    'answer1'       :$('#answer1').val(),
    'question2'     :$('#question2').val(),
    'answer2'       :$('#answer2').val(),
    'question3'     :$('#question3').val(),
    'answer3'       :$('#answer3').val(),
    'question4'     :$('#question4').val(),
    'answer4'       :$('#answer4').val(),
    'question5'     :$('#question5').val(),
    'answer5'       :$('#answer5').val()
  };

  $.ajax({
    type      :'POST',
    url       :'/tests/<%=test.id%>',
    data      :quizData,
    dataType  :'json',
  }).done(function(data){
      console.log(data);
  });
}


function recipientInfoForm(){
  var form = $('<form id = "recipientInfoForm"></form>');
  form.append('<p>Who should we send this beautiful quiz to?</p>');
  form.append('<input type="text" class="recipientInfoInput" value="name" id="recipientName"/>');
  form.append('<input type="text" class="recipientInfoInput" value="email" id="recipientEmail"/>');
  form.append('<input type="submit" value="button" id="recipientInfoSubmitButton" />');
  form.fadeIn(1000);
  $('.wrapper').append(form);

  $("#recipientInfoSubmitButton").click(function(){
    console.log('yippeeee kai yayyyy');
    submitRecipientInfo();
  });
}


function submitRecipientInfo(){

  var recipientData = {
    "recipientName"     :$('#recipientName').val(),
    "recipientEmail"    :$('#recipientEmail').val()
  };

  $.ajax({
    type      :'POST',
    url       :'/tests/<%=test.id%>',
    data      :recipientData,
    dataType  :'json',
  }).done(function(data){
    console.log(data);
  });
}




$(function(){ $(document).foundation(); });
