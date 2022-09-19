import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/modules/material.module';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PrincipalModule { }
