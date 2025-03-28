import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { HomePageComponent } from '../../home-page/home-page.component';
import { NavigationService } from '../../shared/services/navigation.service';
import { AboutUsComponent } from '../../about-us/about-us.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { PortfolioComponent } from "../../portfolio/portfolio.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    HomePageComponent,
    AboutUsComponent,
    MatMenuModule,
    MatIconModule,
    PortfolioComponent,
    CommonModule,
],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements AfterViewInit {
  isSmallDevice = false;

  constructor(public navigationService: NavigationService) {}

  ngAfterViewInit(): void {
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

  navigateToHome() {
    this.navigationService.selectedTab.setValue(0);
  }

  // navigateToPortfolio() {
  //   this.navigationService.selectedTab.setValue(1);
  // }

  navigateToAboutUs() {
    this.navigationService.selectedTab.setValue(1);
  }
}
