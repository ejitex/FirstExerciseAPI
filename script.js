const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

});
app.post("/", function(res, req){
request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body){
  console.log(body);
});
});


app.listen(port, function(){
  console.log("Running on port 3000");
});
