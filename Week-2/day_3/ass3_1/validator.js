/*    Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like TodoList

Requirements:
     Create a modular todo app with 3 separate files:

*/
//  1. Validate task title (not empty, min 3 chars)
 function validateTitle(title) {
    if(title==null||title.length<3)
        return false
    return true
 }
   // 2. Validate priority (must be: low, medium, high)
       //let priorities.includes(priority)
  function validatePriority(priority) {
if(priority=='low'||priority=='medium'||priority=='high')
    return true
return false
}
  // 3. Validate due date (must be future date)
function validateDueDate(date){
    let dueDate=new Date('2026-02-17')
    let today=new Date()
    if(dueDate>today)
        return 'Invalid date'
    return true
}
export{validateTitle,validatePriority,validateDueDate}




