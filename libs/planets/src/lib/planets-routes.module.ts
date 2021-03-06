import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsFeatComponent } from './planets-feat/planets-feat.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PlanetsFeatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class PlanetRoutesModule { }
