import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomwComponent } from './homw/homw.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'login', component: LoginComponent },
  {path:'homw',component:HomwComponent},
  {path:'forgot_pass',component:ForgotPassComponent}
];
