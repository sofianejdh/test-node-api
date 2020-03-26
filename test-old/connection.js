// const mongoose = require('mongoose')
// const express = require ('express')

// const app = express()
// const bodyParser = require('body-parser')


// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json())

// connect to mongodb
// mongoose.connect('mongodb://root:password@206.189.114.230:27017/testaroo?useUnifiedTopology:true', { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect("mongodb://206.189.114.230:27017/testaroo", {
//     auth: {
//         user: 'root',
//         password: "password"
//     },
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connect('mongodb://root:password@206.189.114.230:27017', {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connection.once('open', function(){
//     console.log('conneciton has been made...')
// }).on("error", function(error){
//     console.log('Connection Error', error)
// })