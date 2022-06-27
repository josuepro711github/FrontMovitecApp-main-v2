import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactv2Component } from './contactv2.component';

describe('Contactv2Component', () => {
  let component: Contactv2Component;
  let fixture: ComponentFixture<Contactv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contactv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contactv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
