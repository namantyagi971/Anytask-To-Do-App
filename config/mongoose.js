/* require the mongoose module */
const mongoose = require('mongoose');

const mongodbURL = process.env.MONGODB_URL || 'mongodb://localhost/to_do_list_app_db';

/* establishing connection to mongodb and added params to avoid deprecation warnings */
mongoose.connect(mongodbURL,{useNewUrlParser:true,useUnifiedTopology:true});

/* acquire the connection */
const db = mongoose.connection;

/* on error in connection */
db.on('error',console.error.bind(console,"error in connecting to database"));

/* on successful connection */
db.once('open',function(){
    console.log("Successfully connected to the database");
})

/* export to use by other files */
module.exports = db;