import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricsComponent } from './pediatrics.component';

describe('PediatricsComponent', () => {
  let component: PediatricsComponent;
  let fixture: ComponentFixture<PediatricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PediatricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
