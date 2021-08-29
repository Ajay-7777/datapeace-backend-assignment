const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
var Article =require("./DATABASE/Schema");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

 // For performing various operations on data



var operationtoperform = {
  getUser: function(toSkip, limit, sortBy, sortByOrder, name, response) {
    Article.find(
      {
        $or: [
          { first_name: { $regex: name, $options: "i" } },
          { last_name: { $regex: name, $options: "i" } }
        ]
      },
      {},
      {
        skip: +toSkip,
        limit: +limit,
        sort: {
          [sortBy]: sortByOrder
        }
      },
      (err, doc) => {
        if (err) {
          console.log("error while getting users from database");
        } else {
          response.status(200).send(doc);
        }
      }
    );
  },
  createUser: function(userDetails, response) {
    let userToSave = new users(userDetails);
    userToSave.save((err, doc) => {
      if (err) console.log(`Error while saving a new user`, err.stack);
      else {
        response.status(201).send("User saved successfully");
      }
    });
  },
  findUserById: function(searchId, response) {
    Article.find({ id: searchId }, (err, doc) => {
      if (err) {
        console.log("erorr while searching by id..");
      } else {
        response.status(200).send(doc);
      }
    });
  },
  updateUser: function(searchId, updates, response) {
    Article.findOneAndUpdate({ id: searchId }, updates, (err, doc) => {
      if (err) {
        console.log("error while updating a user..");
      } else {
        response.status(200).send("Updated Successfully");
      }
    });
  },
  deleteUser: function(searchId, response) {
    Article.findOneAndRemove({ id: searchId }, (err, doc) => {
      if (err) {
        console.log("error while deleting a user..");
      } else {
        response.status(200).send("Deleted Successfully");
      }
    });
  }
};

// For fecting the data from mongodb with query

app.get("/api/users", (request, response) => {
    let pageSize = 10;  // page size is unknown 
    let toSkip = request.query.page
      ? pageSize * request.query.page - pageSize
      : 0;
    let limit = request.query.limit ? request.query.limit : 5;
    let sortBy = request.query.sort ? request.query.sort : "id";
    let name = request.query.name ? request.query.name : "";
    let sortByOrder = 1; //1 for ascending
    if (sortBy.indexOf("-" >= 0)) {
      sortByOrder = -1; //-1 for descending
      sortBy = sortBy.split("-")[1];
    }
    operationtoperform.getUser(toSkip, limit, sortBy, sortByOrder, name, response);
  });
  
  app.post("/api/users", (request, response) => {
    let userDetails = request.body;
    operationtoperform.createUser(userDetails, response);
  });
  
  app.get("/api/users/:id", (request, response) => {
    let searchId = request.params.id;
    operationtoperform.findUserById(searchId, response);
  });
  
  app.put("/api/users/:id", (request, response) => {
    let searchId = request.params.id;
    let updates = request.body;
    operationtoperform.updateUser(searchId, updates, response);
  });
  
  app.delete("/api/users/:id", (request, response) => {
    let searchId = request.params.id;
    operationtoperform .deleteUser(searchId, response);
  });

// Listening on port 3000 

app.listen(3000,function(){
    console.log ("server is running on http://localhost:3000/api/users");
})