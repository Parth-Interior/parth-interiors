import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../shared/services/navigation.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  constructor(private navigationService: NavigationService) {

  }

  navigateToHome() {
    this.navigationService.selectedTab.setValue(0);
    
  }

  openWhatsApp(){
    this.navigationService.openWhatsApp();
  }
}
