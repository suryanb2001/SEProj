//jshint esversion:6



const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/facultyDB';
var tempfac;
let sname;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db=mongoose.connection;
// db.createCollection("roomavailability");
// db.createCollection("faculty");
// db.collection("faculty").insertMany([
//   {fid: 3 , name: "Kishore",empno:30061919 , username:"donkishore",password: "kishorekumara", dept: "CSE", email: "kishorea@,gmail.com", phone: "8825897100", dob:"26/01/2001" ,yearofjoining:"2005"},
//   {fid: 1 , name: "Rishi", username:" ",password: "rishinathtm", dept: "CSE", email: "rishinath@,gmail.com", phone: "7550398440", dob:"20/02/2001" ,yearofjoining:" "},
//   {fid: 2 , name: "Nitheese", password: "nitheeset", dept: "CSE", email: "nitheese456@,gmail.com", phone: "7094971371", dob:"13/07/2000" }

// ]);
//db.dropCollection("timetable");
//db.createCollection("reservation");
//db.createCollection("timetable");
var faculty = db.collection("faculty");
var rooms=db.collection("roomavailability");

const requests=[{type :"Class Room",
slot :"1",
cap : "56",
date : "08-03-2021",
stat: "Accepted"}];



const users =
[{
username: "user1",
pwd: "login1",
name: "Kishore",
dept:"CSE",
phone: 8825897100,
email:"kishoreak2000@gmail.com"
}, {
username: "user2",
pwd: "login2",
name:"Nitheese",
dept:"CSE",
phone:7094971371,
email:"nitheese456@gmail.com"
}];



const adm= [{username:'adm1',pwd:'log'},{username:'adm2',pwd:'log0'}]



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.listen(3000,function(req,res){
console.log("Port is running");
});



app.get("/",function(req,res){
res.render("home");
});



app.get("/time",function(req,res){
  res.render("time",{name:sname});

});



app.get("/log",function(req,res){
res.render("log",{users:users});

});



app.get("/occ",function(req,res){
res.render("occ",{rooms:rooms});
});



app.get("/reserve",function(req,res){
res.render("reserve");
});



function val(res,o){
res.render("admin",{adm:o});

}

function temp(res,o){
  //res.redirect("dash"+"/"+username);
  res.render("dash",{tempfac:o});
  }
  


app.post("/dash",function(req,res){



username = req.body.name;
pwd = req.body.pwd;
adm.forEach(o => {
if (o.username === username && o.pwd == pwd){
val(res,o);
}
});

faculty.find(function(err, facs){
  facs.forEach(function(fac){
    if (fac.username === username && fac.password == pwd){
      //tempfac=fac;
      temp(res,fac);
      sname=fac.empno;
      //console.log(sname);
      }
  });
  });


});






app.get("/noti",function(req,res){
  console.log(sname);
res.render("noti", {requests:requests});
});




app.post("/noti",function(req,res){
var reqs = {type : req.body.first,
slot : req.body.second,
cap : req.body.cap,
date : req.body.date,
stat: "Pending"}



requests.push(reqs);
res.render("noti",{requests:requests});
});



app.get("/set",function(req,res){
res.render("set");
});



app.get("/cpass",function(req,res){
res.render("cpass");
});



app.get("/reqC",function(req,res){
res.sendFile(__dirname+"/reqC.html");
});