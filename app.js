const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

// IMPORT ROUTES
const users = require('./routes/users')
const authRoute = require('./routes/auth/auth')


// MIDDLEWARES
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use('/api', users)
app.use('/api/user', authRoute)

//Routes
app.get('/', (req, res) => {
    res.send('The Home Page')
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', function(){
    console.log('conneciton has been made...')
}).on("error", function(error){
    console.log('Connection Error', error)
})

// Start listeninig
app.listen(5000)
