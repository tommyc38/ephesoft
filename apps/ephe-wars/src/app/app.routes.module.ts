import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'planets',
    loadChildren: () => import('../../../../libs/planets/src/lib/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: '**', redirectTo: 'planets', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
