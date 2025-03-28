import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTabsModule, MatToolbarModule, MatButtonModule, MatIconModule, ContentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
