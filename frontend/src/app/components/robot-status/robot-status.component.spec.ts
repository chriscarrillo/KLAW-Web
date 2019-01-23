import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotStatusComponent } from './robot-status.component';

describe('RobotStatusComponent', () => {
  let component: RobotStatusComponent;
  let fixture: ComponentFixture<RobotStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
