const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connection full");

}).catch((e)=>{
    console.log("No connection");

})