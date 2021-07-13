import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleModule } from '@ephesoft/people';
import { PlanetsModule } from '@ephesoft/planets';
import { AppRoutesModule } from './app.routes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PeopleModule, PlanetsModule, AppRoutesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
