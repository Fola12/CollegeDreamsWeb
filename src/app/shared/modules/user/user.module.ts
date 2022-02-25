import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {SharedModule} from '../shared/shared.module';
import {userRouting} from '../../../app-routing';

@NgModule({
  imports: [
    userRouting.routes,
    SharedModule,
    RouterModule
  ],
  providers: [
    userRouting.providers
  ],
  entryComponents: [
    userRouting.entryComponent
  ],
  declarations: [
    userRouting.components
  ],
  exports: [
    userRouting.components
  ]
})
export class UserModule { }
