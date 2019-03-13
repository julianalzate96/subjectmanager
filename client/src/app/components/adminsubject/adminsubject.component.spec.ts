import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsubjectComponent } from './adminsubject.component';

describe('AdminsubjectComponent', () => {
  let component: AdminsubjectComponent;
  let fixture: ComponentFixture<AdminsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
