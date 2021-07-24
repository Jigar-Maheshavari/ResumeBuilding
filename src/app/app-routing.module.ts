import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './shared/layouts/blank/blank.component';
import { FullComponent } from './shared/layouts/full/full.component';

const routes: Routes = [
  {
    path:'auth',
    component:BlankComponent,
    loadChildren:()=> import('./authentication/authentication.module').then(m=> m.AuthenticationModule)
  },
  {
    path:'home',
    component:FullComponent,
    loadChildren:()=>import('./pages/pages.module').then(m=>  m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
