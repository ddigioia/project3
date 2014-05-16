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

// function drop(evt) {
//   console.debug("DROP registered ----------");
  
//   evt.stopPropagation();
//   evt.preventDefault();
//   var droppedHTML = evt.dataTransfer.getData("text/html");
//   var dropContext = $('<div>').append(droppedHTML);
//   var imgURL = $(dropContext).find("img").attr('src');
  
//   console.debug(imgURL);
//   alert(imgURL);
// }

function displayQuestionAnswerForm(){

  var form = $('<form id = "createQuizForm"></form>');
  var formWelcomeText = $('<p id="formWelcomeText">Add some questions from the left!</p>');
  var textQuestionButton = $('#textQuestionLink');
  var pictureQuestion = $('#pictureQuestionLink');
  var someOtherQuestion = $('#someOtherQuestionLink');

  form.fadeIn(1000);
  $('.wrapper').append(form);
  $('.wrapper').append(formWelcomeText);

//this is where the textQuestionButton.click function begins

  textQuestionButton.click(function(){
    $('#createQuizForm').empty();
    form.append('<p>Enter a Question and Answer</p>');
    form.append('<input type="text" class="createQuestionInput" value="textQuestion" id="createQuestionInput"/>');
    form.append('<input type="text" class="createAnswerInput" value="answer" id="createAnswerInput"/>');
    form.append('<button id="submitQuestionButton">Add Question</button>');


      $('#submitQuestionButton').click(function(event){
        event.preventDefault();
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
            error: function(data){
                  console.log("Error: " + data);
                  // debugger
            },
            dataType  :'json'
          }).done(function(createdQuestion){
              console.log(createdQuestion);


          });
      });
   
  });

//this is where the pictureQuestion.click function begins


    pictureQuestion.click(function(){
      $('#createQuizForm').empty();
      form.append('<p>Enter a Picture and Answer</p>');
      
      //this is the logic for the image upload button
      var button = $('<button id="photoUploadButton">Upload Photo</button>');
      button.click(function(event) {
        event.preventDefault();
        var iLoad = document.getElementById('photoUploadInput');
        iLoad.addEventListener('change', handleImage, false);
        var canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
        };
        console.log(img);
        img.src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      }
    });
      
      form.append('<canvas id="canvas" width="500px" height="300px"> </canvas>');
      form.append('<input type="file" id="photoUploadInput"/>');
      form.append(button);
      form.append('<input type="text" class="createQuestionInput" value="pictureQuestion" id="createQuestionInput"/>');
      form.append('<input type="text" class="createAnswerInput" value="answer" id="createAnswerInput"/>');
      form.append('<button id="submitQuestionButton">Add Question</button>');

      console.log(form);


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
              answer:               answer,
              photo1:               photo1
            },
            success: function(data){
               console.log("Success: " + data);
              },
            error: function (error) {
                  console.log("Error: " + error);
                  // debugger
              },
            dataType  :'json'
          }).done(function(createdQuestion){
              console.log(createdQuestion);

          });
      });
  });
  
  $('#sendTestButton').click(function(){
    // $('#leftSideBar').fadeTo(200, 0);
    // $('#rightSideBar').fadeTo(200, 0);
    $('#createQuizForm').fadeOut(200);
    renderSendTestModal();
  });

  $('#tryTestButton').click(function(){
    // $('#leftSideBar').fadeTo(200, 0);
    // $('#rightSideBar').fadeTo(200, 0);
    $('#createQuizForm').fadeOut(200);
    getCurrentTest();
  });

}

