var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

//////////////////////////////////////////////////////
// Static
//
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
// Body Parser
// ////////////
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//
// // parse application/json
app.use(bodyParser.json());
//
// // parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//////////////////////////////////////////////////////

app.get('/', function(req, res){
  fs.readFile('./static/index.html', function(err, html)
  { if (err) {
      throw err;
    }
    else {
      console.log("Return index.html");
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end();
    }
  });
});

app.post('/', function(req, res){
  console.log(req.body.password);
  if (req.body.password == "BACCANO!") {
    console.log("accept! Dollars!");
    fs.readFile('./static/appmain.html', function(err, html)
                { if (err) {
                  throw err;
                }
                else {
                  console.log("Return appmain.html");
                  res.writeHeader(200, {"Content-Type": "text/html"});
                  res.write(html);
                  res.end();
                }
                });

  }
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

