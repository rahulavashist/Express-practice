const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.send("Hello from server")
    })
    app.get("/",(req,res)=>{
        res.send("Hello from server")
    })
    app.get("/about",(req,res)=>{
         res.send("About Page")
     })
     app.get("/profile/:Name/:number/:location",(req,res)=>{
         res.send(`
         <h1>This is profile Page </h1>
         <h2>Name: ${req.params.name} </h2>
         <h2>Number: ${req.params.number} </h2>
         <h2>Location: ${req.params.location} </h2>
         
         
         `)
     })
app.listen(8000,"localhost",()=>console.log("server run succesfully on 8000 port"))





// const app = express()
// app.get("/",(req,res)=>{
// res.send("Hello from server")

// })
// app.listen(8000,"localhost",()=>console.log("server run succesfully on 8000 port"))