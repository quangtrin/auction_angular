import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
