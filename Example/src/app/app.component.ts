import { Component } from '@angular/core';
import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  appIcon: string;
  xxx: string;
  constructor() {
    this.title = 'Hello World';
    this.appIcon = 'user';
    this.xxx = 'wwwww';
  }
}
