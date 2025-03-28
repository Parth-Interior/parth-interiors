import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import Panzoom from '@panzoom/panzoom';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  @ViewChild('zoomableImage', { static: false }) zoomableImage!: ElementRef;

  images: string[] = [
    'assets/Portfolio/1.jpg',
    'assets/Portfolio/2.jpg',
    'assets/Portfolio/3.jpg',
    'assets/Portfolio/4.jpg',
    'assets/Portfolio/5.jpg',
    'assets/Portfolio/6.jpg',
    'assets/Portfolio/7.jpg',
    'assets/Portfolio/8.jpg',
    'assets/Portfolio/9.jpg',
    'assets/Portfolio/10.jpg',
    'assets/Portfolio/11.jpg',
    'assets/Portfolio/12.jpg',
    'assets/Portfolio/13.jpg',
    'assets/Portfolio/14.jpg',
    'assets/Portfolio/15.jpg',
    'assets/Portfolio/16.jpg',
    'assets/Portfolio/17.jpg',
    'assets/Portfolio/18.jpg',
    'assets/Portfolio/19.jpg',
    'assets/Portfolio/20.jpg',
    'assets/Portfolio/21.jpg',
    'assets/Portfolio/22.jpg',
    'assets/Portfolio/23.jpg',
    'assets/Portfolio/24.jpg',
    'assets/Portfolio/25.jpg',
    'assets/Portfolio/26.jpg',
    'assets/Portfolio/27.jpg',
    'assets/Portfolio/28.jpg',
    'assets/Portfolio/29.jpg',
    'assets/Portfolio/30.jpg',
    'assets/Portfolio/31.jpg',
    'assets/Portfolio/32.jpg',
    'assets/Portfolio/33.jpg',
    'assets/Portfolio/34.jpg',
    'assets/Portfolio/35.jpg',
    'assets/Portfolio/36.jpg',
    'assets/Portfolio/37.jpg',
    'assets/Portfolio/38.jpg',
    'assets/Portfolio/39.jpg',
    'assets/Portfolio/40.jpg',
    'assets/Portfolio/41.jpg',
    'assets/Portfolio/42.jpg',
    'assets/Portfolio/43.jpg',
    'assets/Portfolio/44.jpg',
  ];

  selectedImage: string | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  openImage(image: string): void {
    this.selectedImage = image;
    this.cdr.detectChanges(); // Trigger change detection
    this.initializePanzoom();
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  nextImage(event: Event): void {
    event.stopPropagation(); // Prevent closing the viewer
    const currentIndex = this.images.indexOf(this.selectedImage!);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[nextIndex];
    this.cdr.detectChanges();
    this.initializePanzoom();
  }

  prevImage(event: Event): void {
    event.stopPropagation(); // Prevent closing the viewer
    const currentIndex = this.images.indexOf(this.selectedImage!);
    const prevIndex =
      (currentIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[prevIndex];
    this.cdr.detectChanges();
    this.initializePanzoom();
  }

  private initializePanzoom(): void {
    // if (this.zoomableImage) {
    //   Panzoom(this.zoomableImage.nativeElement, {
    //     maxScale: 5,
    //     minScale: 1,
    //     contain: 'outside',
    //   });
    // }
  }
}
