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
var currentTest;


$(document).ready(function(){
  console.log('im working');
  var userLoginButton = $('<button id="userLoginButton">User Login</button>');
  var nonUserButton = $('<button id="nonUserButton">Who needs a user login anyway?</button>');
  var wrapper = $('.wrapper');
  userLoginButton.fadeIn(500);
  nonUserButton.fadeIn(500);
  userLoginButton.appendTo(wrapper);
  nonUserButton.appendTo(wrapper);
  // $('.game').hide();
  $('#leftSideBar').fadeTo(10, 0);
  $('#rightSideBar').fadeTo(10, 0);

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

// function submitQuiz(){
//   var quizData = {
//     'question1'     :$('#question1').val(),
//     'answer1'       :$('#answer1').val()
//   };

//   $.ajax({
//     type      :'POST',
//     url       :'/tests',
//     data      :quizData,
//     dataType  :'json',
//   }).done(function(data){
//       console.log(data);
//   });
// }


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

