function tryTest(){
  console.log(currentTest.id);
  var currentTestObj = getCurrentTest();
  console.log(currentTestObj);
  console.log(currentTestObj.length);
  for(var i = 0; i < currentTestObj.length; i++){
    console.log(currentTestObj[i].question_content);
  }
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