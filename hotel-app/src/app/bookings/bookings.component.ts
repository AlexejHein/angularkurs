import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BOOKINGS } from '../mock-bookings';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(){}

  bookings = BOOKINGS;

  ngOnInit(): void {
    
  }

  deletBooking(booking: Booking): void{
    var index = BOOKINGS.indexOf(booking);
    BOOKINGS.splice(index, 1);
  }

}
