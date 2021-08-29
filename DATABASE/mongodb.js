const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ajay:abc-123@cluster0.qapdj.mongodb.net/userDB",{ useNewUrlParser: true, useUnifiedTopology: true });
module.exports=mongoose;