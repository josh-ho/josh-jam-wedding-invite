var express = require( "express" );
var path = require('path');
var app = express();
var port = process.env.PORT || 8000;

var webpack = require( 'webpack' );
var WebpackDevServer = require( 'webpack-dev-server' );
var config = require( './webpack.config' );
/*
new WebpackDevServer( webpack(config), {
  publicPath : config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen( port, 'localhost' );
*/
app.use( express.static( 'public' ) );

// set the home page route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
