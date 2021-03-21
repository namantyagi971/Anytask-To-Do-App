/* importing database models */
const todo = require('../models/to_do');

/* reading task from database / fetching task from database and export it */
module.exports.home = function(req,res){

   /* {} empty object signifies fetch everything from collection to display */
    todo.find({},function(err,tasks){
        
        /* on error */
        if(err)
        {
           console.log(`Error in fetching data from database : ${err}`);
           return;
        }

        /* render the home.ejs file with required information from database */ 
        return res.render('home',{
           all_tasks : tasks,
           title: 'Anytask To Do app'
        });
  });
}

