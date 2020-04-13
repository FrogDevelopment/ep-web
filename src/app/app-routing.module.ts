import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/planning'},
  {path: 'edition', loadChildren: () => import('./pages/edition/edition.module').then(m => m.EditionModule)},
  {path: 'planning', loadChildren: () => import('./pages/planning/planning.module').then(m => m.PlanningModule)},
  {path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule)},
  {path: 'volunteers', loadChildren: () => import('./pages/volunteers/volunteers.module').then(m => m.VolunteersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
