//express wrapper for node js. script loaded
var express = require('express');
//in js, we can return entire function
var app = express();

var bodyParser  =   require("body-parser");
var router      =   express.Router();
var modelContactUs   =   require("./model/ContactUs");
var modelBlogs     =   require("./model/blogs");

app.use(bodyParser.urlencoded({"extended" : false}));
app.use(bodyParser.json());


// static files like html,images 
app.use(express.static("./public"));
app.use(express.static("./public/view"));

router.route("/ContactUs")
  .get(function(req,res){
        var response = {};
      modelContactUs.find({},function(err,data){
    // Mongo command to fetch all data from collection.
        if(err) {
           response = {"error" : true,"message" : "Error fetching data"};
       } else {
                response = data;
            }
            res.json(response);
        });
    })
         .post(function(req,res){
        var db = new modelContactUs();
        var response = {};
        // fetch email and password from REST request.
        // Add strict validation when you use this in Production.
        
        db.firstname = req.body.firstname; 
        db.lastname = req.body.lastname; 
        db.email = req.body.email; 
        db.phone = req.body.phone;
        db.course = req.body.course;
        db.comment = req.body.comment;
        db.address = req.body.address;
        db.city = req.body.city;
        db.createdDate = new Date();

        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
       
    });
router.route("/contactus/:id")
    .get(function(req,res){
        var response = {};
        modelContactUs.findById(req.params.id,function(err,data){
        // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response =  data;
            }
            res.json(response);
        });
    });

router.route("/blogs")
  .get(function(req,res){
        var response = {};
      modelBlogs.find({},function(err,data){
    // Mongo command to fetch all data from collection.
        if(err) {
           response = {"error" : true,"message" : "Error fetching data"};
       } else {
                response = data;
            }
            res.json(response);
        });
    })
         .post(function(req,res){
        var db = new modelBlogs();
        var response = {};
        // fetch email and password from REST request.
        // Add strict validation when you use this in Production.
        
        db.blogContent = req.body.blogContent; 
        db.createdBy = req.body.createdBy; 
        db.createdDate = new Date();
        db.isApproved = req.body.isApproved; 
        db.heading = req.body.heading;


        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
       
    });
router.route("/blogs/:id")
    .get(function(req,res){
        var response = {};
        modelBlogs.findById(req.params.id,function(err,data){
        // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response =  data;
            }
            res.json(response);
        });
    });
app.use('/api',router);


app.listen(3000);
console.log('server running on port 3000');


