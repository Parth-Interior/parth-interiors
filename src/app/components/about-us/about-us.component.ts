import { Component } from '@angular/core';
import { FooterComponent } from '../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  sailentFeatureList = [
    {
      title: 'Customer-Centric Approach',
      images: '/assets/furniture/Icon/customer-centricity.svg',
    },
    {
      title: 'Integrity & Transparency',
      images: '/assets/furniture/Icon/transparency2.svg',
    },
    {
      title: 'Innovation & Creativity',
      images: '/assets/furniture/Icon/innovation.svg',
    },
    {
      title: 'Sustainability & Responsibility',
      images: '/assets/furniture/Icon/sustainability.svg',
    },
    {
      title: 'Collaboration & Teamwork',
      images: '/assets/furniture/Icon/trust.svg',
    },
    {
      title: 'Accountability',
      images: '/assets/furniture/Icon/audition.svg',
    },
  ];

  successStoryList = [
    {
      title: 'Oberio Sky City, Borivali East. (Residential)',
    },
    {
      title: 'Concast, Marol & Taloja.',
    },
    {
      title: 'Zynova Shalby Hospital, Ghatkopar West.',
    },
    {
      title: 'Bhanushali Banquet Hall, Ghatkopar East.',
    },
    {
      title: 'HCG Manvata Cancer Centre Hospital, Nashik.',
    },
    {
      title: 'Skin Zone, Borivali West.',
    },
    {
      title: 'VK Building Service, Ghatkopar West.',
    },
    {
      title: 'Vallabh Darshan, Kandivali West. (Residential)',
    },
    {
      title: 'Ubisoft, Powai.',
    },
    {
      title: 'Esquire by Oberoi Realty, Goregaon East. (Residential)',
    },
  ];
}
