import { Component, inject } from '@angular/core';
import { NavComponent } from '../../shared-UI/nav/nav.component';
import { FooterComponent } from '../../shared-UI/footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../shared-UI/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterLink, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  router = inject(Router)
  signOut(){
 this.router.navigateByUrl("/login")
  }

}
