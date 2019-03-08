import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartControlComponent } from './start-control.component';

describe('StartControlComponent', () => {
  let component: StartControlComponent;
  let fixture: ComponentFixture<StartControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
