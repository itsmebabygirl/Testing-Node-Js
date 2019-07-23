const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require ('mysql');
const bodyParser = require('body-parser');


const app = express();
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'sampledb'
});
 
connection.connect(function(error){
    if(!!error){
        console.log('error');
    }else {
        console.log('connected');
    }
});

//EJS 
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get('/api/courses/', (req, res) => {
    // change here, your object is stringified to json by express
    res.json(courses);
  });

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
  
const PORT = process.env.PORT || 3000; 

app.listen(PORT, console.log(`server started on Port ${PORT}`));