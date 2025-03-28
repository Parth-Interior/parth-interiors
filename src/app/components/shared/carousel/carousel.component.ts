import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  slides = [
    {
      img: 'assets/furniture/71.jpg',
      author: 'LUNDEV',
      title: 'PARTH INTERIOR',
      topic: 'THE TURNKEY SOLUTION',
      description: '"Embrace the Elegance"',
    },
    {
      img: 'assets/furniture/47.jpg',
      author: 'LUNDEV',
      title: 'PARTH INTERIOR',
      topic: 'THE TURNKEY SOLUTION',
      description: '"Embrace the Elegance"',
    },
    {
      img: 'assets/furniture/44.jpg',
      author: 'LUNDEV',
      title: 'PARTH INTERIOR',
      topic: 'THE TURNKEY SOLUTION',
      description: '"Embrace the Elegance"',
    },
    {
      img: 'assets/furniture/111.jpg',
      author: 'LUNDEV',
      title: 'PARTH INTERIOR',
      topic: 'THE TURNKEY SOLUTION',
      description: '"Embrace the Elegance"',
    },
    {
      img: 'assets/furniture/43.jpg',
      author: 'LUNDEV',
      title: 'PARTH INTERIOR',
      topic: 'THE TURNKEY SOLUTION',
      description: '"Embrace the Elegance"',
    },
    
  ];

  currentSlideIndex = 0;
  timeRunning = 3000;
  timeAutoNext = 7000;
  autoSlideTimeout: any;
  runTimeOut: any;

  constructor() {}

  ngOnInit() {
    this.autoNextSlide();
  }

  ngOnDestroy() {
    clearTimeout(this.autoSlideTimeout);
  }

  showSlider(type: string): void {
    let carouselDom = document.querySelector('.carousel');
    let sliderDom = carouselDom?.querySelector('.carousel .list');
    let sliderItemsDom!: any
    sliderItemsDom = sliderDom?.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    
    if (type === 'next') {
      sliderDom?.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom?.appendChild(thumbnailItemsDom[0]);
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
      carouselDom?.classList.add('next');
    } else {
      sliderDom?.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom?.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
      carouselDom?.classList.add('prev');
    }

    this.runNextSlide(carouselDom);
    this.autoNextSlide();
  }

  runNextSlide(carouselDom: Element | null) {
    clearTimeout(this.runTimeOut);
    this.runTimeOut = setTimeout(() => {
      carouselDom?.classList.remove('next');
      carouselDom?.classList.remove('prev');
    }, this.timeRunning);
  }

  autoNextSlide(): void {
    clearTimeout(this.autoSlideTimeout);
    this.autoSlideTimeout = setTimeout(() => {
      this.showSlider('next');
    }, this.timeAutoNext);
  }
}
