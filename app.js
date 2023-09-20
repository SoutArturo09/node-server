const express = require("express");
 const path = require("path")

const app = express();

app.get("/", (req,res)=>{
        //res.send("hello port 8009");

    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(8009,()=>{
    console.log("server listening on port", 8009);
})