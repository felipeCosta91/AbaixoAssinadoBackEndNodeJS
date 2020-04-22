const express = require('express')
const app = express()
const cors = require('cors')
const ControllerDB = require('./controller/controllerDB')
const port = process.env.PORT || 3333;
// connecta o banco
require('./db/connection')
app.use(cors())
app.use(express.json())
app.route('/')
    .get(ControllerDB.index)
    .post(ControllerDB.addItem)

app.listen(port,()=>{`Servidor online em http://localhost:${port}`})