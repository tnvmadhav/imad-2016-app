//counter  code
var button = document.getElementById('counter');



button.onclick = function() {
    
   //Create a request object 
  var request =  new XMLHttpRequest();  
  
  //Capture a response and store it in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //take some action 
          if(request.status ===200) {
             var names = request.responseText;
             name = JSON.parse(names);
 var  list = '';
 for(var i = 0; i< names.length; i++){
     list += '<li>'+ names[i] + '</li>';
 }
 var ul  = document.getElementByID('namelist');
 ul.innerHTML = list;
          }
      }
  };
  
  //Make request 
  request.open('GET','http://tnvmadhav.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
    
};


//submit name

var submit = document.getElementById('submit_btn');
submit.onclick  = function() {
  //Send a request to the server and send the names
  //Capture the list of names and render it in the list
 
    
   //Create a request object 
  var request =  new XMLHttpRequest();  
  
  //Capture a response and store it in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //take some action 
          if(request.status ===200) {
             var names = request.responseText;
             name = JSON.parse(names);
 var  list = '';
 for(var i = 0; i< names.length; i++){
     list += '<li>'+ names[i] + '</li>';
 }
 var ul  = document.getElementByID('namelist');
 ul.innerHTML = list;
          }
      }
  };
  
  //Make request 
  var inputName = document.getElementById('name');
var name = inputName.value;
  request.open('GET','http://tnvmadhav.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
  
};