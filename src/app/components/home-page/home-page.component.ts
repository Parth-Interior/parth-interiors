import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FeatureListComponent } from "../shared/feature-list/feature-list.component";
import { NavigationService } from '../shared/services/navigation.service';
import { FooterComponent } from "../layouts/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent, FeatureListComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  

  
}
