import { Component, type OnInit } from "@angular/core"
import type { Task } from "../../constants/tasks.interface"

@Component({
  selector: "app-tasks-form",
  templateUrl: "./tasks-form.component.html",
})
export class TasksFormComponent implements OnInit {
  // Counter for generating unique, sequential task IDs
  private nextTaskId = 1

  // Array to store all tasks
  tasks: Task[] = []

  // Object to store the current new task being created
  // Initialized with default values
  newTask: Task = {
    id: 0,
    name: "",
    description: "",
    completed: false,
  }

  constructor() {}

  ngOnInit(): void {
    // Lifecycle hook that runs when component initializes
    // Can be used for initialization logic
  }

  /**
   * Adds a new task to the tasks array
   * Validates that task name is not empty
   * Assigns an auto-incremental ID
   * Resets the form after adding
   */
  addTask() {
    // Only add task if name is not empty or just whitespace
    if (this.newTask.name.trim() !== "") {
      // Create new task object using spread operator to copy newTask
      const task: Task = {
        ...this.newTask,
        id: this.nextTaskId, // Assign current ID from counter
      }

      // Add task to array
      this.tasks.push(task)

      // Increment ID counter for next task
      this.nextTaskId++

      // Reset form by creating new empty task object
      this.newTask = {
        id: 0,
        name: "",
        description: "",
        completed: false,
      }
    }
  }
}

