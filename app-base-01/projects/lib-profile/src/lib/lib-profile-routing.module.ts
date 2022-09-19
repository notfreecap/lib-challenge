import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from '../modules/profile/profile.module';
import { LibProfileComponent } from './lib-profile.component';

export function profile(): any {return ProfileModule}

const routes: Routes = [
  {
    path: '',
    loadChildren: profile
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibProfileRoutingModule { }
