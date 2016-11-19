var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui' , '/index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter=0;
app.get('/counter',function (req,res) {
   counter = counter+1;
   res.send(counter.toString());
});


var articles = {
'article-one': {
    title : 'Article one |tnvmadhav',
    heading:  'Gotta code em all(there is no code involved for now)XP' ,
    date : '11th October 2016',
    content : `
               <p1>
              Hi , I am T .Venu Madhav . This is me doing some cool things using 
              some html and css. There is no limit to  imagination and hence 
              i would like to  extend my imagination with the wonderful 
              world of web designing. 
              Cheers :D 
               
               </p1> `},
'article-two': {
    title : 'Article two |tnvmadhav',
    heading:  'Gotta code em all(there is no code involved for now)XP' ,
    date : '11th October 2016',
    content : `
               <p1>
              Hi , I am T .Venu Madhav . This is me doing some cool things using 
              some html and css. There is no limit to  imagination and hence 
              i would like to  extend my imagination with the wonderful 
              world of web designing. 
              Cheers :D 
               
               </p1> `}, 
'article-three':{
    title : 'Article three |tnvmadhav',
    heading:  'Gotta code em all(there is no code involved for now)XP' ,
    date : '11th October 2016',
    content : `
               <p1>
              Hi , I am T .Venu Madhav . This is me doing some cool things using 
              some html and css. There is no limit to  imagination and hence 
              i would like to  extend my imagination with the wonderful 
              world of web designing. 
              Cheers :D 
               
               </p1> `},               
               };



function createTemplate(data)
{
    var title = data.title;
    var heading = data.title;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    
<html>
    <head>
        <title>
         ${title}
        </title>
        <meta name ="viewport" , content = "width-device-width , initial-scale-1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
             <div>
                <a href = "/">Home</a>
             </div>
              <hr/>
              <div>
             ${date}
               </div>
    
               <div>
                <h3>
                 ${heading}
                  </h3>
                 </div>
                <div>
                 ${content}
            </div>
    
     </div>
    </body>
</html> 
  `;
  return htmlTemplate;
}

app.get('/:ArticleName', function(req,res) {
   var ArticleName =  req.params.ArticleName;
    res.send(createTemplate(articles[ArticleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names[];
app.get('/submit-name/:name', function(req,res) {
    //Get name from request
    var name = req.params.name;
    
    names.push(name);
    //JSON javascript object notation
     res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
