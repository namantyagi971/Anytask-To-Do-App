/* passing the same instance of express */
const express = require('express');

/* creating a new router object to handle requests */
const router = express.Router();

/* database models */
const todo = require('../models/to_do');

/* adjusting the path to the controllers for storing the reference in homeController constant variable*/
const homeController = require('../controllers/home_controllers');

/* sending the data to home page route */
router.get('/',homeController.home);

/* creating the task in database by getting post request from '/create-task' route */
router.post('/create-task',function(req,res){

    /* create function takes object and has callback function */
    todo.create({
        description : req.body.description,
        choose_category : req.body.choose_category,
        due_date : req.body.due_date
        },function(err,newtask){

        /* if error occurs */
        if(err)
        {
            console.log(`Error in storing task in database : ${err}`);
            return;
        }

        /* task created successfully in database and returning back to hone route*/
        return res.redirect('back');
    });
});

/* deleting the task from database by getting get request from '/delete-task/' route */
router.get('/delete-task/',function(req,res){
    
    /* storing all the task id which need to be deleted in one array from request.query object */
    let arr = new Array();
    for(let i in req.query)
    {
        arr.push(req.query[i]);
    }

    /* "$in" searches for any id in the array and deleteMany will delete the document which matches from collection */
    todo.deleteMany({_id: {$in : arr}},function(err){
       
       /* error occurs */
        if(err)
       {
           console.log(`Error in deleting task from database : ${err}`);
           return;
       }
       
       /* task deleted successfully, returning back to home page */
       return res.redirect('back');
    });
});

/* export to use by other files */
module.exports = router;