const mongoose = require("mongoose"); 
const express = require('express');
const app = express(); 
var bodyParser = require('body-parser'); 


console.log(process.env.PORT)
const PORT = process.env.PORT || 3005;
global.bodyParser = require('body-parser');

const MONGO_URI = 'mongodb://address' 
//'mongodb://address' || 

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
  console.log('hey')
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
