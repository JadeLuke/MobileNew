import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { CompanyComponent } from './pages/company/company.component';

export const routes: Routes = [
    {path:"", component: LandingComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: SignUpComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "dashboard", children: [{path: "company", component: CompanyComponent}]},
    {path: "about", component: AboutComponent},
    {path: "gallery", component: GalleryComponent},
    {path: "settings", component: SettingsComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", redirectTo: "login"},
    {path: "**", component: ErrorComponent}
];
