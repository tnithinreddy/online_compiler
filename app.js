var he = require('he-sdk-nodejs');
var express=require('express');
var app=express();
var bodyParser=require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



var settings = {
    'client_secret': 'f657d9629b995890fdba2ea7519f3bf404ae49b6' ,
    'async': 0 ,
    'lang': 'CPP' ,
    'time_limit': 5,
    'memory_limit': 262144
};

var source='#include <iostream>\n'+
             'using namespace std;\n'+
             'int main()\n'+
             '{cout << \"sai ram!\" << endl;return 0;}';
app.get('/',function(req,res){
     console.log("sai ram");
res.sendFile(__dirname+'/html/index.html');     
//res.end("sairam");
});

app.post('/compilecode',function(req,res){
  var  source1=req.body.code;
   console.log("code: "+req.body.code);
   he.run(settings , source1 , function(err , result){
    result=JSON.parse(result);
    console.log(result);
    res.end("output : "+result.run_status.output);
});
});


app.listen(3000,function(){
console.log("server listening at port 3000");

});


/*
he.compile(settings , source , function(err , result){
    console.log(result);
});*/
/*
he.run(settings , source , function(err , result){
    result=JSON.parse(result);
    console.log(result.run_status.output);
});*/


