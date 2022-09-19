import { NgModule } from '@angular/core';
import { LibProfileRoutingModule } from './lib-profile-routing.module';
import { LibProfileComponent } from './lib-profile.component';



@NgModule({
  declarations: [
    LibProfileComponent
  ],
  imports: [
    LibProfileRoutingModule
  ],
  exports: [
    LibProfileComponent
  ]
})
export class LibProfileModule { }
