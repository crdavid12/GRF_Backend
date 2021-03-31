const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routesV1 = require('./routes/v1/index')

//Habilitar lectura de variables de entorno
dotenv.config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

routesV1(app);


//conexion base de datos y puerto
const PORT = process.env.PORT || 5000
const direccionIp = "192.168.1.12"
const url = "https://grf1.herokuapp.com/"

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("Conectado a Mongo");
    app.listen(url,()=>{
        console.log(`Running on ${PORT}`);
    })
}).catch(error=>{
    console.log("Mongo error= " + error);
})

