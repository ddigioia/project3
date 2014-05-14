var currentTestQuestion;
var currentTestAnswer;

function tryTest(){
  newQuestionAndAnswer();
  displayTest();

  // for(var i = 0; i < currentTestObj.length; i++){
  //   currentTestQuestions.push(currentTestObj[i].question_content);
  //   currentTestAnswers.push(currentTestObj[i].answer);
  // }


  // console.log(currentTestQuestions);
  // console.log(currentTestAnswers);
}



function getCurrentTest() {
  var currentTestObj;

  $.ajax({
    url: '/tests/' + currentTest.id,
    method: 'get',
    dataType: 'json',
    async: false,
    success: function(data){
      currentTestObj = data;
    }
  });
  return currentTestObj;
}

function newQuestionAndAnswer(){
  var currentTestObj = getCurrentTest();
  var shuffledTestEl = _.shuffle(currentTestObj).pop();
  currentTestAnswer = shuffledTestEl.answer;
  currentTestQuestion = shuffledTestEl.question_content;
  console.log(shuffledTestEl);
  console.log(currentTestAnswer);
  console.log(currentTestQuestion);
}

function displayTest(){
  var testContainer = $('<div class="large-12 columns" ></div>');
  var testQuestion = $('<p>' + currentTestQuestion + '</p>');
  var testInput = $('<input type="text" class="createAnswerInput" value="" id="takeTestAnswerInput"/>');
  var submitButton = $('<button id="takeTestAnswerSubmitButton">Are You Sure?</button>');
  testQuestion.appendTo(testContainer);
  testInput.appendTo(testContainer);
  testContainer.appendTo($('.wrapper'));
  submitButton.appendTo($('.wrapper'));

  submitButton.click(function(){
    console.log("WOOOOWZERS");
  })
}
