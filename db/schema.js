const mongoose = require('mongoose')
const structure = mongoose.Schema;
schema=structure({
         name:String,
         phone:String,
         address:String
                 })


module.exports = mongoose.model("task",schema)