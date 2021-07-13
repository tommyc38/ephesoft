import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetViewerComponent } from './planet-viewer/planet-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutesModule { }
