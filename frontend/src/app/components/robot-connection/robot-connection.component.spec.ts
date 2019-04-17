import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotConnectionComponent } from './robot-connection.component';

describe('RobotStatusComponent', () => {
  let component: RobotConnectionComponent;
  let fixture: ComponentFixture<RobotConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
