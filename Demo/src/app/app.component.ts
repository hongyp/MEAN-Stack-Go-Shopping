import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
            <app-hero-form></app-hero-form>
            `
})
export class AppComponent {
  title = 'app';
}
