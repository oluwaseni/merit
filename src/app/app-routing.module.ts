import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './landing/landing-components/land/land.component';
import { AboutComponent } from './landing/landing-components/about/about.component';
import { ServicesComponent } from './landing/landing-components/services/services.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandComponent
   
  },
  {
    path: 'service',
    component: ServicesComponent
   
  },
  {
    path: 'about',
    component: AboutComponent
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
