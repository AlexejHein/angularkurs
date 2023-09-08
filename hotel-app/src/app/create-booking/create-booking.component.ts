import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BOOKINGS } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  }

  booking : Booking = {
    id: 100,
    name: "Your Name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  }

  ngOnInit(): void {
    if(this.router.url != '/create-booking'){
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    var bookingById = BOOKINGS.find(booking => booking.id === id)!;
    this.booking = bookingById;
    }
  }


  save(): void{
    var bookingById = BOOKINGS.find(booking => booking.id === this.booking.id);

    if(bookingById == null || bookingById == undefined){
      BOOKINGS.push(this.booking);
    }else{
      bookingById = this.booking;
    }

    this.router.navigate(['/bookings']);
  }


  dateChanged(event: Event, isSatrtDate: boolean){
    var val = (event.target as HTMLInputElement).value;
    if(isSatrtDate){
      this.booking.startDate = new Date(val);
    }else{
      this.booking.endDate = new Date(val);
    }
  }
}
