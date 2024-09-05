import { Component } from '@angular/core';

@Component({
  selector: 'app-history-bid',
  standalone: true,
  imports: [],
  templateUrl: './history-bid.component.html',
  styleUrl: './history-bid.component.css'
})
export class HistoryBidComponent {
  public openPrice: boolean = false;

  onOpenPrice() {
    this.openPrice = !this.openPrice;
  }
}
