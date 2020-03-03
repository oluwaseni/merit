import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './landing-components/header/header.component';
import { Routes } from '@angular/router';
import { LandComponent } from './landing-components/land/land.component';

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
  declarations: [HeaderComponent, LandComponent],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
