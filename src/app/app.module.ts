import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/landing-components/header/header.component';
import { LandComponent } from './landing/landing-components/land/land.component';
import { LandingModule } from './landing/landing.module';
import { FooterComponent } from './landing/landing-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
