import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorInfoCardComponent } from './door-info-card.component';

describe('DoorInfoCardComponent', () => {
  let component: DoorInfoCardComponent;
  let fixture: ComponentFixture<DoorInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoorInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
