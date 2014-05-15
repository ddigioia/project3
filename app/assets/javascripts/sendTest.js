function recipientInfoForm(){
  console.log("jessseus");
  var form = $('<form id = "recipientInfoForm"></form>');
  form.append('<p>Who should we send this beautiful quiz to?</p>');
  form.append('<input type="text" class="recipientInfoInput" value="name" id="recipientName"/>');
  form.append('<input type="text" class="recipientInfoInput" value="email" id="recipientEmail"/>');
  form.append('<input type="text" class="recipientInfoInput" value="your name" id="senderName"/>');
  form.append('<input type="text" class="recipientInfoInput" value="special message?" id="senderMessage"/>');
  form.append('<button id="recipientInfoSubmitButton">Send it out!</button>');
  form.fadeIn(800);
  $('.wrapper').append(form);

  $("#recipientInfoSubmitButton").click(function(event){
    event.preventDefault();
    console.log('yippeeee kai yayyyy');
    submitRecipientInfo();
  });
}

function renderSendTestModal(){
  var modalDiv = $('<div id="sendTestModal class="reveal-modal" data-reveal>');
  var recipientEmail = $('<input type="text" class="input" id="recipientEmail"/>');
  var senderEmail = $('<input type="text" class="input" id="senderEmail"/>');
  var senderMessage = $('<input type="text" class="input" id="senderMessage"/>');
  var recipientEmailParagraph = $('<p>Who shall we send this to?</p>');
  var senderEmailParagraph = $('<p>Would you like us to let you know how they did?</p>');
  var senderMessageParagraph = $('<p>Special Message?</p>');
  var closeModalButton = $('<a class="close-reveal-modal">&#215;</a>');
  var sendTestInputButton = $('<button id="sendTestInputButton">Send!</button>');

  recipientEmailParagraph.appendTo($('#sendTestModal'));
  recipientEmail.appendTo($('#sendTestModal'));

  senderMessageParagraph.appendTo($('#sendTestModal'));
  senderMessage.appendTo($('#sendTestModal'));

  senderEmailParagraph.appendTo($('#sendTestModal'));
  senderEmail.appendTo($('#sendTestModal'));

  closeModalButton.appendTo($('#sendTestModal'));
  sendTestInputButton.appendTo($('#sendTestModal'));

  sendTestInputButton.click(function(){
    var recipientEmail = $('#recipientEmail').val();
    sendTest(recipientEmail);
    $('#sendTestModal').empty();
    // createNewQuiz(testTitle);
    // $('#currentTestTitle').text(testTitle);
    $('.close-reveal-modal').click();
  });

}

function sendTest(recipientEmail){

  // var testData = {
  //   "recipientEmail"    :recipientEmail
  // };

  console.log('comon now');
  $.ajax({
    type      :'POST',
    url       :'/tests/sendTest',
    data      :{
      recipientEmail: recipientEmail
    },
    success: function(data){
      console.log("Success: " + data);
    },
    error: function(data){
      console.log("Error: " + data);
    },
    dataType  :'json'
  }).done(function(data){
    console.log("waat");
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

