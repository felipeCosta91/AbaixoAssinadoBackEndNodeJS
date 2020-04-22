const mongoose = require('mongoose');
require('dotenv/config')
const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-xxcn4.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(dbURL).then(
    ()=>{
        console.log('conexão efetuada com o banco de dados!')
        },
    (err)=>{
        console.log(`Erro ao conectar com o banco de dados:${err}`)
        console.log(process.env.DB_USER)

           }
    
)
require('./schema')