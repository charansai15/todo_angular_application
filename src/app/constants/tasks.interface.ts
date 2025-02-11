// Interface defining the structure of a Task object
export interface Task {
  id: number // Unique identifier for each task
  name: string // The title/name of the task
  description: string // Detailed description of the task
  completed: boolean // Status flag to track if task is done
}

