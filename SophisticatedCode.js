/*

Filename: SophisticatedCode.js

This code demonstrates a sophisticated and complex implementation of a task management system.

*/

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }

  markIncomplete() {
    this.completed = false;
  }

  displayTask() {
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
    console.log(`Priority: ${this.priority}`);
    console.log(`Completed: ${this.completed}`);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  markComplete(task) {
    task.markComplete();
  }

  markIncomplete(task) {
    task.markIncomplete();
  }

  displayTasks() {
    this.tasks.forEach((task) => {
      task.displayTask();
    });
  }
}

// Create instances of Task
const task1 = new Task(
  "Implement login functionality",
  "Add authentication feature to the website",
  "2021-10-15",
  2
);

const task2 = new Task(
  "Refactor codebase",
  "Improve code readability and performance",
  "2021-10-20",
  1
);

// Create TaskManager instance
const taskManager = new TaskManager();

// Add tasks to the TaskManager
taskManager.addTask(task1);
taskManager.addTask(task2);

// Mark task1 as complete
taskManager.markComplete(task1);

// Display all tasks
taskManager.displayTasks();