var express = require('express');
var app = express();

app.set('/css', __dirname + '/web/css');
app.use(express.static(__dirname + '/web'));

// set up views engine
app.set('view engine', 'html');

require(routes())(app);

app.listen(3000, function () {
  console.log('Test-Inclusion se está escuchando en localhost:3000');
});

function routes() {
  return './routes/route';
}
