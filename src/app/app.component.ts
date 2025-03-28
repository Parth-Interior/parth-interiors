import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/layouts/header/header.component";
import { ContentComponent } from "./components/layouts/content/content.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { SideBarComponent } from "./components/layouts/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interior-web-app';
}
