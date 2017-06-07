//import dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');

//import routes
const locationRoutes = require('./routes/locationRoutes.js');

const app = express();

//set port to listen to
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

//use public folder instead of static
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.get('/', function(req, res) {
	res.send('hello world')
})

app.use('/api/location', locationRoutes);

//error handling
app.get('*',function(req,res){
  res.status(404).send({message: 'Oops! Not found.'})
})