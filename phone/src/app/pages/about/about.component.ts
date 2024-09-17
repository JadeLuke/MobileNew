import { Component } from '@angular/core';
import { NavComponent } from '../../shared-UI/nav/nav.component';
import { FooterComponent } from '../../shared-UI/footer/footer.component';
import { SidebarComponent } from '../../shared-UI/sidebar/sidebar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent, FooterComponent, SidebarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
