import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotConnectionDialogComponent } from './robot-connection-dialog.component';

describe('RobotConnectionDialogComponent', () => {
  let component: RobotConnectionDialogComponent;
  let fixture: ComponentFixture<RobotConnectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotConnectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotConnectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
