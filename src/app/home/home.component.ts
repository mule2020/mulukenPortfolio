import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Properties to bind the form inputs
  name: string = '';
  subject: string = '';
  email: string = '';
  message: string = '';

  // Skills array for the skills section
  skills = [
    { name: 'JavaScript', percentage: 85 },
    { name: 'Python', percentage: 90 },
    { name: 'ReactJS', percentage: 80 },
    { name: 'C#', percentage: 85 },
    { name: 'Angular', percentage: 75 },
    { name: 'SQL', percentage: 95 }
  ];

  // Method to handle form submission
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      alert('Message sent successfully!'); // Success alert
      // Clear the form fields after submission
      this.name = '';
      this.subject = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill out all fields correctly.'); // Error alert
    }
  }

  // Constructor for dependency injection (if needed in the future)
  constructor() { }

  // Lifecycle hook for component initialization
  ngOnInit(): void {
    // Initialization logic (if needed in the future)
  }
}
