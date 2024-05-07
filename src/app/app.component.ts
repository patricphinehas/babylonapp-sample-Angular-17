import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeDComponent } from './three-d/three-d.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreeDComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'babylonapp';
}
