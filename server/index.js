const mongoose = require("mongoose"); 
const express = require('express');
const app = express(); 
var bodyParser = require('body-parser'); 

const PORT = process.env.PORT || 3000;

global.bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}))
app.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}))

app.use(express.json()); // Parses request body if type is json. Saves to req.body.


mongoose.connect(`mongodb://localhost:27017/hp-assessment`)


const userSchema = new mongoose.Schema( {
  username: String
}, { collection: 'usernames' })


const User = mongoose.model('User', userSchema)

// get em all back
const getUsernames = function() {
  const query = User.find({ });
  return query.exec();
};


//routing 

app.post('/users', (req, res) => {
  var newGuy = new User(req.body)
  newGuy.save()
  .then(item => {
    res.send('item saved to db'); 
  })
  .catch(err => {
    res.sendStatus(400)
  })
});


app.get('/users', (req, res) => {
  User.find({ })
  .then((data) => {
    res.json(data);
  })
  .catch(() => {
    console.log('error getting info')
  })
});



//static html
app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(PORT, function() {
  console.log('listening on port 3000!');
});
