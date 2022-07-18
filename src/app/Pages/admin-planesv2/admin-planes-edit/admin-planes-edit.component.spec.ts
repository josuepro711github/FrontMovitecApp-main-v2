import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanesEditComponent } from './admin-planes-edit.component';

describe('AdminPlanesEditComponent', () => {
  let component: AdminPlanesEditComponent;
  let fixture: ComponentFixture<AdminPlanesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlanesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
