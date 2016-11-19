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
var inputName = document.getElementById('name');
var name = inputName.value;
var submit = document.getElementById('submit_btn');
submit.onclick  = function() {
  //Send a request to the server and send the names
  //Capture the list of names and render it in the list
  var names = ['name1','name2' , 'name3','name4'];
 var  list = '';
 for(var i = 0; i< names.length; i++){
     list += '<li>'+ names[i] + '</li>';
 }
 var ul  = document.getElementByID('namelist');
 ul.innerHTML = list;
};