import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveProcedureComponent } from './save-procedure.component';

describe('SaveProcedureComponent', () => {
  let component: SaveProcedureComponent;
  let fixture: ComponentFixture<SaveProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
