import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

const routes: Routes = [
  { 
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'help',
    component:HelpComponent
  },
  {
    path :'profile',
    component:ProfileComponent
  },
  {
    path:'splashscreen',
    component:SplashscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
