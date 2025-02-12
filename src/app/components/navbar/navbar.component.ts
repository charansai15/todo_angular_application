// Import Component decorator from Angular core
import { Component } from '@angular/core';
// Import Router service for navigation
import { Router } from '@angular/router';

// Component decorator defining metadata
@Component({
  // Selector used to insert this component in templates
  selector: 'app-navbar',
  // Template definition using template literal syntax
  template: `
    <nav class="navbar">
      <!-- Brand/logo section with click handler for home navigation -->
      <div class="nav-brand" (click)="navigateHome()">Task Manager</div>
      <!-- Container for navigation buttons -->
      <div class="nav-links">
        <!-- Home navigation button -->
        <button class="nav-button" (click)="navigateHome()">Home</button>
        <!-- Tasks list navigation button -->
        <button class="nav-button" (click)="navigateToTasks()">Tasks</button>
        <!-- Create task navigation button -->
        <button class="nav-button" (click)="navigateToCreateTask()">New Task</button>
      </div>
    </nav>
  `,
  // Component styles using template literal syntax
  styles: [`
    /* Main navbar container styles */
    .navbar {
      background-color: #2c3e50;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    /* Brand/logo text styles */
    .nav-brand {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }
    /* Navigation links container styles */
    .nav-links {
      display: flex;
      gap: 1rem;
    }
    /* Navigation button styles */
    .nav-button {
      background-color: transparent;
      color: white;
      border: 1px solid white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    /* Hover effect for navigation buttons */
    .nav-button:hover {
      background-color: white;
      color: #2c3e50;
    }
  `]
})
// NavbarComponent class definition
export class NavbarComponent {
  // Constructor with Router service injection
  constructor(private router: Router) {}

  // Method to navigate to home page
  navigateHome() {
    this.router.navigate(['/']);
  }

  // Method to navigate to tasks list page
  navigateToTasks() {
    this.router.navigate(['/tasks']);
  }

  // Method to navigate to create task page
  navigateToCreateTask() {
    this.router.navigate(['/create-task']);
  }
}
