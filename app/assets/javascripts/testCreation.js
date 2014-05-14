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
  modalContent.appendTo($('#myModal'));
  closeModalButton.appendTo($('#myModal'));
  titleInput.appendTo($('#myModal'));
  titleSubmitButton.appendTo($('#myModal'));

  titleSubmitButton.click(function(){
    var testTitle = $('#testTitle').val();
    createNewQuiz(testTitle);
    $('#currentTestTitle').text(testTitle);
    $('.close-reveal-modal').click();
    $('#leftSideBar').fadeTo(400, 1);
    $('#rightSideBar').fadeTo(400, 1);
  });
}

function createNewQuiz(testTitle){
  $.ajax({
    type      :'POST',
    url       :'/tests',
    data      :{
      title: testTitle
    },
    dataType  :'json'
  }).done(function(createdTest){
      console.log(createdTest);
      currentTest = createdTest;
  });
}

function displayQuestionAnswerForm(){

  var form = $('<form id = "createQuizForm"></form>');
  var formWelcomeText = $('<p id="formWelcomeText">Add some questions from the left!</p>');
  var textQuestion = $('#textQuestionLink');
  var pictureQuestion = $('#pictureQuestionLink');
  var someOtherQuestion = $('#someOtherQuestionLink');

  form.fadeIn(1000);
  $('.wrapper').append(form);
  $('.wrapper').append(formWelcomeText);

//this is where the textQuestion.click function begins

  textQuestion.click(function(){
    console.log("text question clicked");
    console.log(currentTest.id);
    form.append('<p>Enter a Question and Answer</p>');
    form.append('<input type="text" class="createQuestionInput" value="question" id="createQuestionInput"/>');
    form.append('<input type="text" class="createAnswerInput" value="answer" id="createAnswerInput"/>');
    form.append('<button id="submitQuestionButton">Add Question</button>');


      $('#submitQuestionButton').click(function(){
        var testPanel = $('#currentTestPanel');
        var question = $('#createQuestionInput').val();
        var answer = $('#createAnswerInput').val();
        var testPanelListItem = $('<button>' + question + '</button>');
        testPanelListItem.appendTo(testPanel);

          $.ajax({
            type     :'POST',
            url      :'/questions',
            data     :{
              testId:               currentTest.id,
              questionContent:      question,
              questionType:         "text",
              answer:               answer
            },
            success: function(data){
               console.log("Success: " + data);
              },
            error: function (error) {
                  console.log("Error: " + error);
                  debugger
              },
            dataType  :'json'
          }).done(function(createdQuestion){
              console.log(createdQuestion);

          });
      });
  });

//this is where the pictureQuestion.click function begins


    pictureQuestion.click(function(){
    console.log("picture question clicked");
    console.log(currentTest.id);
    form.append('<p>Enter a Question and Answer</p>');
    form.append('<input type="text" class="createQuestionInput" value="question" id="createQuestionInput"/>');
    form.append('<input type="text" class="createAnswerInput" value="answer" id="createAnswerInput"/>');
    form.append('<button id="submitQuestionButton">Add Question</button>');

      $('#submitQuestionButton').click(function(){
        var question = $('#createQuestionInput').val();
        var answer = $('#createAnswerInput').val();
          $.ajax({
            type     :'POST',
            url      :'/questions',
            data     :{
              testId:               currentTest.id,
              questionContent:      question,
              questionType:         "picture",
              answer:               answer
            },
            success: function(data){
               console.log("Success: " + data);
              },
            error: function (error) {
                  console.log("Error: " + error);
                  debugger
              },
            dataType  :'json'
          }).done(function(createdQuestion){
              console.log(createdQuestion);

          });
      });
  });


  // $("#quizCreationSubmitButton").click(function(){
  //   submitQuiz();
  //   recipientInfoForm();
  //   console.log('yippeeee kai yayyyy');
  // });

}