import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSuccessComponent } from './owner-success.component';

describe('OwnerSuccessComponent', () => {
  let component: OwnerSuccessComponent;
  let fixture: ComponentFixture<OwnerSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
