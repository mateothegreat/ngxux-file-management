import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxFileManagementComponent } from './ngxux-file-management.component';

describe('NgxuxFileManagementComponent', () => {
  let component: NgxuxFileManagementComponent;
  let fixture: ComponentFixture<NgxuxFileManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxFileManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxFileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
