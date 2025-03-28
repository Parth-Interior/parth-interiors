import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

const SPECS_DATA = [
  {
    title: 'Civil Services',
    description:
      'We offer comprehensive civil services for all your construction needs. From site preparation and structural work to infrastructure development, we handle every aspect of your project with expertise and attention to detail. Our team also specializes in high-quality interior solutions, including flooring, marble installation, tile work, and granite work. Whether you are building a new property, extending an existing one, or renovating a space, we ensure every phase of construction meets local regulations and is completed to the highest standards. Trust us to provide a solid foundation for your project, both structurally and aesthetically.',
    image: '/assets/furniture/75.jpg',
    backgroundImg: '/assets/furniture/bg3.svg',
  },
  {
    title: 'Carpentry Services',
    description:
      'Our carpentry services encompass a broad range of woodwork, including custom furniture, cabinetry, framing, and finishing. Whether you are looking for bespoke wood installations for commercial spaces or structural woodwork for residential properties, our expert carpenters deliver precision and exceptional quality in every project. From concept to completion, we ensure that every detail meets your specific needs and standards.',
    image: '/assets/furniture/131.jpg',
    backgroundImg: '/assets/furniture/bg3.svg',
  },
  {
    title: 'Electrical Services',
    description:
      'We provide complete electrical services, including the installation of wiring, lighting systems, power outlets, and other essential electrical components. Our profestional electricians ensure that all electrical work is safe, up to code, and tailored to your project’s requirements, whether it is for a hotel, office, or residential building.',
    image: '/assets/furniture/95.jpg',
    backgroundImg: '/assets/furniture/bg3.svg',
  },
  {
    title: 'Plumbing Services',
    description:
      'We offer reliable plumbing services for both new builds and renovation projects. Our team handles everything from water supply lines and drainage systems to sewage and gas connections. We provide practical, long-lasting solutions that ensure the smooth operation of plumbing systems throughout your property.',
    image: '/assets/furniture/103.jpg',
    backgroundImg: '/assets/furniture/bg3.svg',
  },
  {
    title: 'Painting Services',
    description:
      'Our professional painting services cover both interior and exterior painting. We use high-quality paints and finishes to enhance the appearance of your space. Whether it is an office building, a café, or a hospital, we provide flawless painting services that contribute to the aesthetic and functional qualities of your property.',
    image: '/assets/furniture/86.jpg',
    backgroundImg: '/assets/furniture/bg3.svg',
  },
];

const SAILENT_FEATURE_LIST = [
  {
    title: 'Single Point of Responsibility',
    images: '/assets/furniture/Icon/social.svg',
    description: 'One firm manages everything — from raw material to execution — reducing the stress of dealing with multiple vendors.',
  },
  {
    title: 'Time Efficiency',
    images: '/assets/furniture/Icon/appointment.svg',
    description: 'Projects are completed faster with streamlined planning, coordination, and execution.',
  },
  {
    title: 'Cost-Effective Solutions',
    images: '/assets/furniture/Icon/piggy-bank (1).svg',
    description: 'Turnkey firms often get better rates on materials and labor, passing those savings on to the client.',
  },  
  {
    title: 'Quality Assurance',
    images: '/assets/furniture/Icon/high-quality.svg',
    description: 'Consistent quality is maintained across all stages, from design to construction and finishing.',
  },
  {
    title: 'Expertise & Professionalism',
    images: '/assets/furniture/Icon/expertise.svg',
    description: 'Benefit from a skilled team with in-depth industry knowledge, ensuring well-planned, creative, and functional spaces.',
  },  
  {
    title: 'Hassle-Free Experience',
    images: '/assets/furniture/Icon/hassle-free.svg',
    description: 'The firm handles every detail — including permits, procurement, and workforce management — allowing clients to focus on their lives or businesses.',
  },  
  {
    title: 'Customization & Personalization',
    images: '/assets/furniture/Icon/customize (1).svg',
    description: 'Turnkey firms tailor designs and solutions to reflect the client’s style, needs, and budget.',
  },
  {
    title: 'Post-Completion Support',
    images: '/assets/furniture/Icon/technical-support.svg',
    description: 'Many firms offer after-project services, ensuring long-term satisfaction and addressing any issues that arise.',
  },
];

const PROJECT_TYPE = [
  {
    title: 'Residential',
    images: '/assets/furniture/27.jpg',
  },
  {
    title: 'Commercial',
    images: '/assets/furniture/130.jpg',
   
  },
  {
    title: 'Hospitality',
    images: '/assets/furniture/128.jpg',
  },
];


@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss',
})
export class FeatureListComponent implements AfterViewInit {
  constructor(private sanitizer: DomSanitizer) {}
  specsData = SPECS_DATA;
  sailentFeatureList = SAILENT_FEATURE_LIST;
  projectTypeList = PROJECT_TYPE;
  currentPage = 0;
  totalPages!: number;
  isScrolling = false; // Flag to prevent multiple scrolls in a short time

  isSmallDevice = false;

  ngAfterViewInit(): void {
    this.scrollToPage(0);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth < 678) {
      console.log(
        `Window resized. Width: ${screenWidth}px, Height: ${screenHeight}px`
      );
      this.isSmallDevice = true;
    } else {
      this.isSmallDevice = false;
    }

    window.addEventListener('resize', () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (screenWidth < 678) {
        this.isSmallDevice = true;
      } else {
        this.isSmallDevice = false;
      }
    });
  }

  getSafeUrl(imgUrl: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${imgUrl})`);
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    if (this.isScrolling) return; // Prevent if already scrolling
    this.isScrolling = true;

    setTimeout(() => {
      this.isScrolling = false; // Reset flag after 300ms
    }, 300);

    if (event.deltaY > 0) {
      this.goToNextPage();
    } else if (event.deltaY < 0) {
      this.goToPreviousPage();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.scrollToPage(this.currentPage);
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.scrollToPage(this.currentPage);
    }
  }

  scrollToPage(pageNumber: number): void {
    const page = document.getElementById(`specs${pageNumber + 1}`);
    if (page) {
      window.scrollTo({
        top: page.offsetTop,
        behavior: 'smooth',
      });
    }
  }
}
