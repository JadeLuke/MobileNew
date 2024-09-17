import { Component } from '@angular/core';
import { NavComponent } from '../../shared-UI/nav/nav.component';
import { FooterComponent } from '../../shared-UI/footer/footer.component';
import { SidebarComponent } from '../../shared-UI/sidebar/sidebar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavComponent, FooterComponent, SidebarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
