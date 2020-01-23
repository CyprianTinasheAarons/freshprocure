const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const formData = require('express-form-data')
const cors = require('cors')
const PORT = process.env.PORT || 5000 
const mongoose  =require('mongoose')
const indexRoute = require('./index.route.js')
const server =app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const io = require('socket.io')(server);

app.use(cors())
app.use(bodyParser.urlencoded({extend: true}))
app.use(bodyParser.json())

//Routes
app.use('/',indexRoute)

app.use(formData.parse())

io.on('connection', function(socket){
    console.log(socket.id)
})
