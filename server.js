var express= require('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var route = require('./routes/route');
app.use('/api' ,route);




//conn mongo
mongoose.connect('mongodb://localhost:27017/contactlist');
//on conn
mongoose.connection.on('connected',function(){
	console.log("connected to db mongodb @27017");
});
mongoose.connection.on('error',function(err){
	if(err)
	{

		console.log("error in db connection :" +err);
	}
});


app.get('/',function(req,res){
	res.send("hello");
});
app.listen(3000);
console.log("running on port 3000");
