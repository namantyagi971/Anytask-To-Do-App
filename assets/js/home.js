/* this file uses plain javascript (no jQuery) */

/* this delete_task function takes array as argument and try to make url that consists of task id  */
/* to delete task from database*/
function delete_task(arr)
{
    /* if array length is 0,then displaying message to select atleast one task to delete*/
    if(arr.length==0)
    {
        window.alert("Please select at least one task to delete!!!");
        return;
    }

    /* now trying to make the url in the form of /delete-task/?id0="6055fd212cf7f7193c5c29d5"&id1="6055fd212cf7f7193c5c29d5...." */
    url = '/delete-task/?';
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
        if(i==arr.length-1)
        url+='id'+count+'='+arr[i];
        else
        url+='id'+count+'='+arr[i]+'&';
        count++;
    }

    /* set the value of attribute href to url */
    document.querySelector('a').setAttribute("href",url);    
}

/* for deleting the task */

let deletebutton = document.querySelector('#delete-task');
deletebutton.addEventListener('click',function(){
    
    /* creating the new array to store the ids of all tasks which have been selected through checkbox */
    let arr = new Array();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for(let checkbox of checkboxes)
    {
        /* if checkbox is checked,then push the id of that task in the array*/
        if(checkbox.checked)
        {   
            arr.push(checkbox.getAttribute('id'));
            let x=document.createElement("DEL");
        }
    }

    /* call to delete_task function */
    delete_task(arr);
});

/* if the user has not chosen category,then making the div having class .task-category as hidden so that */
/* nothing will be display */

let taskcategories = document.querySelectorAll('.task-category');
for(let taskcategory of taskcategories)
{
    if(taskcategory.innerText=='Choose a category')
      taskcategory.style.visibility="hidden";
}

/* for adding the task */

let addTaskButton = document.querySelector('#add-task');
addTaskButton.addEventListener('click',function(){

    /* if user has not written anything inside description box, then message will be displayed that task with */
    /* no description is addded.Similarly if he doesn't choose any due date ,no deadline will be printed */
    if(document.querySelector('textarea').value=="")
    {
        window.alert("Make sure to add description.\nAdding task with no description this time");
    }
    
});



