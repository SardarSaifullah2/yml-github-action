import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yml-github-action';
  // console.log(process.env.SECRET_KEY);
  private apiUrl = environment.apiUrl;  // Access the API URL from the environment
  private variable = environment.variable;  // Access the variable key from the environment

  constructor() {
    console.log('Secret Key:', this.apiUrl);  // Print the API URL to the console
    console.log('Variable Key:', this.variable);// Print the API URL to the console
  }
}
