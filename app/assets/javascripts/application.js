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
    displayUserLoginForm();
  });

  nonUserButton.click(function(){
    displayQuizCreationForm();
    userLoginButton.fadeOut(200);
    nonUserButton.fadeOut(200);
  });
});


function displayUserLoginForm(){
  var form = $('<form id = "userSignInForm"></form>');
  form.append('<input type="text" class="input" value="username" id="username"/>');
  form.append('<input type="text" class="input" value="password" id="password"/>');
  form.append('<input type="submit" class="button" value="submit" id="userLoginSubmitButton" />');
  form.append("<p>Don't have an account?</p>");
  form.append('<input type="submit" class="button" value="sign up" id="userSignUpButton" />');
  form.fadeIn(1000);
  $('.wrapper').append(form);

  $('#userSignUpButton').click(function(){
    form.fadeOut(200); 
    displayUserSignUpForm();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  });

  $('.userLoginSubmitButton').click(function(){

  });
}

function displayUserSignUpForm(){
  var form = $('<form id = "userSignUpForm"></form>');
  form.append('<input type="text" class="input" value="username" id="newUsername"/>');
  form.append('<input type="text" class="input" value="password" id="newPassword"/>');
  form.append('<input type="text" class="input" value="password" id="confirmNewPassword"/>');
  form.append('<input type="submit" class="button" value="submit" id="userSignUpSubmitButton" />');
  form.fadeIn(1000);
  $('.wrapper').append(form);
}


function displayQuizCreationForm(){
  var newQuizButton = $('<a href="#" class="button" id="newQuizButton" data-reveal-id="myModal">New Test</a>');
  // var newQuizButton = $('<button id="newQuizButton">New Quiz!</button>');
  var editQuizButton = $('<button id="editQuizButton">Edit Quiz!</button>');
  newQuizButton.fadeIn(500);
  editQuizButton.fadeIn(500);
  $('.wrapper').append(newQuizButton);
  $('.wrapper').append(editQuizButton);

  newQuizButton.click(function(){
    renderTestTitleModal();
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

function renderTestTitleModal(){
  var modalDiv = $('<div id="myModal class="reveal-modal" data-reveal>');
  var titleInput = $('<input type="text" class="input" id="testTitle"/>');
  var modalContent = $('<p>Enter a Test Title</p>');
  var closeModalButton = $('<a class="close-reveal-modal">&#215;</a>');
  var titleSubmitButton = $('<button id="titleSubmitButton">Submit</button>');
  var testTitle = $('#testTitle').val();
  modalContent.appendTo($('#myModal'));
  closeModalButton.appendTo($('#myModal'));
  titleInput.appendTo($('#myModal'));
  titleSubmitButton.appendTo($('#myModal'));

  titleSubmitButton.click(function(){
    createNewQuiz(testTitle);
    $('.close-reveal-modal').click();
  });
}

function createNewQuiz(testTitle){
   $.ajax({
    type      :'POST',
    url       :'/tests',
    data      :{
      title: testTitle
    },
    dataType  :'json',
  }).done(function(data){
      console.log(data);
  });
}

function displayQuestionAnswerForm(){

  var form = $('<form id = "createQuizForm"></form>');
  var formWelcomeText = $('<p id="formWelcomeText">Add some questions from the left!</p>');
  form.fadeIn(1000);
  $('.wrapper').append(form);
  $('.wrapper').append(formWelcomeText);

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
    url       :'/tests',
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
    url       :'/tests',
    data      :recipientData,
    dataType  :'json',
  }).done(function(data){
    console.log(data);
  });
}

// searchMovies: function(){
//     var searchInput = this.$('#movie_title').val();
//     var result = $.ajax({
//       url: 'http://www.omdbapi.com/?t=' + searchInput,
//       method: 'get'
//     }).done(function(data){
//       console.log(data);
//     });
//   }

function tweetGeneratedLink(){
  var generatedLink = $('#generatedLink').val();
  var tweetComment = $('#tweetComment').val();
  var result = $.ajax({
    url: 'https://api.twitter.com/1.1/' + generatedLink + tweetComment + '/update.json',
    method: 'post'
  }).done(function(data){
    console.log(data);
  });
}



$(function(){ $(document).foundation(); });
