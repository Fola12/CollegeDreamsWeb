import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {landingRouting} from './app-routing';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './shared/modules/core/core.module';
import {SharedModule} from './shared/modules/shared/shared.module';
import { ProfilesComponent } from './user/profiles/profiles.component';
import {LandingModule} from "./landing/landing.module";

@NgModule({
  declarations: [
    AppComponent,
    landingRouting.components,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    landingRouting.routes,
    CoreModule,
    SharedModule,
    LandingModule
  ],
  providers: [landingRouting.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
