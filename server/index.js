var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({ 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'books',
});

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

app.post('/books', (req, res) => {
  console.log(req)
  let queryString = `SELECT pageNum FROM book WHERE title = '${req.body.title}'`
  let key = req.body.title;
  connection.query(queryString, key, (err, data) => {
    if(err) {
      console.log(err); 
    } else {
      res.send(JSON.stringify(data))
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// connection.end();