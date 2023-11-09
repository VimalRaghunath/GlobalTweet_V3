const express = require("express")
const App = express()
const Port = 7777

App.use((req,res)=>{
    res.write("hellooo")    
})

App.listen(Port,()=>{
    console.log("Server is Running")
})