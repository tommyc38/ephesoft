import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './people.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PeopleService]
})
export class PeopleDataModule {}
