var express = require( "express" );
var path = require('path');
var app = express();
var port = process.env.PORT || 8000;

app.use( express.static( 'public' ) );

// set the home page route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
