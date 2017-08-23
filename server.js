var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title:"artice-one nikhil badani",
    heading:"artice one",
    date:"august23 2017",
    content:`<p>
                this is the content of myfirst article
            </p>
            <p>
                this is the content of myfirst article
            </p>
            <p>
                this is the content of myfirst article
            </p>
            <p>
                this is the content of myfirst article
            </p>`
},
'article-two':{
    title:"artice-two nikhil badani",
    heading:"artice two",
    date:"august23 2017",
    content:`<p>
                this is the content of mysecond article
            </p>
            <p>
                this is the content of mysecond article
            </p>
            <p>
                this is the content of mysecond article
            </p>
            <p>
                this is the content of mysecond article
            </p>`
    
},
'article-three':{
    title:"artice-three nikhil badani",
    heading:"artice three",
    date:"august23 2017",
    content:`<p>
                this is the content of mythird article
            </p>
            <p>
                this is the content of mythird article
            </p>
            <p>
                this is the content of mythird article
            </p>
            <p>
                this is the content of mythird article
            </p>`
    
}
};
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link href='/ui/style.css' rel='stylesheet' />
    </head>
    <body>
        <div class='container'>
        <div>
            <a href='/'>Home</a>
            
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res){
    var articlename=req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
