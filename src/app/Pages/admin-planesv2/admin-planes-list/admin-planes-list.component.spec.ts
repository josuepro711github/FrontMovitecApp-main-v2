import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanesListComponent } from './admin-planes-list.component';

describe('AdminPlanesListComponent', () => {
  let component: AdminPlanesListComponent;
  let fixture: ComponentFixture<AdminPlanesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlanesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
