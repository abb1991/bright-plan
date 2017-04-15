var express = require('express');
var app = express();
var path = require('path');

// Define the port to run on
app.set('port', 3000);


// Locate the views
app.set('views', __dirname + '/views');
// Locate the assets
app.use('/img',express.static(path.join(__dirname, 'public/img')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views/index.html'));
})