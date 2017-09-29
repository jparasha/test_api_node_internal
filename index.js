const express = require('express');
const spawn = require('child_process').spawn;
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
//use body parser for urlencoded data
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Welcome to CapGemini " + user_name + " !");
  console.log("This is line 1");
  console.log("If things go right and you see Line 1, consider this as Status Code:200 OK!"); 
  console.log("Meanwhile " +user_name+ " Accessed the app");
  
});
app.get('/test', (req,res) =>{
	var msg ={
		data:{
			code: "200"
		}	
	};
	res.send(msg);
});	

app.post('/add', (req, res) => {
		console.log("running add .jar");
		var exec = require('child_process').exec;
		var child = exec('java -jar /home/add.jar',
		  function (error, stdout, stderr){
		    console.log('Output -> ' + stdout);
			res.send(stdout);
		    if(error !== null){
		      console.log("Error -> "+error);
			res.send(error);
		    }
		});
 
	});

app.post('/sub', (req, res) => {
		console.log("running subtract .jar");
		var exec = require('child_process').exec;
		var child = exec('java -jar /home/subtract.jar',
		  function (error, stdout, stderr){
		    console.log('Output -> ' + stdout);
			res.send(stdout);
		    if(error !== null){
		      console.log("Error -> "+error);
			res.send(error);	
		    }
		});
 
	});

	//res.send(err);
		/*console.log(req.body);
		
		const ls = spawn('java', ['-jar', '/home/add.jar']);

		ls.stdout.on('data', function(data){
			console.log(data); 
			console.log("inside stdout"); 
		});

		ls.stderr.on('data', function(data){
			console.log(data);
			console.log("inside stderr");
		});

		ls.on('close', function (code){
		  console.log(`child process exited with code ${code}`);
			res.send("process exited with code" +code);
		});*/
		






app.listen(port, "0.0.0.0", () => {
	console.log('Hey! We are live on ' + port);
});
