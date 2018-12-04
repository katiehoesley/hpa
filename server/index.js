var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({ 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'books',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

app.get('/books', (req, res) => {
  let queryString = `SELECT * FROM book`
  connection.query(queryString, (err, data) => {
    if(err) {
      console.log(err); 
    } else {
      res.send(data)
    }
  })  
})

app.post('/books', (req, res) => {
  // let key = req.body.title;
  // let queryString = 'SELECT `pageNum` FROM `book` WHERE `title` = ?'
  connection.query({
    sql: `SELECT pageNum FROM book WHERE title = '?'`,
    values: req.body.title
  }, function(error, results) {
      if(error) {
        console.log(error); 
      } else {
        console.log(results);
        res.send(results)
      }
    })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// connection.end();