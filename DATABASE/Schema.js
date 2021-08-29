const mongodb = require("./mongodb");

var articlesSchema={
    id: Number,
    first_name: String,
    last_name: String,
    company_name: String,
    city: String,
    state: String,
    zip: Number,
    email: String,
    web: String,
    age: Number
  };
  var Article=mongodb.model("Article",articlesSchema);
  
  module.exports=Article;