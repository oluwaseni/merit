import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './landing/landing-components/land/land.component';
import { AboutComponent } from './landing/landing-components/about/about.component';
import { ServicesComponent } from './landing/landing-components/services/services.component';
import { WirelessComponent } from './landing/landing-components/services/wireless/wireless.component';
import { EnterpriseComponent } from './landing/landing-components/services/enterprise/enterprise.component';
import { PowerComponent } from './landing/landing-components/services/power/power.component';
import { WirelineComponent } from './landing/landing-components/services/wireline/wireline.component';


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
    component: ServicesComponent,
    children:[
      {path: '',
        redirectTo: 'wireless', pathMatch: 'full'
    },
    {
      path: 'wireless',
      component: WirelessComponent
    },
    {
      path: 'wireline',
      component: WirelineComponent
    },
    {
      path: 'enterprise',
      component: EnterpriseComponent
    },
    {
      path: 'power',
      component: PowerComponent
    }
    ]
   
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
