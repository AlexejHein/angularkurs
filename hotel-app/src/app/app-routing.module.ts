import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { EventSigneupComponent } from './event-signeup/event-signeup.component';

const routes: Routes = [
  { path: 'bookings', component: BookingsComponent },
  { path: 'create-booking', component: CreateBookingComponent},
  { path: 'event-signup', component: EventSigneupComponent},
  { path: 'edit-booking/:id', component: CreateBookingComponent},
  { path: '', redirectTo: '/bookings', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
