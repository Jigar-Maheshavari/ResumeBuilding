import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AcademicDetailComponent } from './academic-detail/academic-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import jspdf from 'jspdf';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BlankComponent,
    FullComponent,
    UserDetailComponent,
    AcademicDetailComponent,
    ProjectsComponent,
    CareerDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
