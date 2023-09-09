import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSigneupComponent } from './event-signeup.component';

describe('EventSigneupComponent', () => {
  let component: EventSigneupComponent;
  let fixture: ComponentFixture<EventSigneupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSigneupComponent]
    });
    fixture = TestBed.createComponent(EventSigneupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
