// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle,validatePriority,validateDueDate } from './validator.js';

const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
 // Validate using imported functions
 // If valid, add to tasks array
  // Return success/error message
   if(!validateTitle(title)&&!validatePriority(priority)&&!validateDueDate(dueDate)){
    return 'Invalid Task'
 }
 tasks.push({title,priority,dueDate})
 return 'success'
}

// 2. Get all tasks
  // Return all tasks
  function getAllTasks() {
      return tasks
   }
// 3. Mark task as complete
  // Find task and mark as complete
 function completeTask(taskId) {
  for(let taskObj of tasks)
  {
    if(taskObj.title==taskId)
        taskObj.status="complete"
    }
 }
   // Export functions
export {addTask,getAllTasks,completeTask}

