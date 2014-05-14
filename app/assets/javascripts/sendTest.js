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


function submitRecipientInfo(){

  var testData = {
    "recipientName"     :$('#recipientName').val(),
    "recipientEmail"    :$('#recipientEmail').val()
  };

  $.ajax({
    type      :'POST',
    url       :'/tests',
    data      :testData,
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