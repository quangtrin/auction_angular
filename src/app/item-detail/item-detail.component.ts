import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/layouts/sidebar/sidebar.component';
import { HistoryBidComponent } from './history-bid/history-bid.component';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [SidebarComponent, HistoryBidComponent],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {

}
