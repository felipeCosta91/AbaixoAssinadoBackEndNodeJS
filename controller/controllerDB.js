const schema = require('../db/schema')
// lista os dados 
exports.index =async  (req,res)=>{
    await schema.find({}, (err,data)=>{
        if(err){
            res.status(500).send(err)
               }
            res.status(200).json(data)
                                      })
                                 }
// adiciona registro
exports.addItem =  (req,res)=>{
const data = new schema(req.body);
    data.save((err,data)=>{
    if(err){
            res.status(500).send(err)
           }
            res.status(200).send(data)
                            })
                              }
