import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDateService } from './in-memory-date.service';
import { EventSigneupComponent } from './event-signeup/event-signeup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    CreateBookingComponent,
    EventSigneupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDateService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
