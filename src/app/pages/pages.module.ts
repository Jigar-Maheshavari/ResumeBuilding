import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
