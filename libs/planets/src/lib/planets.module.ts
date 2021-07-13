import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetViewerComponent } from './planet-viewer/planet-viewer.component';
import { PlanetRoutesModule } from './planets-routes.module';

@NgModule({
  imports: [CommonModule, PlanetRoutesModule],
  declarations: [
    PlanetViewerComponent
  ],
  exports: [PlanetViewerComponent]
})
export class PlanetsModule {}
