import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h1>Task Manager</h1>
      <div class="button-container">
        <button (click)="navigateToCreateTask()">Create New Task</button>
        <button (click)="navigateToTaskList()">View Task List</button>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 2rem;
    }
    .button-container {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }
    button {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      cursor: pointer;
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToCreateTask() {
    this.router.navigate(['/create-task']);
  }

  navigateToTaskList() {
    this.router.navigate(['/tasks']);
  }
} 