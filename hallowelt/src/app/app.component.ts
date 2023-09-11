import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'hallowelt';

  numbers = [1, 2, 3, 4, 5];
  
  name: string;
  text: string;
  constructor() {
    this.name = 'Max Mustermann';
    this.text = 'Das ist ein langer Text.';
  }
  
}
