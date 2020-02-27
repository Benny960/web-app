var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(bodyParser.json());

app.get('/hello', function(req,res){res.json({result: 'Hello CCT'});
                                   });
app.get('/hello/:foo/:bar', function(req,res){res.json({result: 'hello Cct', data:[req.params.foo,req.params.bar]});
                                             });

app.post('/hello', function(req,res){res.json({result: 'The Post request was sent!', data: req.body});
                                    });
app.listen(port, function(err){console.log("listeningf on port:" + port);
                              });

