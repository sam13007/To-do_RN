const express= require("express")
const app = express()
const todo = require("./models/todo")

app.use(express.json());

//reterieve

app.get("/",(req,res,next)=>{
    todo.find()
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.send(err)
    })
})

app.get("/:done",(req,res,next)=>{
    const done = req.params.done
    todo.find({done:done})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})


//Update
app.put("/:id",(req,res,next)=>{
    const id=req.params.id
    todo.findByIdAndUpdate({_id:id},{done:true})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})
//delete
app.delete(("/:id"),(req,res,next)=>{
    todo.findByIdAndDelete({_id:req.params.id})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})



//Create
app.post("/add",(req,res,next)=>{
    const name = req.body.name

    const toodo = new todo({
        name:name,
        done:false
    })

    toodo.save()
    .then((data)=>{
        res.json({msg:data})
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports=app