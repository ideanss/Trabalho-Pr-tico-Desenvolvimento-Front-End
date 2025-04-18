import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule ],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  title = 'livros-angular';
}
