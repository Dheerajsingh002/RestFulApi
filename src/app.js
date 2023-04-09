const express=require("express");
require("../src/db/conn");
// const MenRanking=require("../src/models/mens.js");
const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
// app.post("/mens",async(req,res)=>{
//     try{
//          const addingMensRecording=new MenRanking(req.body);
//          console.log(req.body)
//          addingMensRecording.save();

//     }catch(e){
//         res.send(e);

//     }
    
// })
app.get('/', (req, res)=>{
    res.send("Hello from the thapa");
})
app.listen(port,()=>{
    console.log(`connection is live at port ${port} `);
});