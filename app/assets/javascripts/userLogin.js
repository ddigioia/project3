function displayUserLoginForm(){
  var form = $('<form id = "userSignInForm"></form>');
  form.append('<input type="text" class="input" value="username" id="username"/>');
  form.append('<input type="text" class="input" value="password" id="password"/>');
  form.append('<input type="submit" class="button" value="submit" id="userLoginSubmitButton" />');
  form.append("<p>Don't have an account?</p>");
  form.append('<button class="button" id="userSignUpButton">Sign Up</button>');
  form.fadeIn(1000);
  $('.wrapper').append(form);


  $('#userSignUpButton').click(function(event){
    event.preventDefault();
    form.fadeOut(200);
    displayUserSignUpForm();
    
  });

  $('#userLoginSubmitButton').click(function(event){
    event.preventDefault();

  });
}

function displayUserSignUpForm(){
  var form = $('<form id = "userSignUpForm"></form>');
  form.append('<input type="text" class="input" value="username" id="newUsername"/>');
  form.append('<input type="text" class="input" value="password" id="newPassword"/>');
  form.append('<input type="text" class="input" value="password" id="confirmNewPassword"/>');
  form.append('<input type="submit" class="button" value="submit" id="userSignUpSubmitButton" />');
  $('.wrapper').append(form);

  $('#userSignUpSubmitButton').click(function(event){
    event.preventDefault();
    console.log("not working");
    debugger
  });
}