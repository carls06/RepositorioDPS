import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoComponent } from './alumno/alumno.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alumno',
    pathMatch: 'full'
  },
  {
    path: 'alumno',
    component: AlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
