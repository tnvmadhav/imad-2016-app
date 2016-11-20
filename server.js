var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:'tnvmadhav',
    database:'tnvmadhav',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui' , '/index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req,res){
    //make a select request
    //return a response with the results
    pool.query('SELECT * FROM test', function(err,result){
       if(err){
        res.status(500).send(err.toString());
       }else {
           res.send(JSON.stringify(result.rows));
       }
    });
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
             ${date.toDateString()}
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
var names = [];
app.get('/submit-name', function(req,res) { //submit-name?name=xxxxxx
    //Get name from request
    var name = req.query.name;
    
    names.push(name);
    //JSON javascript object notation
     res.send(JSON.stringify(names));
});
var namesc = [];
app.get('/submit-comment', function(req,res) { //submit-name?name=xxxxxx
    //Get name from request
    var namec = req.query.namec;
    
    namesc.push(namec);
    //JSON javascript object notation
     res.send(JSON.stringify(namesc));
});

app.get('/articles/:ArticleName', function(req,res) {
   
   pool.query("SELECT * FROM article WHERE title = $1",[req.params.ArticleName], function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else {
           if(result.rows.length === 0) {
               res.status(404).send('Article not found');
           } else {
               articleData = result.rows[0];
                res.send(createTemplate(articleData));
           }
       }
      });
   });

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});







var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
