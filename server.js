var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var articles = {articleone:{title:'arun1', head:'singam', date:'aug 10 2017', content:' hello moto'},
                 articletwo:{title:'arun2', head:'singam', date:'aug 11 017', content:' hello moto2'},
                 articlethree:{title:'arun3', head:'singam', date:'aug 12 2017', content:' hello moto3'}
};

function createTemplate(data)
{
var title = data.title;
var head = data.head;
var date = data.date;
var content = data.content; 
    
    
var htmlTemplate = `
<html>
<head>
<title>
${title}
</title>
<body>
<h5>${head}</h5>
<div>
${date}
</div>
<p>
${content}
</p>
</body>
</html>`;
return htmlTemplate;
}
var counter= 0;
app.get("/counter", function(req,res) {
    counter= counter+1;
     res.send(counter.toString());
} );

app.get('/submit-name/:name',function(req, res){
   var names = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
})

app.get('/:articleName',function(req, res){
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
