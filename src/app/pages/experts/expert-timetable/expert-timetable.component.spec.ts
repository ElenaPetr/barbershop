import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTimetableComponent } from './expert-timetable.component';

describe('ExpertTimetableComponent', () => {
  let component: ExpertTimetableComponent;
  let fixture: ComponentFixture<ExpertTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
