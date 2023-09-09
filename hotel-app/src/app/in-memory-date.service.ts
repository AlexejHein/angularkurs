import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDateService implements InMemoryDbService {


  createDb() {
    const BOOKINGS: Booking[] = [
      {
          id: 1,
          name: 'John Doe',
          roomNumber: 101,
          startDate: new Date(),
          endDate: new Date('2024-01-02')
      },
      {
          id: 2,
          name: 'Jane Doe',
          roomNumber: 102,
          startDate: new Date(),
          endDate: new Date('2024-01-02')
      },
      {
          id: 3,
          name: 'John Smith',
          roomNumber: 103,
          startDate: new Date(),
          endDate: new Date('2024-01-02')
      },
      {
          id: 4,
          name: 'Jane Smith',
          roomNumber: 104,
          startDate: new Date(),
          endDate: new Date('2024-01-02')
      },
  ];
  return {BOOKINGS};
  }

  constructor() { }
}
