import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'location',
    loadChildren: () =>
      import('./modules/locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  { path: '', redirectTo: 'location', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/error-1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }