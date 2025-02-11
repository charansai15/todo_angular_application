import { Component, Input, type OnInit } from "@angular/core"
import type { Task } from "../../constants/tasks.interface"

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
})
export class TasksListComponent implements OnInit {
  // Input decorator marks tasks property as input from parent component
  @Input() tasks: Task[]

  constructor() {}

  ngOnInit(): void {}

  /**
   * Removes a task from the tasks array
   * @param task The task to be removed
   */
  removeTask(task: Task) {
    // Find index of task in array
    const taskIndex = this.tasks.indexOf(task)
    // Remove task if found
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1)
    }
  }

  /**
   * Toggles the completed status of a task
   * @param task The task to toggle
   */
  toggleCompleted(task: Task) {
    // Flip the completed boolean value
    task.completed = !task.completed
  }
}

