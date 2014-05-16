var currentTestQuestion;
var currentTestAnswer;
var currentTestObj;
var singleTestObj;
var counter = 0;



function tryTest(){
  
  var newQuestionObj = newQuestionAndAnswer();
  displayTest(newQuestionObj);

  // for(var i = 0; i < currentTestObj.length; i++){
  //   currentTestQuestions.push(currentTestObj[i].question_content);
  //   currentTestAnswers.push(currentTestObj[i].answer);
  // }


  // console.log(currentTestQuestions);
  // console.log(currentTestAnswers);
}

function getCurrentTestFromURL(id) {

  $.ajax({
    url: '/tests/' + id,
    method: 'get',
    dataType: 'json',
    async: false,
    success: function(data){
      currentTestObj = data;
    }
  });
  tryTest();
 
}



function getCurrentTest() {

  $.ajax({
    url: '/tests/' + currentTest.id,
    method: 'get',
    dataType: 'json',
    async: false,
    success: function(data){
      currentTestObj = data;
    }
  });
  tryTest();
 
}

function newQuestionAndAnswer(){
   
   console.log(counter);
  if(counter == currentTestObj.length) {
    displayTestFinished();
  } else {
    counter++;
    return currentTestObj[counter - 1];
  }

}


function displayTest(testObj){
  var testContainer = $('<div class="large-12 columns" id="testContainer" ></div>');
  var testQuestion = $('<p>' + testObj.question_content + '</p>');
  var testInput = $('<input type="text" class="createAnswerInput" value="" id="takeTestAnswerInput"/>');
  var submitButton = $('<button id="takeTestAnswerSubmitButton">Are You Sure?</button>');
  //this is where the image should be appended
  testQuestion.appendTo(testContainer);
  testInput.appendTo(testContainer);
  submitButton.appendTo(testContainer);
  testContainer.fadeIn(1000);
  testContainer.appendTo($('.wrapper'));
  currentTestAnswer = testObj.answer;
  singleTestObj = testObj;

  
  submitButton.click(function(){
    var _testInput = $('#takeTestAnswerInput').val();
    checkAnswer(_testInput, currentTestAnswer);
    testContainer.remove();
    
  });
}

function displayTestFinished(){
  var testFinishedContainer = $('<div class="large-12 columns" id="testFinishedContainer">All done</div>');
  testFinishedContainer.appendTo($('.wrapper'));
}

function checkAnswer(testInput, testAnswer){
  if(testInput == testAnswer){
    $('#testContainer').remove();
    alert("You got that right!");
    questionObj = newQuestionAndAnswer();
    displayTest(questionObj);
    $('#takeTestAnswerInput').val('');
    submitButton.unbind();
  } else {
    alert("WRONG");
    displayTest(singleTestObj);
  }
}


