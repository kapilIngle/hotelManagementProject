import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuccessComponent } from './admin-success.component';

describe('AdminSuccessComponent', () => {
  let component: AdminSuccessComponent;
  let fixture: ComponentFixture<AdminSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
