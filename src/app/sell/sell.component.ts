import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [RouterLink, FileUploadModule, ImageModule, CommonModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css',
})
export class SellComponent {
  selectedFileUrl = '../../assets/img/default-image.jpg';
  onSelect(event: any) {
    if (event.currentFiles.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.currentFiles[0]);
      reader.onload = (e: any) => {
        this.selectedFileUrl = e.target.result;
      };
    }
  }
}
