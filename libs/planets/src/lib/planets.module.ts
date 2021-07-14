import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetViewerComponent } from './planet-viewer/planet-viewer.component';
import { PlanetRoutesModule } from './planets-routes.module';
import { PlanetDataModule } from '@ephesoft/planet-data';
import { PlanetsFeatComponent } from './planets-feat/planets-feat.component';
import { ListModule } from '@ephesoft/ui-components';
import { RouterModule } from '@angular/router';
import { PeopleDataModule } from '@ephesoft/people-data';
import { PeopleViewerComponent } from './people-viewer/people-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PeopleDataModule,
    PlanetRoutesModule,
    PlanetDataModule,
    ListModule],
  declarations: [
    PeopleViewerComponent,
    PlanetViewerComponent,
    PlanetsFeatComponent
  ],
  exports: [PlanetViewerComponent, PlanetsFeatComponent, PeopleViewerComponent]
})
export class PlanetsModule {}
