import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetService } from './planet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PlanetService],
})
export class PlanetDataModule {}
