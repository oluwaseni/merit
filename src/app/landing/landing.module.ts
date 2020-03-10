import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './landing-components/header/header.component';
import { Routes } from '@angular/router';
import { LandComponent } from './landing-components/land/land.component';
import { AboutComponent } from './landing-components/about/about.component';
import { ServicesComponent } from './landing-components/services/services.component';
import { FooterComponent } from './landing-components/footer/footer.component';
import { WirelessComponent } from './landing-components/services/wireless/wireless.component';
import { EnterpriseComponent } from './landing-components/services/enterprise/enterprise.component';
import { PowerComponent } from './landing-components/services/power/power.component';
import { AppRoutingModule } from '../app-routing.module';
import { WirelineComponent } from './landing-components/services/wireline/wireline.component';
import { OverviewComponent } from './landing-components/about/overview/overview.component';
import { MissionComponent } from './landing-components/about/mission/mission.component';
import { ValuesComponent } from './landing-components/about/values/values.component';
import { CultureComponent } from './landing-components/about/culture/culture.component';
import { FaqComponent } from './landing-components/faq/faq.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'head', pathMatch: 'full'
//   },
//   {
//     path: 'header',
//     component: HeaderComponent
   
//   }
// ]

@NgModule({
  declarations: [LandComponent, AboutComponent, ServicesComponent,
     WirelessComponent, EnterpriseComponent, PowerComponent, 
     WirelineComponent, OverviewComponent, MissionComponent, 
     ValuesComponent, CultureComponent, FaqComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LandingModule { }
