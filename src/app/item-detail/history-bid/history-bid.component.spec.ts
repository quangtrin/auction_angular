import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBidComponent } from './history-bid.component';

describe('HistoryBidComponent', () => {
  let component: HistoryBidComponent;
  let fixture: ComponentFixture<HistoryBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryBidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
