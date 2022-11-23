const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config({path: './Config/config.env'})

let port = process.env.PORT
let hostName = process.env.HOST_NAME

app.get('/', (req, res) =>{
    res.send(`<h1>Server is running successfully</h1>`);
})

app.listen(port, hostName, ()=>{
    console.log(`server is running on http://${hostName}:${port}`);
})