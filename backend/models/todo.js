const mongoose = require("mongoose")
const {Schema}  = mongoose
const todoSchema = mongoose.Schema({
    name:{
        type:String,
    },
    done:{
        type:Boolean
    }
})

const Todo = mongoose.model('todo',todoSchema)
module.exports = Todo