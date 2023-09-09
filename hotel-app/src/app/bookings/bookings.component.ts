import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService:BookingService){}

  bookings : Booking[] = [];

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      this.bookings = result;
    });
  }

  deletBooking(booking: Booking): void{
    this.bookingService.deletBooking(booking).subscribe();
    this.bookings = this.bookings.filter(b => b != booking);
  }

}
