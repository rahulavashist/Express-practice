const express = require("express")
 const app = express()
var data = [
    {id:101,Name:"Rahul Sharma",class:"MERN",place:"Noida"},
    {id:102,Name:"Pahul Sharma",class:"PHP",place:"Bilaspur"},
    {id:103,Name:"Sahul Sharma",class:"DSA",place:"YNR"},
    {id:104,Name:"Wahul Sharma",class:"SQL",place:"Ambala"},
    {id:105,Name:"Yahul Sharma",class:"MEAN",place:"Hisar"},

]

 app.get("/",(req,res)=>{
 res.send("<h1> Hello This is server</h1>")
})
app.get("/data",(req,res)=>{
    res.send(data)
   })
   

app.get("*",(req,res)=>{
    res.status(404).send("<h1> 404 Page Not Found</h1>")
})
app.listen(8000,"localhost",()=>console.log("Server is runing at Port 8000"))



// const express = require("express")
// const app = express()
// app.get("/",(req,res)=>{
//     res.send("Hello from server")
//     })
//     app.get("/",(req,res)=>{
//         res.send("Hello from server")
//     })
//     app.get("/about",(req,res)=>{
//          res.send("About Page")
//      })
//      app.get("/profile/:name/:number/:location",(req,res)=>{
//         res.send(`
//         <h1>This is profile Page </h1>
//         <h2>Name: ${req.params.name} </h2>
//         <h2>Number: ${req.params.number} </h2>
//         <h2>Location: ${req.params.location} </h2>
//          `)
//      })
//      app.get("/checkout",(req,res)=>{
//         res.send(`
//         <h1>This is checkout Page </h1>
//         <h2>Name: ${req.query.name} </h2>
//         <h2>Number: ${req.query.number} </h2>
//         <h2>Location: ${req.query.location} </h2>
//          `)
//      })
//      app.get("*",(req,res)=>{
//         res.status(404).send("404 Page Not Found")
//     })
// app.listen(8000,"localhost",()=>console.log("server run succesfully on 8000 port"))





// const app = express()
// app.get("/",(req,res)=>{
// res.send("Hello from server")

// })
// app.listen(8000,"localhost",()=>console.log("server run succesfully on 8000 port"))