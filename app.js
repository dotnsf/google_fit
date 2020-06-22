//. app.js
var express = require( 'express' ),
    app = express();

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.get( '/callback', function( req, res, next ){
  console.log( req.query );
  res.redirect( '/a' );
});

var port = process.env.port || 8080;
app.listen( port );
console.log( "server stating on " + port + " ..." );
