import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuccessComponent } from './user-success.component';

describe('UserSuccessComponent', () => {
  let component: UserSuccessComponent;
  let fixture: ComponentFixture<UserSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
