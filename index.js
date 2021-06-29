/* require the express module */
const express = require('express');

/* database configuration */
const db = require('./config/mongoose');

/* database models */
const todo = require('./models/to_do');

/* instantializing the app */
const app = express();

/* port at which the server is running */
const port = process.env.PORT || 8000;

/* middleware to recognize incoming request object as string and arrays*/
app.use(express.urlencoded({'extended':true}));

/* the following in-built middleware allows you to serve static files */
app.use(express.static('assets'));

/* all the endpoint starting with / are in index.js file inside routes folder */
app.use('/',require('./routes'));

/* set up view engine */
app.set('view engine','ejs');

/* views folder where the template file is stored to render the webpage */
app.set('views','./views'); 


/* checking whether the server is running or not */
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running the server :  ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
});