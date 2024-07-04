const express = require("express");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

// routing
app.get("/",(req,res)=>{
    res.send("routed");
})

// server
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})