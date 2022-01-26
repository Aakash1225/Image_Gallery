const express = require('express')
const app = express()
const port = 5000
const hbs = require('express-handlebars');
const path = require('path')

// calls different middlewares in express application
app.use(express.json()); //express.json helps to post json data

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

// connect mongoDB Database
require('./server/database/database')();

// setup view engine
app.set('view engine', 'hbs')

// Calling route
app.use('/' , require('./server/router/router'))

app.listen(port, (error) => {
    if(error) throw error
    console.log(`The app listening at http://localhost:${port}`)
})