const http = require("http")
const app = require("./app")
const server = http.createServer(app)
const mongoose = require("mongoose")
const port =3000


mongoose.connect("mongodb://localhost:27017/todo",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected")
    }
})



server.listen(port,()=>{
    console.log("server listening on port", port)
})