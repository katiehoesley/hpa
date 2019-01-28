const mongoose = require("mongoose"); 
const express = require('express');
const app = express(); 
var bodyParser = require('body-parser'); 


const PORT = process.env.PORT || 3000;

global.bodyParser = require('body-parser');

const MONGO_URI = `mongodb://localhost:27017/hp-assessment` || 'mongodb://address'

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}))
app.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}))

app.use(express.json()); 


mongoose.connect(MONGO_URI)


const userSchema = new mongoose.Schema( {
  username: String
}, { collection: 'usernames' })


const User = mongoose.model('User', userSchema)


const getUsernames = function() {
  const query = User.find({ });
  return query.exec();
};


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


app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
