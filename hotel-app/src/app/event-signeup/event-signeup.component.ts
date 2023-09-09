import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-signeup',
  templateUrl: './event-signeup.component.html',
  styleUrls: ['./event-signeup.component.css']
})
export class EventSigneupComponent implements OnInit {

  signupMail : string = "";

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log("You have signed up for the event with email: " + this.signupMail);
  }

}

