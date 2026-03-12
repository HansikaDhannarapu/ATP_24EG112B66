// TODO: Import task functions
 // import { ... } from './task.js';
import { addTask,getAllTasks,completeTask } from "./task.js";
 // Test your module system
  // 1. Add some tasks
  addTask('eating','high','2025-11-10')
  addTask('sleep','high','2026-01-26')
  // 2. Display all tasks
  console.log(getAllTasks())
  // 3. Complete a task
  completeTask('sleep')
  // 4. Display all tasks again
  console.log(getAllTasks)
