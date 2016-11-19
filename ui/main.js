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
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
             
          }
      }
  };
  
  //Make request 
  request.open('GET','http://tnvmadhav.imad.hasura-app.io/counter',true);
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
             names = JSON.parse(names);
          var  list = '';
          for(var i=0; i<names.length; i++){
     list += '<li>'+ names[i] + '</li>';
     }
 var ul  = document.getElementById('namelist');
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





//comment box
var submitc = document.getElementById('submit_btn2');
submitc.onclick  = function() {
  //Send a request to the server and send the names
  //Capture the list of names and render it in the list
 
    
   //Create a request object 
  var requestc =  new XMLHttpRequest();  
  
  //Capture a response and store it in a variable
  requestc.onreadystatechange = function() {
      if(requestc.readyState === XMLHttpRequest.DONE){
          //take some action 
          if(requestc.status ===200) {
             var comments = requestc.responseText;
             comments = JSON.parse(comments);
          var  listc = '';
          for(var i=0; i<comments.length; i++){
     listc += '<li>'+ comments[i] + '</li>';
     }
 var ol  = document.getElementById('namelist2');
 ol.innerHTML = listc;
          }
      }
  };
  
  //Make request 
  var inputNamec = document.getElementById('comment');
var namec = inputNamec.value;
  request.open('GET','http://tnvmadhav.imad.hasura-app.io/submit-comment?namec='+namec,true);
  request.send(null);
  
}; 