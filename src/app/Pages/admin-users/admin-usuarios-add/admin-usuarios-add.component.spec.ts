import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosAddComponent } from './admin-usuarios-add.component';

describe('AdminUsuariosAddComponent', () => {
  let component: AdminUsuariosAddComponent;
  let fixture: ComponentFixture<AdminUsuariosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
