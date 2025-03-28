import { Component } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private readonly navigationService: NavigationService) {}
  
    openWhatsApp(){
      this.navigationService.openWhatsApp();
    }
}
