import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/authentication.guard';
import { NotAuthenticationGuard } from './core/not-authentication.guard';
import { BlankComponent } from './shared/layouts/blank/blank.component';
import { FullComponent } from './shared/layouts/full/full.component';

const routes: Routes = [
  {
    path:'auth',
    component:BlankComponent,
    canActivate:[NotAuthenticationGuard],
    loadChildren:()=> import('./authentication/authentication.module').then(m=> m.AuthenticationModule)
  },
  {
    path:'',
    component:FullComponent,
    canActivate:[AuthenticationGuard],
    loadChildren:()=>import('./pages/pages.module').then(m=>  m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
