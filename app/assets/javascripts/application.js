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

$(document).ready(function(){
  console.log('im working');
  $('.game').hide();
  
  var startButton = $('<button id= "startButton">Click Me</button>');
  var firstClue = $('<p id ="firstClue">First Clue</p>');
  var clueBox = $('.clue');
  startButton.fadeIn(500);
  startButton.appendTo('.wrapper');

  startButton.click(function(){
    startButton.fadeOut(800);
    $('.game').fadeIn(1000);
    firstClue.appendTo(clueBox);
  });

});

$(function(){ $(document).foundation(); });

