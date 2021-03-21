/* require the mongoose module */
const mongoose = require('mongoose');

/* creating database schema */
const todoSchema = new mongoose.Schema({
    description : {
        type : String,
    },
    choose_category : {
        type : String
    },
    due_date :{
        type : String,
    }
});

/* todo is name of collection in database */
const todo = mongoose.model('todo',todoSchema);

/* exporting the schema */
module.exports = todo;