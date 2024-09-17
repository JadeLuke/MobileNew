import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : any = {
    username : "",
    password : ''
  };

  router = inject(Router)
  onLogin(){
    if (this.loginObj.username === "jazi" && this.loginObj.password === '123' )
    {
      this.router.navigateByUrl('/dashboard')
    }
    else{
      alert('wrong details')
    }
  } 

}
