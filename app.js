const express = require("express");
 

const app = express();

app.get("/", (req,res)=>{
    //res.send("hello port 8009");
    res.sendFile("../server-node/index.html")
})

app.listen(8009,()=>{
    console.log("server running on port", 8009);
})